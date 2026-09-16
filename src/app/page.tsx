"use client";

import {
  ArrowRight,
  BookOpen,
  Building,
  CheckCircle2,
  ShieldCheck,
  Users,
} from "lucide-react";

import { useDiagnostic } from "./components/SiteChrome";
import {
  BUSINESS_FOUNDATION_PACKAGES,
  SITE_CONFIG,
} from "@/lib/site";

const pathways = [
  {
    title: "Unregistered Business",
    need: "Establish a company properly",
    cta: "Start My Business Foundation",
    icon: Building,
  },
  {
    title: "Existing Company",
    need: "Resolve annual, ownership or governance gaps",
    cta: "Complete a Compliance Check",
    icon: ShieldCheck,
  },
  {
    title: "Unregistered NPO",
    need: "Understand registration and governance requirements",
    cta: "Attend the NPO Clinic",
    icon: BookOpen,
  },
  {
    title: "Registered NPO",
    need: "File returns or reset compliance",
    cta: "Book an NPO Diagnostic",
    icon: ShieldCheck,
  },
  {
    title: "Director / Shareholder",
    need: "Understand responsibilities, ownership and protection",
    cta: "View Director Services",
    icon: Users,
  },
  {
    title: "Corporate / CSR Team",
    need: "Strengthen funded NPOs or social partners",
    cta: "Request Institutional Consultation",
    icon: Building,
  },
] as const;

export default function Home() {
  const { openDiagnostic } = useDiagnostic();

  return (
    <main className="flex min-h-screen flex-col bg-cei-light font-sans text-cei-darkText">
      <section className="relative overflow-hidden bg-cei-navy px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="mb-4 inline-block rounded-full border border-cei-teal bg-cei-teal/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cei-gold">
            Caribbean Governance, Compliance &amp; Growth
          </span>
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Build it properly. Govern it responsibly. Grow it sustainably.
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg font-light text-gray-300 sm:text-xl">
            CEI helps Caribbean businesses, NPOs, directors and institutions
            establish sound legal, governance, financial and operational
            foundations—from registration and statutory compliance to Board
            effectiveness, sustainability and talent development.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={openDiagnostic}
              className="rounded-md bg-cei-terracotta px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-cei-terracotta/90"
            >
              Book a Diagnostic
            </button>
            <a
              href="#pathways"
              className="rounded-md border border-white/30 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all hover:border-white"
            >
              Find the Right Service
            </a>
          </div>
        </div>
      </section>

      <section id="pathways" className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-cei-navy">
            Choose Your Pathway
          </h2>
          <p className="mt-2 text-gray-600">
            Select your background to see recommended solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pathways.map((pathway) => {
            const Icon = pathway.icon;
            return (
              <article
                key={pathway.title}
                className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div>
                  <Icon className="mb-3 h-8 w-8 text-cei-teal" aria-hidden="true" />
                  <h3 className="mb-1 text-lg font-bold text-cei-navy">
                    {pathway.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">{pathway.need}</p>
                </div>
                <button
                  type="button"
                  onClick={openDiagnostic}
                  className="flex items-center gap-1 text-left text-sm font-semibold text-cei-terracotta transition-all hover:gap-2"
                >
                  {pathway.cta}
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-wider text-cei-teal">
              Stage-by-Stage Support
            </span>
            <h2 className="mt-1 font-serif text-3xl font-bold text-cei-navy">
              From Registration to Readiness
            </h2>
            <p className="mt-2 font-medium text-gray-600">
              We do not simply register your company. We help establish the
              legal, governance and financial foundations needed to operate it
              properly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {BUSINESS_FOUNDATION_PACKAGES.map((pkg) => {
              const featured = "featured" in pkg && pkg.featured;
              return (
                <article
                  key={pkg.title}
                  className={`rounded-lg border bg-white p-6 ${
                    featured
                      ? "relative border-cei-gold shadow-md"
                      : "border-slate-200"
                  }`}
                >
                  {featured ? (
                    <span className="absolute -top-3 right-4 rounded bg-cei-gold px-2 py-0.5 text-xs font-bold uppercase text-cei-navy">
                      Best Value
                    </span>
                  ) : null}
                  <p className="mb-1 text-xs font-bold uppercase text-cei-teal">
                    {pkg.stage === "Bundle" ? "Complete Package" : `Stage ${pkg.stage}`}
                  </p>
                  <h3 className="mb-2 text-lg font-bold text-cei-navy">
                    {pkg.title}
                  </h3>
                  <p className="mb-3 text-2xl font-bold text-cei-terracotta">
                    {pkg.price}
                  </p>
                  <p className="text-sm text-gray-600">{pkg.description}</p>
                </article>
              );
            })}
          </div>

          <p className="mt-6 max-w-4xl text-xs italic text-gray-500">
            Note: {SITE_CONFIG.disclaimer}
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16">
        <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-cei-navy p-8 text-white shadow-xl md:p-12 lg:flex-row">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-cei-gold">
              Live &amp; Action-Oriented
            </span>
            <h2 className="mt-1 font-serif text-3xl font-bold">
              Weekly Governance &amp; Compliance Clinics
            </h2>
            <p className="mt-2 max-w-2xl text-gray-300">
              Don&apos;t wait weeks for answers. Join our recurring weekly
              sessions or request an individual Thursday diagnostic session.
            </p>
            <div className="mt-6 space-y-2">
              {SITE_CONFIG.weeklyClinics.map((clinic) => (
                <p
                  key={clinic.title}
                  className="flex items-start gap-2 text-sm text-cei-gold"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    <strong>{clinic.title}:</strong> {clinic.day}, {clinic.time}
                  </span>
                </p>
              ))}
            </div>
          </div>
          <aside className="w-full rounded-xl border border-white/20 bg-white/10 p-6 text-center lg:w-auto lg:min-w-72">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-cei-gold">
              Diagnostic Availability
            </p>
            <p className="mb-1 text-2xl font-bold">
              {SITE_CONFIG.diagnosticAvailability.days}
            </p>
            <p className="mb-4 text-sm text-gray-300">
              {SITE_CONFIG.diagnosticAvailability.timeWindow} (
              {SITE_CONFIG.diagnosticAvailability.durationMinutes} mins)
            </p>
            <button
              type="button"
              onClick={openDiagnostic}
              className="w-full rounded bg-cei-gold px-6 py-3 font-bold text-cei-navy transition-all hover:bg-cei-gold/90"
            >
              Book Thursday Diagnostic
            </button>
          </aside>
        </div>
      </section>
    </main>
  );
}
