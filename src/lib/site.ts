export const site = {
  name: "Caribbean Emergence Institute Limited",
  shortName: "CEI",
  tagline: "Transformative Learning for Sustainable Futures",
  motto: "GOD is the Governor Of Development",
  email: "info@cei.org",
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
