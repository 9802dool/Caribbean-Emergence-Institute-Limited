"use client";

import { FormEvent, useEffect } from "react";
import { Calendar, Clock, Mail, X } from "lucide-react";

import { SITE_CONFIG } from "@/lib/site";

type DiagnosticModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DiagnosticModal({
  isOpen,
  onClose,
}: DiagnosticModalProps) {
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
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Thursday diagnostic booking request");
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        `Organisation: ${data.get("organisation") || "Not provided"}`,
        `Preferred Thursday: ${data.get("preferredDate") || "Flexible"}`,
        "",
        `Primary concern: ${data.get("concern")}`,
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
              Request a Thursday Diagnostic
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

        <form onSubmit={requestBooking} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-cei-navy">
              Name
              <input
                required
                name="name"
                autoComplete="name"
                className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2.5 text-cei-darkText outline-none transition focus:border-cei-teal focus:ring-2 focus:ring-cei-teal/20"
              />
            </label>
            <label className="text-sm font-medium text-cei-navy">
              Email
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2.5 text-cei-darkText outline-none transition focus:border-cei-teal focus:ring-2 focus:ring-cei-teal/20"
              />
            </label>
          </div>
          <label className="block text-sm font-medium text-cei-navy">
            Organisation
            <input
              name="organisation"
              autoComplete="organization"
              className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2.5 text-cei-darkText outline-none transition focus:border-cei-teal focus:ring-2 focus:ring-cei-teal/20"
            />
          </label>
          <label className="block text-sm font-medium text-cei-navy">
            Preferred Thursday
            <input
              type="date"
              name="preferredDate"
              className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2.5 text-cei-darkText outline-none transition focus:border-cei-teal focus:ring-2 focus:ring-cei-teal/20"
            />
          </label>
          <label className="block text-sm font-medium text-cei-navy">
            What would you like help with?
            <textarea
              required
              name="concern"
              rows={4}
              className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2.5 text-cei-darkText outline-none transition focus:border-cei-teal focus:ring-2 focus:ring-cei-teal/20"
            />
          </label>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-cei-terracotta px-6 py-3 font-semibold text-white transition hover:bg-cei-terracotta/90"
          >
            <Mail size={17} aria-hidden="true" />
            Send Booking Request
          </button>
        </form>
      </section>
    </div>
  );
}
