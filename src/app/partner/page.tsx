import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import EnquiryForm from "../components/EnquiryForm";
import InstitutionalHeader from "../components/InstitutionalHeader";
import { INSTITUTION } from "@/lib/institution";
import { SITE_CONFIG } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Collaborate, sponsor or commission advisory work with the Caribbean Emergence Institute.",
};

export default function PartnerPage() {
  return (
    <main className="bg-cei-light">
      <InstitutionalHeader
        eyebrow="Collaboration"
        title="Work With the Caribbean Emergence Institute"
        description={INSTITUTION.partnershipIntro}
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-serif text-2xl font-bold text-cei-navy">Partnership pathways</h2>
          <ul className="mt-6 space-y-3">
            {INSTITUTION.partnershipPathways.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cei-teal" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h2 className="mt-10 font-serif text-2xl font-bold text-cei-navy">Strategic partners</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            {SITE_CONFIG.partners.map((partner) => (
              <li key={partner}>{partner}</li>
            ))}
          </ul>
        </div>
        <EnquiryForm
          heading="Start a partnership conversation"
          intro="Tell us which Centre should receive your collaboration, sponsorship or advisory request."
        />
      </section>
    </main>
  );
}
