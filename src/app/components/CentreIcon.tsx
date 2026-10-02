import { Cpu, GraduationCap, ShieldCheck, Sparkles, Users } from "lucide-react";

import type { Centre } from "@/lib/institution";

const ICONS = {
  governance: ShieldCheck,
  learning: GraduationCap,
  ai: Cpu,
  regenerative: Sparkles,
  community: Users,
} as const;

export default function CentreIcon({
  icon,
  size = 22,
  className,
}: {
  icon: Centre["icon"];
  size?: number;
  className?: string;
}) {
  const Icon = ICONS[icon];
  return <Icon size={size} className={className} aria-hidden="true" />;
}
