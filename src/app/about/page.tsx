import type { Metadata } from "next";

import InstitutionalHeader from "../components/InstitutionalHeader";
import { INSTITUTION } from "@/lib/institution";

export const metadata: Metadata = {
  title: "About CEI",
  description:
    "Vision, mission, philosophy and values of the Caribbean Emergence Institute.",
};

const foundations = [
  { label: "Vision", text: INSTITUTION.vision },
  { label: "Mission", text: INSTITUTION.mission },
  { label: "Business philosophy", text: INSTITUTION.philosophy },
];

export default function AboutPage() {
  return (
    <main className="bg-cei-light">
      <InstitutionalHeader
        eyebrow="About CEI"
        title="Knowledge in Service of Caribbean Progress"
        description={INSTITUTION.aboutLead}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-slate-700">{INSTITUTION.aboutBody}</p>
            <blockquote className="mt-8 border-l-4 border-cei-gold bg-white p-6 text-slate-700 shadow-sm">
              {INSTITUTION.centresStatement}
            </blockquote>
          </div>
          <div className="space-y-4 lg:col-span-5">
            {foundations.map((item) => (
              <article key={item.label} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-cei-terracotta">
                  {item.label}
                </h2>
                <p className="mt-2 text-lg font-medium text-cei-navy">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="font-serif text-3xl font-bold text-cei-navy">Core values</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INSTITUTION.values.map((value) => (
              <li
                key={value}
                className="rounded-xl border border-slate-200 bg-white px-5 py-6 font-semibold text-cei-navy"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
