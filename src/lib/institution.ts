import { SITE_CONFIG } from "@/lib/site";

export const INSTITUTION = {
  motto: "Service for the good of all.",
  eyebrow: "Multidisciplinary Knowledge Institution",
  headline:
    "Advancing Knowledge. Strengthening Institutions. Transforming Caribbean Society.",
  summary:
    "The Caribbean Emergence Institute provides strategic tools, professional learning, institutional support, and innovative solutions that empower individuals, organisations, and communities across the region.",
  aboutLead:
    "The Caribbean Emergence Institute Limited is dedicated to advancing the knowledge and professional competence of Caribbean society.",
  aboutBody:
    "Through innovative training approaches, institutional-strengthening services, applied research, emerging technologies, and socio-economic development models, CEI helps individuals, organisations, and communities create value, build resilience, and achieve sustainable growth.",
  centresStatement:
    "The Institute operates through five specialised Centres that bring together expertise in governance, learning, artificial intelligence, regenerative intelligence and community transformation.",
  vision:
    "A new society of enlightened thinkers and innovators living the ideal of service for the good of all.",
  mission:
    "To be a Caribbean knowledge centre providing strategic tools for education, learning, personal advancement, institutional strengthening, innovation and sustainable development.",
  philosophy: "Service for the good of all.",
  values: [
    "Innovation",
    "Excellence",
    "Empowerment",
    "Collaboration",
    "Integrity",
    "Optimisation",
    "Inclusivity",
  ],
  partnershipIntro:
    "CEI collaborates with governments, businesses, educational institutions, civil-society organisations, development agencies, and communities to design and deliver solutions that strengthen people and institutions.",
  partnershipPathways: [
    "Commission advisory services",
    "Develop a customised training programme",
    "Partner on research or policy dialogue",
    "Sponsor a community initiative",
    "Implement an AI-adoption programme",
    "Collaborate on a Caribbean development project",
  ],
} as const;

export type CentreAccent = {
  primary: string;
  secondary: string;
};

export type Centre = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  services: string[];
  cta: string;
  accent: CentreAccent;
  icon: "governance" | "learning" | "ai" | "regenerative" | "community";
};

export const CENTRES: Centre[] = [
  {
    slug: "governance",
    title: "Centre for Good Governance & Compliance",
    shortTitle: "Governance & Compliance",
    tagline:
      "Strengthening organisations through responsible leadership, sound governance and effective compliance.",
    description:
      "Supports companies, non-profit organisations, Boards and institutional leaders with governance advisory services, regulatory compliance, Board development, and institutional strengthening.",
    services: [
      "Governance and compliance advisory",
      "Directors' induction and Board development",
      "Company and NPO compliance",
      "Company secretarial support",
      "Governance health checks",
      "Records reconstruction and compliance resets",
      "Policies, manuals and governance frameworks",
      "Institutional-strengthening support",
    ],
    cta: "Explore Governance Services",
    accent: { primary: "#0f172a", secondary: "#1e293b" },
    icon: "governance",
  },
  {
    slug: "learning",
    title: "Centre for Learning & Capacity Development",
    shortTitle: "Learning & Capacity",
    tagline:
      "Building the knowledge, competencies and leadership capabilities required for personal and organisational advancement.",
    description:
      "Designs and delivers professional training, executive education, workshops, certification pathways and capacity-building programmes.",
    services: [
      "Executive and professional learning",
      "Leadership development",
      "Governance education",
      "Personal and professional development",
      "Organisational capacity-building",
      "Customised corporate and community training",
      "Facilitation and learning-programme design",
    ],
    cta: "Explore Learning Programmes",
    accent: { primary: "#0d9488", secondary: "#14b8a6" },
    icon: "learning",
  },
  {
    slug: "ai",
    title: "Centre for AI Adoption & Digital Transformation",
    shortTitle: "AI & Digital Transformation",
    tagline:
      "Helping Caribbean organisations move from curiosity about artificial intelligence to responsible, practical adoption.",
    description:
      "Provides AI-readiness support, workforce development, AI engineering education, and digital process transformation.",
    services: [
      "AI-readiness assessments",
      "AI adoption strategies",
      "Workforce development",
      "AI engineering and builder programmes",
      "Digital process transformation",
      "Responsible AI and governance",
      "AI-enabled product development",
      "Organisational implementation support",
    ],
    cta: "Begin Your AI Journey",
    accent: { primary: "#0891b2", secondary: "#06b6d4" },
    icon: "ai",
  },
  {
    slug: "regenerative-intelligence",
    title: "Sterling Belgrove Centre for Regenerative Intelligence",
    shortTitle: "Regenerative Intelligence",
    tagline:
      "Advancing new ways of thinking that reconnect human, ecological, cultural and technological intelligence.",
    description:
      "Named in honour of CEI's founder, serving as a platform for research, thought leadership, dialogue and applied initiatives focused on regenerative development.",
    services: [
      "Applied research",
      "Regenerative development",
      "Caribbean futures and systems thinking",
      "Human and ecological intelligence",
      "Culture, technology and society",
      "Publications and policy dialogue",
      "Conferences and thought-leadership programmes",
    ],
    cta: "Discover the Centre",
    accent: { primary: "#15803d", secondary: "#eab308" },
    icon: "regenerative",
  },
  {
    slug: "community",
    title: "Centre for Community Transformation",
    shortTitle: "Community Transformation",
    tagline:
      "Working with communities to develop local capabilities, create opportunity and produce sustainable social impact.",
    description:
      "Supports community innovation, youth development, entrepreneurship, and place-based transformation combining local knowledge with technology and partnerships.",
    services: [
      "Community-development programmes",
      "Youth education and development",
      "Enterprise and entrepreneurship support",
      "Place-based innovation",
      "Community leadership and social-impact design",
      "Stakeholder engagement",
      "Monitoring, evaluation and learning",
    ],
    cta: "Explore Community Initiatives",
    accent: { primary: "#ea580c", secondary: "#f97316" },
    icon: "community",
  },
];

