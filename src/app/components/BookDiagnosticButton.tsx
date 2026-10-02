"use client";

import { Calendar } from "lucide-react";

import { useDiagnostic } from "./SiteChrome";

export default function BookDiagnosticButton({
  className = "inline-flex items-center justify-center gap-2 rounded-lg bg-cei-gold px-6 py-3 font-bold text-cei-navy transition hover:bg-cei-gold/90",
  label = "Book Thursday Diagnostic",
}: {
  className?: string;
  label?: string;
}) {
  const { openDiagnostic } = useDiagnostic();

  return (
    <button type="button" onClick={openDiagnostic} className={className}>
      <Calendar size={16} aria-hidden="true" />
      {label}
    </button>
  );
}
