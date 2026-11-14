export type RouteKey = "heritage" | "creative" | "learning" | "diaspora" | "participation";

type Option = { label: string; route?: RouteKey };

type FactQuestion = {
  kind: "fact";
  prompt: string;
  options: readonly string[];
  answer: number;
  explanation: string;
  source: { label: string; href: string };
};

type ReflectionQuestion = {
  kind: "reflection";
  prompt: string;
  options: readonly Option[];
  insight: string;
};

export type Question = (FactQuestion | ReflectionQuestion) & { stage: string };

const au = { label: "African Union · Agenda 2063 overview", href: "https://au.int/en/agenda2063/overview" };
const unesco = { label: "UNESCO · Universal Declaration on Cultural Diversity (2001)", href: "https://www.unesco.org/en/legal-affairs/unesco-universal-declaration-cultural-diversity" };
const maathai = { label: "Wangari Maathai · Nobel Lecture (2004)", href: "https://www.nobelprize.org/prizes/peace/2004/maathai/lecture/" };
const dubois = { label: "W. E. B. Du Bois · The Souls of Black Folk (1903)", href: "https://www.gutenberg.org/files/408/408-h/408-h.htm" };

export const questions: readonly Question[] = [
  { stage: "01 / Foundations", kind: "fact", prompt: "Which organisation preceded the African Union?", options: ["The Organisation of African Unity", "The United Nations", "The African Development Bank"], answer: 0, explanation: "The Organisation of African Unity (OAU) was the AU's precursor. Its work on independence and apartheid is part of the history behind Agenda 2063.", source: au },
  { stage: "01 / Foundations", kind: "fact", prompt: "What does the year 2063 refer to in Agenda 2063?", options: ["The end of a 50-year continental vision beginning in 2013", "The founding year of the AU", "A fixed date for every country to adopt one currency"], answer: 0, explanation: "The AU describes Agenda 2063 as a 50-year framework following its 2013 golden-jubilee declaration, not a single deadline for every project.", source: au },
  { stage: "01 / Foundations", kind: "reflection", prompt: "Where would you most like to begin exploring?", options: [{ label: "How the past shapes the present", route: "heritage" }, { label: "Creative work and cultural rights", route: "creative" }, { label: "Learning and practical skills", route: "learning" }, { label: "Connections across the diaspora", route: "diaspora" }], insight: "There is no required starting point. Your choice only helps order the reading suggestions at the end." },
  { stage: "01 / Foundations", kind: "fact", prompt: "How does the African Union describe its Pan-African vision?", options: ["One culture replacing all others", "An integrated, prosperous and peaceful Africa, driven by its own citizens", "A plan concerned only with trade"], answer: 1, explanation: "The AU's vision names integration, prosperity, peace and citizens' participation together. It is an aspiration, not a claim that these outcomes have already been achieved.", source: au },
  { stage: "01 / Foundations", kind: "fact", prompt: "In UNESCO's declaration, what can 'culture' include?", options: ["Only museums and monuments", "Only literature and fine art", "Ways of living together, values, traditions and beliefs as well as art"], answer: 2, explanation: "UNESCO's declaration gives culture a wide meaning, including everyday life, art and ways of living together.", source: unesco },
  { stage: "02 / Culture & care", kind: "fact", prompt: "According to UNESCO, cultural rights are part of what wider framework?", options: ["Human rights", "Tourism policy alone", "Copyright law alone"], answer: 0, explanation: "Article 5 says cultural rights are an integral part of human rights. Article 4 also makes clear that cultural diversity cannot be invoked to limit human rights.", source: unesco },
  { stage: "02 / Culture & care", kind: "reflection", prompt: "What would you most enjoy learning from someone in your community?", options: [{ label: "A story or memory", route: "heritage" }, { label: "A craft or creative practice", route: "creative" }, { label: "A skill I can pass on", route: "learning" }, { label: "How to work across places", route: "diaspora" }], insight: "Knowledge can travel through stories, making, teaching and collaboration. This is an invitation to listen, not a judgement about your background." },
  { stage: "02 / Culture & care", kind: "fact", prompt: "What does UNESCO say about heritage and creativity?", options: ["Heritage should be frozen in time", "Heritage should be preserved and handed on, while creativity grows through contact with other cultures", "Only written traditions count as heritage"], answer: 1, explanation: "Article 7 calls for heritage to be preserved and passed on, while recognising the creative exchange between cultures.", source: unesco },
  { stage: "02 / Culture & care", kind: "fact", prompt: "Why does UNESCO say creative works need special consideration?", options: ["They carry identity, values and meaning beyond their commercial value", "They should never be sold", "They can only be made by cultural institutions"], answer: 0, explanation: "Article 8 describes cultural goods and services as carriers of identity, values and meaning, not merely ordinary commodities.", source: unesco },
  { stage: "02 / Culture & care", kind: "reflection", prompt: "Which question would you bring to a local conversation?", options: [{ label: "Who gets to tell our stories?", route: "heritage" }, { label: "How are makers fairly valued?", route: "creative" }, { label: "Who has access to learning?", route: "learning" }, { label: "How do partners share decisions?", route: "participation" }], insight: "Good questions make room for other people. These themes connect to the reading routes below." },
  { stage: "03 / From ideas to action", kind: "fact", prompt: "In which year did Wangari Maathai say the Green Belt Movement began?", options: ["1963", "1977", "2004"], answer: 1, explanation: "In her 2004 Nobel Lecture, Maathai recalls beginning the Green Belt Movement in 1977, responding to needs identified by rural women.", source: maathai },
  { stage: "03 / From ideas to action", kind: "fact", prompt: "Which needs did rural women identify, in Maathai's account?", options: ["Only access to international markets", "Firewood, clean water, food, shelter and income", "Only formal qualifications"], answer: 1, explanation: "Maathai connected tree planting to women's practical needs for firewood, water, food, shelter and income, and later to broader questions of governance.", source: maathai },
  { stage: "03 / From ideas to action", kind: "reflection", prompt: "Which small action feels possible for you right now?", options: [{ label: "Ask an elder about a story and its context", route: "heritage" }, { label: "Share or support a maker's work fairly", route: "creative" }, { label: "Offer or ask for a practical skill", route: "learning" }, { label: "Start a reciprocal conversation across borders", route: "diaspora" }], insight: "A useful first step can be small, local and shaped with others rather than done for them." },
  { stage: "03 / From ideas to action", kind: "fact", prompt: "In which book did W. E. B. Du Bois write about the 'color line'?", options: ["The Souls of Black Folk", "Agenda 2063", "The Green Belt Movement"], answer: 0, explanation: "Du Bois used that phrase in The Souls of Black Folk (1903) while examining race and exclusion in the United States. His account is one perspective, not a definition of all African experiences.", source: dubois },
  { stage: "03 / From ideas to action", kind: "reflection", prompt: "What would help you keep learning after this page?", options: [{ label: "A historical starting point", route: "heritage" }, { label: "Examples of artists and creative exchange", route: "creative" }, { label: "Ideas about skills and learning", route: "learning" }, { label: "Ways to contribute or collaborate", route: "participation" }], insight: "Your next reading route follows what you chose, not how many facts you remembered." },
];

