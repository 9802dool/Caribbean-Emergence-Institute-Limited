import Link from "next/link";

import { CENTRES } from "@/lib/institution";
import { SITE_CONFIG } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-cei-navy px-4 py-12 text-sm text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div>
          <p className="mb-2 font-serif text-lg font-bold text-white">
            Caribbean Emergence Institute
          </p>
          <p className="mb-4 text-xs leading-relaxed">
            Dedicated to advancing the knowledge and professional competence of
            Caribbean society.
          </p>
          <p className="text-xs font-semibold text-[#00A88F]">
            Service for the good of all.
          </p>
        </div>

        <div>
          <p className="mb-3 font-bold text-white">Our Five Centres</p>
          <ul className="space-y-2 text-xs">
            {CENTRES.map((centre) => (
              <li key={centre.slug}>
                <Link href={`/centres/${centre.slug}`} className="hover:text-[#00A88F]">
                  {centre.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 font-bold text-white">Quick Links</p>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/about" className="hover:text-[#00A88F]">
                About CEI
              </Link>
            </li>
            <li>
              <Link href="/leadership" className="hover:text-[#00A88F]">
                Leadership &amp; Founder Legacy
              </Link>
            </li>
            <li>
              <Link href="/partner" className="hover:text-[#00A88F]">
                Partner With Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#00A88F]">
                Book Consultation
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 font-bold text-white">Region Served</p>
          <p className="mb-3 text-xs leading-relaxed">
            Trinidad &amp; Tobago and the broader Caribbean region.
          </p>
          <p className="mb-3 text-xs">
            <a
              href={`mailto:${SITE_CONFIG.contactEmail}`}
              className="text-[#00A88F] underline"
            >
              {SITE_CONFIG.contactEmail}
            </a>
          </p>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Caribbean Emergence Institute Limited.
            All rights reserved.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white">
          Strategic partners
        </p>
        <p className="text-xs">{SITE_CONFIG.partners.join(" · ")}</p>
        <p className="mt-4 max-w-4xl text-xs leading-relaxed text-slate-500">
          {SITE_CONFIG.disclaimer}
        </p>
      </div>
    </footer>
  );
}
