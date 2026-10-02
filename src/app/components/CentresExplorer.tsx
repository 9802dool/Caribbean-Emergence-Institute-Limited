"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import CentreIcon from "./CentreIcon";
import { CENTRES } from "@/lib/institution";

export default function CentresExplorer() {
  const [activeSlug, setActiveSlug] = useState(CENTRES[0].slug);
  const active = CENTRES.find((centre) => centre.slug === activeSlug) ?? CENTRES[0];

  return (
    <div>
      <div
        className="mb-8 flex gap-2 overflow-x-auto border-b border-slate-200 pb-2"
        role="tablist"
        aria-label="CEI Centres"
      >
        {CENTRES.map((centre) => {
          const selected = centre.slug === active.slug;
          return (
            <button
              key={centre.slug}
              type="button"
              role="tab"
              id={`centre-tab-${centre.slug}`}
              aria-selected={selected}
              aria-controls={`centre-panel-${centre.slug}`}
              onClick={() => setActiveSlug(centre.slug)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-t-lg border-b-2 px-4 py-3 text-sm font-medium transition sm:px-5 ${
                selected
                  ? "bg-white text-cei-navy shadow-sm"
                  : "border-transparent text-slate-600 hover:bg-slate-200/60 hover:text-cei-navy"
              }`}
              style={selected ? { borderBottomColor: centre.accent.primary } : undefined}
            >
              <CentreIcon icon={centre.icon} size={18} />
              {centre.shortTitle}
            </button>
          );
        })}
      </div>

      <article
        role="tabpanel"
        id={`centre-panel-${active.slug}`}
        aria-labelledby={`centre-tab-${active.slug}`}
        className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg lg:p-12"
        style={{ borderTopColor: active.accent.primary, borderTopWidth: 4 }}
      >
        <div className="mb-8 flex flex-col justify-between gap-8 lg:flex-row">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <div
                className="rounded-xl p-3 text-white"
                style={{ backgroundColor: active.accent.primary }}
              >
                <CentreIcon icon={active.icon} size={28} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-cei-navy">{active.title}</h3>
            </div>
            <p className="mb-3 text-lg font-medium text-slate-800">{active.tagline}</p>
            <p className="leading-relaxed text-slate-600">{active.description}</p>
          </div>
          <div className="lg:self-start">
            <Link
              href={`/centres/${active.slug}`}
              className="inline-flex items-center gap-2 rounded-lg bg-cei-navy px-6 py-3 font-semibold text-white transition hover:bg-cei-navy/90"
            >
              {active.cta}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500">
            Key service areas
          </h4>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {active.services.map((service) => (
              <li
                key={service}
                className="flex items-start gap-2 rounded-lg border border-slate-100 bg-slate-50 p-3.5"
              >
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: active.accent.primary }}
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-slate-700">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