export const routes: Record<RouteKey, { title: string; description: string; href: string }> = {
  heritage: { title: "Trace the FESTAC legacy", description: "Look at the history, sources and questions carried into the present.", href: "/festac-50/" },
  creative: { title: "Explore creative expression", description: "Consider who makes cultural work, who owns it and how it travels.", href: "/performing-arts/" },
  learning: { title: "Follow skills and learning", description: "Explore practical knowledge and community-led pathways.", href: "/development/" },
  diaspora: { title: "Connect across the diaspora", description: "Think about relationships and reciprocity across places.", href: "/diaspora/" },
  participation: { title: "Find a way to take part", description: "Bring a question, a skill or a concrete idea to the conversation.", href: "/get-involved/" },
};

export const voices = [
  { excerpt: "Learn from life, learn from our people, learn from books, learn from the experience of others. Never stop learning.", name: "Amílcar Cabral", work: "Extracts from a 1965 PAIGC directive, published in English in Revolution in Guinea", context: "Cabral wrote for organisers in Guinea-Bissau's liberation struggle. Read this as advice grounded in that specific struggle, not as a universal slogan.", source: "https://www.marxists.org/subject/africa/cabral/1965/tnlcnev.htm" },
  { excerpt: "I have always believed that solutions to most of our problems must come from us.", name: "Wangari Maathai", work: "Nobel Peace Prize lecture, Oslo, 2004", context: "Maathai was speaking about Kenyan women's environmental work, democratic space and the role of communities in shaping practical solutions.", source: maathai.href },
  { excerpt: "This, then, is the end of his striving: to be a co-worker in the kingdom of culture", name: "W. E. B. Du Bois", work: "The Souls of Black Folk, chapter I, 1903", context: "Du Bois wrote about the lives and aspirations of Black Americans after emancipation. The passage continues beyond this excerpt; the original gives its full argument.", source: dubois.href },
] as const;
