const inquiryTypes = new Set([
  "Partnership / strategic collaboration",
  "Development or infrastructure initiative",
  "Diaspora engagement",
  "Youth and talent development",
  "Artist / creator collaboration",
  "Music / sync / licensing",
  "Cultural rights / research",
  "Sponsorship or funding support",
  "Media / speaking request",
  "Career / team interest",
  "Volunteer / contributor",
  "General enquiry",
  "other",
]);

const involvementInterests = new Set([
  "Volunteer time & skills",
  "Creative practice & crafts",
  "Diaspora connection",
  "Institutional partnership",
  "Share in my community",
]);

const creatorClusters = new Set([
  "Sound & live production",
  "Film, games & moving image",
  "Textiles, fashion & material craft",
  "Food, place & built heritage",
  "Words, language & archives",
  "Digital craft & essential support",
  "Another practice",
]);

const nextSteps = new Set([
  "Email response",
  "Introductory call",
  "Partnership meeting",
  "Send information",
  "Not sure yet",
]);

const emailPattern = /^[^\s@\r\n<>]+@[^\s@\r\n<>]+\.[^\s@\r\n<>]+$/;
const maxBodyBytes = 12000;

function respond(status, message) {
  return Response.json({ message }, {
    status,
    headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" },
  });
}

function field(value, maxLength, required = false, multiline = false) {
  if (typeof value !== "string") return null;
  const text = value.trim();
  if (text.length > maxLength || (required && !text) ||
      (multiline ? /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/ : /[\x00-\x1F\x7F]/).test(text)) return null;
  return text;
}

