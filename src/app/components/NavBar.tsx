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
    <header className="sticky top-0 z-50 bg-white py-4 shadow-sm transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" onClick={followLink("/")}>
          <Image
            src="/cei-logo-mark.png"
            alt="Caribbean Emergence Institute - Enabling the Vision"
            width={1231}
            height={825}
            priority
            className="h-24 w-auto object-contain sm:h-32"
          />
        </Link>

        <nav
          className="hidden items-center space-x-6 font-medium text-slate-800 xl:flex"
          aria-label="Primary"
        >
          <Link href="/" className="transition-colors hover:text-[#00A88F]">
            Home
          </Link>
          <Link href="/about" className="transition-colors hover:text-[#00A88F]">
            About CEI
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setCentresOpen(true)}
            onMouseLeave={() => setCentresOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center transition-colors hover:text-[#00A88F]"
              aria-expanded={centresOpen}
              aria-controls="centres-menu"
              onClick={() => setCentresOpen((open) => !open)}
            >
              Our Centres
              <ChevronDown size={16} className="ml-1" aria-hidden="true" />
            </button>
            {centresOpen ? (
              <div id="centres-menu" className="absolute left-0 top-full z-50 w-80 pt-3">
                <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                  <Link
                    href="/centres"
                    onClick={followLink("/centres")}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#00A88F] hover:bg-slate-50"
                  >
                    All Centres
                  </Link>
                  {CENTRES.map((centre) => (
                    <Link
                      key={centre.slug}
                      href={`/centres/${centre.slug}`}
                      onClick={followLink(`/centres/${centre.slug}`)}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-800 hover:bg-slate-50 hover:text-[#00A88F]"
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
              className="transition-colors hover:text-[#00A88F]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Link
            href="/contact"
            className="rounded-md bg-[#00A88F] px-5 py-2.5 font-semibold text-white shadow-sm transition-colors hover:bg-[#008f7a]"
          >
            Book a Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="rounded-md p-2 text-slate-800 hover:bg-slate-100 xl:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen ? (
        <nav
          id="mobile-navigation"
          className="space-y-1 border-t border-slate-200 bg-white px-4 pb-6 pt-3 text-sm font-medium text-slate-800 xl:hidden"
          aria-label="Mobile"
        >
          <Link href="/" onClick={followLink("/")} className="block py-2 hover:text-[#00A88F]">
            Home
          </Link>
          <Link href="/about" onClick={followLink("/about")} className="block py-2 hover:text-[#00A88F]">
            About CEI
          </Link>
          <button
            type="button"
            className="flex w-full items-center justify-between py-2 text-left hover:text-[#00A88F]"
            aria-expanded={mobileCentresOpen}
            onClick={() => setMobileCentresOpen((open) => !open)}
          >
            Our Centres
            <ChevronDown size={16} aria-hidden="true" />
          </button>
          {mobileCentresOpen ? (
            <div className="space-y-1 border-l border-[#00A88F]/40 pl-3">
              <Link
                href="/centres"
                onClick={followLink("/centres")}
                className="block py-1.5 font-semibold text-[#00A88F]"
              >
                All Centres
              </Link>
              {CENTRES.map((centre) => (
                <Link
                  key={centre.slug}
                  href={`/centres/${centre.slug}`}
                  onClick={followLink(`/centres/${centre.slug}`)}
                  className="block py-1.5 text-slate-700 hover:text-[#00A88F]"
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
              className="block py-2 hover:text-[#00A88F]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={followLink("/contact")}
            className="mt-3 block rounded-md bg-[#00A88F] py-3 text-center font-semibold text-white hover:bg-[#008f7a]"
          >
            Book a Consultation
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
