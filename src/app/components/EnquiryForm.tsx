"use client";

import { FormEvent, useMemo, useState } from "react";

import {
  CENTRES,
  GENERAL_ENQUIRY,
  buildEnquiryMailto,
  departmentLabel,
  getCentre,
} from "@/lib/institution";

const inputClass =
  "w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-cei-navy outline-none transition focus:border-cei-gold focus:ring-2 focus:ring-cei-gold";

export default function EnquiryForm({
  defaultCentre = GENERAL_ENQUIRY,
  heading = "Contact & Enquiries",
  intro = "Select a Centre and send your query or consultation request to the right department.",
  lockedCentre = false,
}: {
  defaultCentre?: string;
  heading?: string;
  intro?: string;
  lockedCentre?: boolean;
}) {
  const initialCentre = getCentre(defaultCentre) ? defaultCentre : GENERAL_ENQUIRY;
  const [centreSlug, setCentreSlug] = useState(initialCentre);
  const [status, setStatus] = useState("");

  const department = useMemo(
    () => departmentLabel(centreSlug === GENERAL_ENQUIRY ? undefined : centreSlug),
    [centreSlug],
  );

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    window.location.href = buildEnquiryMailto({
      name,
      email,
      phone,
      centreSlug,
      message,
    });

    setStatus(
      `Your enquiry is ready in your email application and is addressed to ${department}.`,
    );
  };

  return (
    <div className="rounded-2xl bg-white p-8 text-cei-navy shadow-2xl">
      <h2 className="font-serif text-2xl font-bold">{heading}</h2>
      <p className="mb-6 mt-2 text-sm leading-relaxed text-slate-600">{intro}</p>

      <form className="space-y-4" onSubmit={submitEnquiry}>
        <div>
          <label htmlFor="enquiry-name" className="mb-1 block text-xs font-bold uppercase tracking-wide">
            Full name
          </label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Your name"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="enquiry-email" className="mb-1 block text-xs font-bold uppercase tracking-wide">
              Email address
            </label>
            <input
              id="enquiry-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputClass}
              placeholder="you@organisation.org"
            />
          </div>
          <div>
            <label htmlFor="enquiry-phone" className="mb-1 block text-xs font-bold uppercase tracking-wide">
              Phone
            </label>
            <input
              id="enquiry-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={inputClass}
              placeholder="+1 868 ..."
            />
          </div>
        </div>

        {lockedCentre ? (
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-wide">Department</p>
            <p className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium">
              {department}
            </p>
          </div>
        ) : (
          <div>
            <label htmlFor="enquiry-centre" className="mb-1 block text-xs font-bold uppercase tracking-wide">
              Relevant Centre
            </label>
            <select
              id="enquiry-centre"
              name="centre"
              value={centreSlug}
              onChange={(event) => {
                setCentreSlug(event.target.value);
                setStatus("");
              }}
              className={`${inputClass} bg-white`}
            >
              <option value={GENERAL_ENQUIRY}>General Institutional Enquiry</option>
              {CENTRES.map((centre) => (
                <option key={centre.slug} value={centre.slug}>
                  {centre.title}
                </option>
              ))}
            </select>
          </div>
        )}

        <p className="text-xs font-medium text-slate-500">
          Routed to: {department}
        </p>

        <div>
          <label htmlFor="enquiry-message" className="mb-1 block text-xs font-bold uppercase tracking-wide">
            Message / request details
          </label>
          <textarea
            id="enquiry-message"
            name="message"
            required
            rows={4}
            className={inputClass}
            placeholder="How can CEI assist your organisation?"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-cei-gold py-3 font-bold text-cei-navy shadow-md transition hover:bg-cei-gold/90"
        >
          Submit Enquiry
        </button>
        {status ? (
          <p role="status" className="text-sm text-cei-teal">
            {status}
          </p>
        ) : null}
      </form>
    </div>
  );
}
