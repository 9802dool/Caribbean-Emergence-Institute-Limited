export type Course = {
  title: string;
  desc: string;
  modules: string[];
};

export const courses: Course[] = [
  {
    title: "Nonprofit Leadership",
    desc: "Build governance and strategic capacity for Caribbean NGOs and community organisations.",
    modules: [
      "Leadership foundations",
      "Board effectiveness",
      "Stakeholder engagement",
    ],
  },
  {
    title: "Social Impact Strategy",
    desc: "Design programmes that measure outcomes and scale what works across the region.",
    modules: [
      "Theory of change",
      "Impact measurement",
      "Programme design",
    ],
  },
  {
    title: "Social Business Models",
    desc: "Explore hybrid models that blend mission with sustainable revenue.",
    modules: [
      "Enterprise models",
      "Revenue planning",
      "Partnership structures",
    ],
  },
  {
    title: "Compliance & Governance",
    desc: "Strengthen accountability, reporting, and regulatory readiness.",
    modules: [
      "Policy frameworks",
      "Financial controls",
      "Donor compliance",
    ],
  },
  {
    title: "Regional Network Weaving",
    desc: "Connect practitioners and institutions across CARICOM for shared learning.",
    modules: [
      "Collaboration design",
      "Knowledge exchange",
      "Regional convening",
    ],
  },
  {
    title: "Conscious Capital",
    desc: "Align funding, investment, and philanthropy with community-centred values.",
    modules: [
      "Funding landscapes",
      "Ethical finance",
      "Partnership due diligence",
    ],
  },
];
