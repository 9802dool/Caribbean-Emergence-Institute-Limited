export const SITE_CONFIG = {
  name: "Caribbean Emergence Institute",
  shortName: "CEI",
  contactEmail: "caribbeanemergencei@gmail.com",
  disclaimer:
    "Prices shown are professional fees. Government filing fees, penalties, printing, courier charges, external professional fees and complex legal or accounting work are separate unless expressly included in your written quotation.",
  diagnosticAvailability: {
    days: "Thursdays",
    timeWindow: "10:00 AM - 3:00 PM",
    durationMinutes: 30,
    bufferMinutes: 15,
  },
  weeklyClinics: [
    {
      title: "SME Compliance & Governance Clinic",
      day: "Wednesdays",
      time: "4:00 PM - 5:00 PM",
      category: "SME",
    },
    {
      title: "NPO Compliance & Governance Clinic",
      day: "Wednesdays",
      time: "6:00 PM - 7:00 PM",
      category: "NPO",
    },
  ],
  team: [
    {
      name: "Dr. Marcia Mc Clashie Belgrove",
      role: "Leadership & Governance Specialist",
    },
    {
      name: "Anisa Oliviel",
      role: "Compliance & Operations Specialist",
    },
    {
      name: "Lorraine Villaroel",
      role: "Institutional Support Specialist",
    },
  ],
  partners: ["The Rose Foundation", "Grassroots Chamber of Commerce"],
} as const;

export const BUSINESS_FOUNDATION_PACKAGES = [
  {
    stage: 1,
    title: "Incorporation & Registration",
    price: "TT$2,500",
    description:
      "From approved name to Certificate of Incorporation, including required formation documents, initial ownership information and compliance calendar.",
  },
  {
    stage: 2,
    title: "Corporate Governance Set-Up",
    price: "TT$2,500",
    description:
      "First and second Board meeting preparation, core records, Board schedule and a practical introduction to director responsibilities.",
  },
  {
    stage: 3,
    title: "Financial & Statutory Readiness",
    price: "TT$2,500",
    description:
      "Basic accounting system, bank-account application support and BIR/NIS registration support where required.",
  },
  {
    stage: "Bundle",
    title: "Complete Business Foundation",
    price: "TT$7,500",
    description: "All three stages plus a 30-day post-registration check-in.",
    featured: true,
  },
] as const;

export const COMPLIANCE_CARE_PLANS = [
  {
    title: "Governance Basics",
    monthlyPrice: "TT$250",
    annualPrice: "TT$2,750",
    tagline: "Stay organised, informed and compliant.",
  },
  {
    title: "Governance Boost",
    monthlyPrice: "TT$500",
    annualPrice: "TT$5,500",
    tagline:
      "Strengthen your systems and address gaps before they become risks.",
  },
  {
    title: "Governance Advantage",
    monthlyPrice: "Starting at TT$1,250",
    annualPrice: "Custom",
    tagline:
      "Proactive governance support for stronger leadership, oversight and decision-making.",
  },
] as const;

export const site = {
  name: SITE_CONFIG.name,
  shortName: SITE_CONFIG.shortName,
  tagline: "Transformative Learning for Sustainable Futures",
  motto: "GOD is the Governor Of Development",
  email: SITE_CONFIG.contactEmail,
  phoneDisplay: "(868) 000-0000",
  phoneTel: "+18680000000",
  address: "Port of Spain, Trinidad & Tobago",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Programs", href: "/programs" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "Fellowship", href: "/fellowship" },
  { label: "Contact", href: "/contact" },
];
