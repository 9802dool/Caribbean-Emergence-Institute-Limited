"use client";

import { Calendar } from "lucide-react";

import { useDiagnostic } from "./SiteChrome";

export default function BookDiagnosticButton({
  className = "inline-flex items-center justify-center gap-2 rounded-lg bg-[#00A88F] px-6 py-3 font-bold text-white transition hover:bg-[#008f7a]",
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
