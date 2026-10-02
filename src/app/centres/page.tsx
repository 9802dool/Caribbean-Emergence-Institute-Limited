import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import CentreIcon from "../components/CentreIcon";
import InstitutionalHeader from "../components/InstitutionalHeader";
import { CENTRES } from "@/lib/institution";

export const metadata: Metadata = {
  title: "Our Centres",
  description:
    "Five specialised Centres of the Caribbean Emergence Institute covering governance, learning, AI, regenerative intelligence and community transformation.",
};

export default function CentresPage() {
  return (
    <main className="bg-cei-light">
      <InstitutionalHeader
        eyebrow="Specialised Expertise"
        title="Our Five Centres"
        description="Each Centre brings together knowledge, professional expertise, partnerships and practical solutions for institutional and societal needs."
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
        {CENTRES.map((centre) => (
          <article
            key={centre.slug}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            style={{ borderTopColor: centre.accent.primary, borderTopWidth: 4 }}
          >
            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white"
              style={{ backgroundColor: centre.accent.primary }}
            >
              <CentreIcon icon={centre.icon} size={24} />
            </div>
            <h2 className="font-serif text-2xl font-bold text-cei-navy">{centre.title}</h2>
            <p className="mt-3 flex-1 leading-relaxed text-slate-600">{centre.tagline}</p>
            <Link
              href={`/centres/${centre.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cei-navy"
            >
              {centre.cta}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
