"use client";

import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="bg-[#0B1F3B] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="Caribbean Emergence Institute Logo"
            width={42}
            height={42}
            className="h-10 w-10 object-contain md:h-12 md:w-12"
            priority
          />
          <span className="font-serif text-lg font-semibold">
            Caribbean Emergence Institute
          </span>
        </Link>

        <nav className="flex gap-4 text-sm">
          <Link href="/programs">Programs</Link>
          <Link href="/services">Services</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/knowledge">Knowledge Hub</Link>
          <Link href="/fellowship">Fellowship</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
