"use client";

import { FormEvent, useEffect, useState } from "react";
import { Calendar, Clock, X } from "lucide-react";

import { SITE_CONFIG } from "@/lib/site";

type DiagnosticModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DiagnosticModal({
  isOpen,
  onClose,
}: DiagnosticModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    entityType: "Unregistered Business",
    urgency: "Immediate (Filing deadline or penalty risk)",
    description: "",
  });

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const requestBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `CEI Diagnostic Booking Request - ${formData.name}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Entity Type: ${formData.entityType}`,
        `Urgency: ${formData.urgency}`,
        "",
        "Details:",
        formData.description,
      ].join("\n"),
    );

    window.location.href = `mailto:${SITE_CONFIG.contactEmail}?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-cei-navy/75 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="diagnostic-title"
        className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-cei-teal">
              Start with clarity
            </p>
            <h2
              id="diagnostic-title"
              className="mt-1 font-serif text-2xl font-bold text-cei-navy"
            >
              Book a Diagnostic Session
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close diagnostic booking"
            className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-cei-navy"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-4 grid gap-3 rounded-lg bg-cei-light p-4 text-sm text-slate-700 sm:grid-cols-2">
          <p className="flex items-center gap-2">
            <Calendar size={17} className="text-cei-teal" aria-hidden="true" />
            {SITE_CONFIG.diagnosticAvailability.days}
          </p>
          <p className="flex items-center gap-2">
            <Clock size={17} className="text-cei-teal" aria-hidden="true" />
            {SITE_CONFIG.diagnosticAvailability.timeWindow}
          </p>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Sessions are {SITE_CONFIG.diagnosticAvailability.durationMinutes} minutes
          with {SITE_CONFIG.diagnosticAvailability.bufferMinutes}-minute buffers.
          Your requested time is confirmed by email.
        </p>

        <form onSubmit={requestBooking} className="mt-6 space-y-4 text-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-cei-navy">
              Full Name
              <input
                required
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    name: event.target.value,
                  }))
                }
                className="mt-1.5 w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2.5 text-cei-darkText outline-none transition focus:border-cei-teal focus:bg-white focus:ring-2 focus:ring-cei-teal/20"
              />
            </label>
            <label className="text-sm font-medium text-cei-navy">
              Email Address
              <input
                required
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    email: event.target.value,
                  }))
                }
                className="mt-1.5 w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2.5 text-cei-darkText outline-none transition focus:border-cei-teal focus:bg-white focus:ring-2 focus:ring-cei-teal/20"
              />
            </label>
          </div>
          <label className="block text-sm font-medium text-cei-navy">
            Phone Number
            <input
              required
              type="tel"
              autoComplete="tel"
              value={formData.phone}
              onChange={(event) =>
                setFormData((current) => ({
                  ...current,
                  phone: event.target.value,
                }))
              }
              className="mt-1.5 w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2.5 text-cei-darkText outline-none transition focus:border-cei-teal focus:bg-white focus:ring-2 focus:ring-cei-teal/20"
            />
          </label>
          <label className="block text-sm font-medium text-cei-navy">
            Entity Type
            <select
              value={formData.entityType}
              onChange={(event) =>
                setFormData((current) => ({
                  ...current,
                  entityType: event.target.value,
                }))
              }
              className="mt-1.5 w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2.5 text-cei-darkText outline-none transition focus:border-cei-teal focus:ring-2 focus:ring-cei-teal/20"
            >
              <option>Unregistered Business</option>
              <option>Existing LLC / Company</option>
              <option>Unregistered NPO</option>
              <option>Registered NPO</option>
              <option>Director / Shareholder</option>
              <option>Corporate Sponsor</option>
            </select>
          </label>
          <label className="block text-sm font-medium text-cei-navy">
            Urgency Level
            <select
              value={formData.urgency}
              onChange={(event) =>
                setFormData((current) => ({
                  ...current,
                  urgency: event.target.value,
                }))
              }
              className="mt-1.5 w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2.5 text-cei-darkText outline-none transition focus:border-cei-teal focus:ring-2 focus:ring-cei-teal/20"
            >
              <option>Immediate (Filing deadline or penalty risk)</option>
              <option>Within 1-2 weeks</option>
              <option>General enquiry / Planning</option>
            </select>
          </label>
          <label className="block text-sm font-medium text-cei-navy">
            Brief Description of Need
            <textarea
              required
              rows={3}
              value={formData.description}
              onChange={(event) =>
                setFormData((current) => ({
                  ...current,
                  description: event.target.value,
                }))
              }
              className="mt-1.5 w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2.5 text-cei-darkText outline-none transition focus:border-cei-teal focus:bg-white focus:ring-2 focus:ring-cei-teal/20"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-md bg-cei-terracotta px-6 py-3 font-bold text-white transition hover:bg-cei-terracotta/90"
          >
            Submit &amp; Request Diagnostic Slot
          </button>
        </form>
      </section>
    </div>
  );
}
