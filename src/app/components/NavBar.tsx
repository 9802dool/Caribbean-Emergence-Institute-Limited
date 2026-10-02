"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import { CENTRES } from "@/lib/institution";

const links = [
  { label: "Home", href: "/" },
  { label: "About CEI", href: "/about" },
  { label: "Our Leadership", href: "/leadership" },
  { label: "Partner With Us", href: "/partner" },
  { label: "Contact", href: "/contact" },
] as const;

export default function NavBar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [centresOpen, setCentresOpen] = useState(false);
  const [mobileCentresOpen, setMobileCentresOpen] = useState(false);

  useEffect(() => {
    if (!centresOpen) return;

    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCentresOpen(false);
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [centresOpen]);

  const closeMenus = () => {
    setIsOpen(false);
    setCentresOpen(false);
    setMobileCentresOpen(false);
  };

  const followLink = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    closeMenus();
    router.push(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-cei-gold/20 bg-cei-navy text-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3" onClick={followLink("/")}>
            <Image
              src="/cei-logo.png"
              alt=""
              width={1223}
              height={817}
              priority
              className="h-12 w-auto shrink-0 object-contain sm:h-14"
            />
            <div className="min-w-0">
              <span className="block truncate font-serif text-sm font-bold leading-tight tracking-wide sm:text-base">
                Caribbean Emergence Institute
              </span>
              <span className="block text-[10px] uppercase tracking-[0.16em] text-cei-gold sm:text-xs">
                Service for the Good of All
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 text-sm font-medium xl:flex" aria-label="Primary">
            <Link href="/" className="transition-colors hover:text-cei-gold">
              Home
            </Link>
            <Link href="/about" className="transition-colors hover:text-cei-gold">
              About CEI
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setCentresOpen(true)}
              onMouseLeave={() => setCentresOpen(false)}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1 transition-colors hover:text-cei-gold"
                aria-expanded={centresOpen}
                aria-controls="centres-menu"
                onClick={() => setCentresOpen((open) => !open)}
              >
                Our Centres
                <ChevronDown size={16} aria-hidden="true" />
              </button>
              {centresOpen ? (
                <div
                  id="centres-menu"
                  className="absolute left-0 top-full z-50 w-80 pt-3"
                >
                  <div className="rounded-xl border border-white/10 bg-cei-navy p-2 shadow-2xl">
                    <Link
                      href="/centres"
                      onClick={followLink("/centres")}
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-cei-gold hover:bg-white/5"
                    >
                      All Centres
                    </Link>
                    {CENTRES.map((centre) => (
                      <Link
                        key={centre.slug}
                        href={`/centres/${centre.slug}`}
                        onClick={followLink(`/centres/${centre.slug}`)}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-100 hover:bg-white/5 hover:text-cei-gold"
                      >
                        {centre.shortTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {links.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-cei-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:block">
            <Link
              href="/contact"
              className="rounded-md bg-cei-gold px-5 py-2.5 text-sm font-semibold text-cei-navy shadow-sm transition hover:bg-cei-gold/90"
            >
              Book Consultation
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-md p-2 text-slate-200 hover:bg-white/10 hover:text-white xl:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav
          id="mobile-navigation"
          className="space-y-1 border-t border-white/10 bg-cei-navy px-4 pb-6 pt-3 text-sm xl:hidden"
          aria-label="Mobile"
        >
          <Link href="/" onClick={followLink("/")} className="block py-2 hover:text-cei-gold">
            Home
          </Link>
          <Link href="/about" onClick={followLink("/about")} className="block py-2 hover:text-cei-gold">
            About CEI
          </Link>
          <button
            type="button"
            className="flex w-full items-center justify-between py-2 text-left hover:text-cei-gold"
            aria-expanded={mobileCentresOpen}
            onClick={() => setMobileCentresOpen((open) => !open)}
          >
            Our Centres
            <ChevronDown size={16} aria-hidden="true" />
          </button>
          {mobileCentresOpen ? (
            <div className="space-y-1 border-l border-cei-gold/40 pl-3">
              <Link href="/centres" onClick={followLink("/centres")} className="block py-1.5 text-cei-gold">
                All Centres
              </Link>
              {CENTRES.map((centre) => (
                <Link
                  key={centre.slug}
                  href={`/centres/${centre.slug}`}
                  onClick={followLink(`/centres/${centre.slug}`)}
                  className="block py-1.5 text-slate-200 hover:text-cei-gold"
                >
                  {centre.shortTitle}
                </Link>
              ))}
            </div>
          ) : null}
          {links.slice(2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={followLink(item.href)}
              className="block py-2 hover:text-cei-gold"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={followLink("/contact")}
            className="mt-3 block rounded-md bg-cei-gold py-3 text-center font-semibold text-cei-navy"
          >
            Book Consultation
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