export const GENERAL_ENQUIRY = "general";

export function getCentre(slug: string | undefined) {
  if (!slug) return undefined;
  return CENTRES.find((centre) => centre.slug === slug);
}

export function departmentLabel(slug: string | undefined) {
  return getCentre(slug)?.title ?? "General Institutional Enquiry";
}

export type Leader = {
  name: string;
  role: string;
  summary: string;
};

export const FOUNDER = {
  name: "The late Dr. Sterling Belgrove",
  role: "Founder, Caribbean Emergence Institute",
  paragraphs: [
    "The late Dr. Sterling Belgrove was a strategist, educator, consultant and community-development leader whose work connected corporate expertise with a lifelong commitment to social and economic justice.",
    "He served for more than twelve years as an adviser and facilitator within the Office of the Prime Minister of Trinidad and Tobago and contributed his expertise to organisations involving the World Bank, Inter-American Development Bank, British Gas, Shell, and bpTT.",
    "Dr. Belgrove chaired the National Steering Committee of the UNDP GEF Small Grants Programme and lectured over 5,000 MBA students at Anglia Ruskin University. His vision of knowledge, service, and sustainable community development continues to shape CEI.",
  ],
};

export const BOARD: Leader[] = [
  {
    name: "Dr. Marcia Mc Clashie Belgrove",
    role: "Director & Community Leader",
    summary:
      "Business and community-development leader certified in ISO 20700 Management Consultancy. Former adviser within the Office of the Prime Minister of Trinidad and Tobago with extensive leadership in social enterprise.",
  },
  {
    name: "Anisa Oliviel",
    role: "Governance & Institutional Lead",
    summary:
      "Over 20 years of experience in governance, compliance, strategic planning, and organisational capacity-building. ISO 20700 certified with First-Class Honours in Politics from the University of Bradford.",
  },
  {
    name: "Lorraine Villaroel",
    role: "AI & Transformation Lead",
    summary:
      "AI-enabled product builder with 25+ years in community non-profits, 19 years in banking, and creator of RoomReservePro. Leads CEI's AI education and regional digital capacity-building.",
  },
];

export type EnquiryInput = {
  name: string;
  email: string;
  phone: string;
  centreSlug: string;
  message: string;
};

export function buildEnquiryMailto(input: EnquiryInput) {
  const department = departmentLabel(
    input.centreSlug === GENERAL_ENQUIRY ? undefined : input.centreSlug,
  );
  const subject = `CEI Enquiry | ${department}`;
  const body = [
    `Department: ${department}`,
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone || "Not provided"}`,
    "",
    "Message:",
    input.message,
  ].join("\n");

  return `mailto:${SITE_CONFIG.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
