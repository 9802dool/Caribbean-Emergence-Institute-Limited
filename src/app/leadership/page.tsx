import type { Metadata } from "next";

import FounderLegacy from "../components/FounderLegacy";
import InstitutionalHeader from "../components/InstitutionalHeader";
import { BOARD } from "@/lib/institution";

export const metadata: Metadata = {
  title: "Our Leadership",
  description:
    "The founder legacy of Dr. Sterling Belgrove and the Board of Directors of the Caribbean Emergence Institute.",
};

export default function LeadershipPage() {
  return (
    <main className="bg-cei-light">
      <InstitutionalHeader
        eyebrow="Governance & Vision"
        title="Leadership, Service and Legacy"
        description="CEI is shaped by the founder’s vision of knowledge in service of Caribbean progress, and by a Board that carries that work forward."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <FounderLegacy />
        <h2 className="mb-8 mt-16 border-b border-slate-200 pb-3 font-serif text-3xl font-bold text-cei-navy">
          Board of Directors
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {BOARD.map((leader) => (
            <article key={leader.name} className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-bold text-cei-navy">{leader.name}</h3>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-cei-terracotta">
                {leader.role}
              </p>
              <p className="text-sm leading-relaxed text-slate-600">{leader.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
