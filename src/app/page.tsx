import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import CentresExplorer from "./components/CentresExplorer";
import EnquiryForm from "./components/EnquiryForm";
import FounderLegacy from "./components/FounderLegacy";
import { BOARD, INSTITUTION } from "@/lib/institution";

export default function Home() {
  return (
    <main className="bg-cei-light text-cei-darkText">
      <section className="relative overflow-hidden border-b border-white/10 bg-cei-navy py-24 text-white lg:py-32">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-block rounded-full border border-cei-teal/30 bg-cei-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#00A88F]">
              {INSTITUTION.eyebrow}
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {INSTITUTION.headline}
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-slate-300 sm:text-xl">
              {INSTITUTION.summary}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/centres"
                className="inline-flex items-center gap-2 rounded-lg bg-[#00A88F] px-6 py-3.5 font-bold text-white transition hover:bg-[#008f7a]"
              >
                Explore Our Centres
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/partner"
                className="rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Partner With CEI
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-white/20 px-6 py-3.5 font-semibold text-slate-200 transition hover:bg-white/5"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-cei-terracotta">
              About CEI
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-cei-navy sm:text-4xl">
              Knowledge in Service of Caribbean Progress
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-slate-600">
              {INSTITUTION.aboutLead}
            </p>
            <p className="mb-6 leading-relaxed text-slate-600">{INSTITUTION.aboutBody}</p>
            <blockquote className="mb-6 border-l-4 border-cei-teal bg-slate-50 p-4 text-slate-700">
              {INSTITUTION.centresStatement}
            </blockquote>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-semibold text-cei-navy hover:text-cei-teal"
            >
              Vision, mission and values
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <aside className="rounded-2xl bg-cei-navy p-8 text-white shadow-xl lg:col-span-5">
            <h3 className="mb-6 border-b border-white/10 pb-3 font-serif text-xl font-bold text-[#00A88F]">
              Institutional Foundation
            </h3>
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Vision</p>
              <p className="mt-1 font-medium text-slate-200">{INSTITUTION.vision}</p>
            </div>
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Mission</p>
              <p className="mt-1 text-sm text-slate-200">{INSTITUTION.mission}</p>
            </div>
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Business philosophy
              </p>
              <p className="mt-1 text-lg font-semibold text-[#00A88F]">
                {INSTITUTION.philosophy}
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                Core values
              </p>
              <ul className="flex flex-wrap gap-2">
                {INSTITUTION.values.map((value) => (
                  <li
                    key={value}
                    className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200"
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-cei-terracotta">
              Specialised Expertise
            </p>
            <h2 className="mb-4 font-serif text-3xl font-bold text-cei-navy sm:text-4xl">
              Our Five Centres
            </h2>
            <p className="text-slate-600">
              CEI delivers its work through five specialised Centres. Each Centre
              brings together knowledge, professional expertise, partnerships and
              practical solutions to address important institutional and societal
              needs.
            </p>
          </div>
          <CentresExplorer />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-cei-terracotta">
              Governance &amp; Vision
            </p>
            <h2 className="font-serif text-3xl font-bold text-cei-navy sm:text-4xl">
              Leadership, Service and Legacy
            </h2>
          </div>
          <FounderLegacy headingLevel="h3" />
          <div className="mb-8 mt-16 flex items-end justify-between gap-4 border-b border-slate-200 pb-3">
            <h3 className="font-serif text-2xl font-bold text-cei-navy">Board of Directors</h3>
            <Link href="/leadership" className="text-sm font-semibold text-cei-teal hover:underline">
              View leadership
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {BOARD.map((leader) => (
              <article key={leader.name} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h4 className="text-xl font-bold text-cei-navy">{leader.name}</h4>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-cei-terracotta">
                  {leader.role}
                </p>
                <p className="text-sm leading-relaxed text-slate-600">{leader.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cei-navy py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#00A88F]">
              Collaboration
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl">
              Work With the Caribbean Emergence Institute
            </h2>
            <p className="mb-8 leading-relaxed text-slate-300">{INSTITUTION.partnershipIntro}</p>
            <h3 className="mb-4 text-lg font-semibold text-[#00A88F]">Partnership pathways</h3>
            <ul className="space-y-3">
              {INSTITUTION.partnershipPathways.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 size={18} className="shrink-0 text-[#00A88F]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/partner"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-[#00A88F] hover:underline"
            >
              Partnership pathways
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </main>
  );
}
