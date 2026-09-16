"use client";

import Link from "next/link";
import { useState } from "react";
import { Calendar, Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Training", href: "/programs" },
  { label: "Institutional Solutions", href: "/knowledge" },
  { label: "Talent Bridge", href: "/fellowship" },
  { label: "About", href: "/insights" },
] as const;

export default function NavBar({
  onOpenDiagnostic,
}: {
  onOpenDiagnostic?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openDiagnostic = () => {
    setIsOpen(false);

    if (onOpenDiagnostic) {
      onOpenDiagnostic();
      return;
    }

    window.location.assign("/contact");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-cei-gold/20 bg-cei-navy text-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cei-gold bg-cei-teal font-bold text-cei-gold">
              CEI
            </div>
            <div>
              <span className="block font-serif text-lg font-bold leading-none tracking-wide">
                CARIBBEAN EMERGENCE
              </span>
              <span className="text-xs uppercase tracking-widest text-cei-gold">
                INSTITUTE
              </span>
            </div>
          </Link>

          <div className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-cei-gold"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={openDiagnostic}
              className="flex items-center gap-2 rounded-md bg-cei-terracotta px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-cei-terracotta/90"
            >
              <Calendar size={16} aria-hidden="true" />
              Book a Diagnostic
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="text-white focus:outline-none"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="space-y-3 border-t border-cei-gold/10 bg-cei-navy px-4 pb-6 pt-2 text-sm md:hidden"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-2"
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={openDiagnostic}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-cei-terracotta py-3 text-center font-medium text-white"
          >
            <Calendar size={16} aria-hidden="true" />
            Book a Diagnostic
          </button>
        </div>
      )}
    </nav>
  );
}