export default async function handler(request) {
  if (request.method !== "POST") return respond(405, "Method not allowed.");

  const origin = request.headers.get("origin");
  if (!origin || origin !== new URL(request.url).origin || request.headers.get("sec-fetch-site") === "cross-site") {
    return respond(403, "This request must come from the contact page.");
  }
  if (!/^application\/json(?:\s*;|\s*$)/i.test(request.headers.get("content-type") || "")) {
    return respond(415, "Unsupported request format.");
  }
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > maxBodyBytes) {
    return respond(413, "Your inquiry is too long.");
  }

  let payload;
  try {
    const reader = request.body?.getReader();
    if (!reader) return respond(400, "Invalid inquiry. Please check your details and try again.");
    const decoder = new TextDecoder();
    let body = "";
    let bytes = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > maxBodyBytes) {
        await reader.cancel();
        return respond(413, "Your inquiry is too long.");
      }
      body += decoder.decode(value, { stream: true });
    }
    payload = JSON.parse(body + decoder.decode());
  } catch {
    return respond(400, "Invalid inquiry. Please check your details and try again.");
  }
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return respond(400, "Invalid inquiry. Please check your details and try again.");
  }
  if (payload["bot-field"]) return respond(200, "Inquiry received.");

  const name = field(payload.name, 120, true);
  const email = field(payload.email, 254, true);
  if (!name || !email || !emailPattern.test(email) || payload.consent !== "yes") {
    return respond(400, "Please check all required fields and try again.");
  }

  let subject;
  let text;
  if (payload.kind === "career" || payload.kind === "volunteer") {
    const region = field(payload.region, 120, true);
    const focus = field(payload.focus, 120, true);
    const experience = field(payload.experience, 2000, true, true);
    const availability = field(payload.availability, 200, true);
    const portfolio = field(payload.portfolio ?? "", 300);
    let portfolioUrl = "";
    if (portfolio) {
      try {
        const url = new URL(portfolio);
        if (!["https:", "http:"].includes(url.protocol) || url.username || url.password || !url.hostname.includes(".")) throw new Error();
        portfolioUrl = url.href;
      } catch {
        return respond(400, "Please provide a valid portfolio link or leave it empty.");
      }
    }
    if (!region || !focus || !experience || !availability || portfolio === null) {
      return respond(400, "Please check all required fields and try again.");
    }
    const isCareer = payload.kind === "career";
    subject = `${isCareer ? "Career" : "Volunteer"} introduction: ${focus}`;
    text = [
      `Private ${isCareer ? "career" : "volunteer"} introduction (not an application to an open role or a commitment to a schedule).`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Location: ${region}`,
      `${isCareer ? "Work sought" : "Area to support"}: ${focus}`,
      `${isCareer ? "Experience and skills" : "Skills and contribution"}:`,
      experience,
      `Availability: ${availability}`,
      `Portfolio / profile: ${portfolioUrl || "Not provided"}`,
      "Consent: May use these details to consider and respond to this introduction; no public listing.",
    ].join("\n");
  } else if (payload.kind === "involvement") {
    const region = field(payload.region, 120, true);
    const interest = field(payload.interest, 100, true);
    if (!region || !involvementInterests.has(interest)) {
      return respond(400, "Please check all required fields and try again.");
    }
    subject = `Get involved: ${interest}`;
    text = [
      "Expression of interest from the Get involved page (not a membership registration).",
      `Name: ${name}`,
      `Email: ${email}`,
      `Country / region: ${region}`,
      `Interest: ${interest}`,
      "Consent: May use these details to follow up about this interest.",
    ].join("\n");
  } else if (payload.kind === "creator-interest") {
    const region = field(payload.region, 120, true);
    const cluster = field(payload.cluster, 100, true);
    const skills = field(payload.skills, 500, true, true);
    if (!region || !creatorClusters.has(cluster) || !skills) {
      return respond(400, "Please check all required fields and try again.");
    }
    subject = `Creator introduction: ${cluster}`;
    text = [
      "Private expression of interest from the Creator & Artisan Community page (not a public directory or application).",
      `Name: ${name}`,
      `Email: ${email}`,
      `Where they work: ${region}`,
      `Field: ${cluster}`,
      "Practice:",
      skills,
      "Consent: May use these details to consider and respond to this introduction; no public listing.",
    ].join("\n");
  } else if (payload.kind === undefined) {
    const organisation = field(payload.organisation ?? "", 160);
    const phone = field(payload.phone ?? "", 60);
    const country = field(payload.country, 120, true);
    const inquiryType = field(payload.inquiryType, 100, true);
    const customInquiry = field(payload.customInquiry ?? "", 160, inquiryType === "other");
    const inquirySubject = field(payload.subject, 120, true);
    const message = field(payload.message, 4000, true, true);
    const nextStep = field(payload.nextStep, 60, true);
    if (organisation === null || phone === null || !country || !inquiryTypes.has(inquiryType) ||
        customInquiry === null || !inquirySubject || !message || !nextSteps.has(nextStep)) {
      return respond(400, "Please check all required fields and try again.");
    }
    subject = inquirySubject;
    text = [
      `Name: ${name}`,
      `Organisation: ${organisation || "Not provided"}`,
      `Email: ${email}`,
      `Phone / WhatsApp: ${phone || "Not provided"}`,
      `Country / region: ${country}`,
      `Inquiry type: ${inquiryType === "other" ? customInquiry : inquiryType}`,
      `Subject: ${subject}`,
      `Desired next step: ${nextStep}`,
      "",
      "Message:",
      message,
    ].join("\n");
  } else {
    return respond(400, "Invalid inquiry. Please check your details and try again.");
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.RESEND_TO_EMAIL;
  if (!apiKey || !from || !emailPattern.test(from) || !to || !emailPattern.test(to)) {
    console.error("Inquiry email configuration is missing or invalid.");
    return respond(503, "The inquiry form is temporarily unavailable. Please use an email link instead.");
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject: `FEPAR inquiry: ${subject}`, text }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      console.error("Inquiry email delivery failed with status", response.status);
      return respond(502, "We could not send your inquiry. Please try again or use an email link instead.");
    }
    return respond(200, "Inquiry received.");
  } catch (error) {
    console.error("Inquiry email delivery failed", error);
    return respond(502, "We could not send your inquiry. Please try again or use an email link instead.");
  }
}
