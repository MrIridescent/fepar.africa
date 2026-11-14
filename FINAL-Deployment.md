# FEPAR deployment checklist

This repository builds a static Next.js export (`out/`) and sends contact, get-involved, and creator-introduction submissions through the Netlify Function at `/.netlify/functions/inquiry`. No public registry or database is configured. Do not put API keys, tokens, or private submission data in Git, this document, or browser-exposed `NEXT_PUBLIC_` variables.

## 1. Choose one production deployment path

- **Existing GitHub Actions path:** A push to `main` runs `./.github/workflows/ci-cd.yml`, validates the site, then deploys `out/` **and** `./netlify/functions/` to Netlify. Set `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` as GitHub Actions secrets (and approve the `production` environment if your repository requires it). The target site ID must be the Netlify site serving `fepar.africa`. Inspect the Actions deploy result before declaring the release live.
- **Alternative Netlify Git integration:** Connect this repository's `main` branch to the intended Netlify site. Build command: `npm run build`; publish directory: `out`; functions directory: `netlify/functions` (already declared in `./netlify.toml`). Avoid simultaneous GitHub Actions and Netlify Git deployments to the same site; disable one deployment path if using the other.
- **Manual deployment:** From a linked Netlify project, build with `npm ci && npm run build` and deploy the export **with functions**, not just the static files: `netlify deploy --prod --dir=out --functions=netlify/functions`. A static-only upload leaves forms nonfunctional.

Set the production custom domain `fepar.africa` on the target Netlify site and follow Netlify's DNS and HTTPS instructions. Check that `https://fepar.africa/` serves this release; the sitemap and canonical metadata use that domain. Do not assume a Git push alone makes the domain live if the deployment job is missing credentials or fails.

## 2. Configure private runtime settings on Netlify

In the **same Netlify site** that serves production, configure these environment-variable names in Site configuration → Environment variables, scoped to **Functions** (or all scopes). Enter your own real values there; the strings below are descriptions, not example credentials.

| Name | What to set | Required |
| --- | --- | --- |
| `RESEND_API_KEY` | Secret Resend API key with permission to send email | Yes, for forms |
| `RESEND_FROM_EMAIL` | Sender address at a domain verified in your Resend account | Yes, for forms |
| `RESEND_TO_EMAIL` | Private FEPAR inbox receiving introductions and inquiries | Yes, for forms |

Verify the sending domain in Resend and set the DNS records Resend requests. Confirm that the receiving inbox is monitored. After saving variables, trigger a fresh Netlify deploy so the function uses the current settings. Netlify built-in form detection is **not** used here and need not be enabled. The function reports an unavailable-form error if any required setting is absent; it never silently records a submission. Do not paste the key into the public site, GitHub issues, or a committed `.env` file.

## 3. Optional publishing API (Contentful)

`./lib/contentful.ts` reads published `feparPost` and `feparMedia` entries at **build time**. If you do not have a configured Contentful space, leave **both** `CONTENTFUL_SPACE_ID` and `CONTENTFUL_DELIVERY_TOKEN` unset: the News page will show its honest empty state. To publish Contentful content, set both variables in the environment that runs `npm run build` (GitHub Actions secrets mapped into the build job for the Actions path, or Netlify build environment for Netlify Git builds). `CONTENTFUL_ENVIRONMENT` is optional and defaults to `master`. A changed Contentful entry requires a new build/deployment. These are server-side build credentials, not browser-side variables. Content model field names and supported embed/media formats are defined in `./lib/contentful.ts`; do not enable partial Contentful configuration because it fails the build. There is no separate payment, AI-model, database, or public directory API to configure.

## 4. Verify after deploying

1. Check the deployment log for a successful build and a published `inquiry` function. Confirm the home page and `/festac-50/`, `/creator-community/`, `/digital-futures/`, `/explore/pan-africanism/`, `/get-involved/`, `/news/`, and `/contact/` load on the custom domain, including on a narrow phone screen.
2. Test timeline filters, skill-pathway selection, and survey save/remove on the site. These interactions use the browser only; the survey's saved answers stay on the visitor's device.
3. Submit one **non-sensitive test** from each of the contact, get-involved, and creator-introduction forms, using an address you control and explicit consent. Confirm the on-page success response **and** receipt in `RESEND_TO_EMAIL`; review Netlify Function logs and Resend delivery logs if anything fails. A 503 usually means missing settings; a 502 means the delivery provider rejected or could not complete the send. A local static preview cannot exercise the real Netlify Function.
4. Verify `https://fepar.africa/sitemap.xml` and `https://fepar.africa/robots.txt`, links, images, and audio. Keep submissions private; do not publish them as profiles without a separate consent and review process.

For a local visual preview, run `npm run build`, then `npm start` (default `http://localhost:4173`). To test Netlify Functions locally, use Netlify's local dev tooling with secrets kept in an ignored local environment, not the static preview server. If an API key is exposed, revoke/rotate it in Resend and update the Netlify variable immediately.
