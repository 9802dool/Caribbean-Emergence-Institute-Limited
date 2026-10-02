import type { Metadata } from "next";
import { Clock, Mail } from "lucide-react";

import BookDiagnosticButton from "../components/BookDiagnosticButton";
import EnquiryForm from "../components/EnquiryForm";
import InstitutionalHeader from "../components/InstitutionalHeader";
import { getCentre } from "@/lib/institution";
import { SITE_CONFIG } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send a Centre-specific enquiry or book a consultation with the Caribbean Emergence Institute.",
};

type ContactPageProps = {
  searchParams: Promise<{ centre?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { centre } = await searchParams;
  const selected = getCentre(centre)?.slug;

  return (
    <main className="bg-cei-light">
      <InstitutionalHeader
        eyebrow="Contact"
        title="Enquiries and Consultations"
        description="Choose the Centre that should receive your enquiry, or book a Thursday diagnostic consultation."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <EnquiryForm
          key={selected ?? "general"}
          defaultCentre={selected}
          intro="Your message is prepared for the selected Centre so it reaches the right department."
        />

        <div className="space-y-6">
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-3 flex items-center gap-2 text-cei-navy">
              <Mail size={18} aria-hidden="true" />
              <h2 className="font-serif text-xl font-bold">Email</h2>
            </div>
            <a
              href={`mailto:${SITE_CONFIG.contactEmail}`}
              className="font-medium text-cei-teal underline"
            >
              {SITE_CONFIG.contactEmail}
            </a>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Trinidad &amp; Tobago and the broader Caribbean region.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-3 flex items-center gap-2 text-cei-navy">
              <Clock size={18} aria-hidden="true" />
              <h2 className="font-serif text-xl font-bold">Consultations</h2>
            </div>
            <p className="text-sm text-slate-600">
              Diagnostic bookings: {SITE_CONFIG.diagnosticAvailability.days},{" "}
              {SITE_CONFIG.diagnosticAvailability.timeWindow}. Sessions are{" "}
              {SITE_CONFIG.diagnosticAvailability.durationMinutes} minutes with{" "}
              {SITE_CONFIG.diagnosticAvailability.bufferMinutes}-minute buffers.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {SITE_CONFIG.weeklyClinics.map((clinic) => (
                <li key={clinic.title}>
                  <span className="font-semibold">{clinic.title}:</span> {clinic.day},{" "}
                  {clinic.time}
                </li>
              ))}
            </ul>
            <BookDiagnosticButton className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-cei-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-cei-navy/90" />
          </article>
        </div>
      </section>
    </main>
  );
}
