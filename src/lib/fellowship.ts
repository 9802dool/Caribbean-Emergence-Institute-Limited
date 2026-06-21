export type Fellowship = {
  title: string;
  desc: string;
  highlights: string[];
  image: string;
};

export const fellowships: Fellowship[] = [
  {
    title: "Emergence Fellows Programme",
    desc: "A year-long cohort for leaders building transformative organisations across the Caribbean.",
    highlights: [
      "Monthly learning intensives",
      "Executive coaching",
      "Regional peer network",
    ],
    image: "/images/course-leadership.svg",
  },
  {
    title: "Conscious Capital Circle",
    desc: "For practitioners aligning philanthropy, investment, and community-centred finance.",
    highlights: [
      "Ethical finance modules",
      "Donor partnership labs",
      "Due diligence frameworks",
    ],
    image: "/images/course-conscious-capital.svg",
  },
  {
    title: "Enlightened Thinkers Network",
    desc: "A regional community of scholars, practitioners, and policy voices shaping sustainable futures.",
    highlights: [
      "Quarterly salons",
      "Published briefs",
      "Cross-sector dialogue",
    ],
    image: "/images/course-network.svg",
  },
];
