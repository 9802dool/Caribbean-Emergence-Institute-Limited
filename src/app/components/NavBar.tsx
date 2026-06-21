"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <header className="bg-[#0B1F3B] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-lg font-semibold">
          Caribbean Emergence Institute
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
