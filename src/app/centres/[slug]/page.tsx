import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

import CentreIcon from "../../components/CentreIcon";
import EnquiryForm from "../../components/EnquiryForm";
import { CENTRES, getCentre } from "@/lib/institution";

type CentrePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return CENTRES.map((centre) => ({ slug: centre.slug }));
}

export async function generateMetadata({ params }: CentrePageProps): Promise<Metadata> {
  const { slug } = await params;
  const centre = getCentre(slug);

  if (!centre) {
    return { title: "Centre" };
  }

  return {
    title: centre.title,
    description: centre.tagline,
  };
}

export default async function CentrePage({ params }: CentrePageProps) {
  const { slug } = await params;
  const centre = getCentre(slug);

  if (!centre) {
    notFound();
  }

  return (
    <main className="bg-cei-light">
      <section className="bg-cei-navy text-white">
        <div
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
          style={{ borderTop: `6px solid ${centre.accent.secondary}` }}
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#00A88F]">
            <Link href="/centres" className="hover:underline">
              Our Centres
            </Link>
          </p>
          <div className="flex items-start gap-4">
            <div
              className="rounded-xl p-3 text-white"
              style={{ backgroundColor: centre.accent.primary }}
            >
              <CentreIcon icon={centre.icon} size={28} />
            </div>
            <div>
              <h1 className="max-w-3xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                {centre.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
                {centre.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-slate-700">{centre.description}</p>
          <h2 className="mb-4 mt-10 text-sm font-bold uppercase tracking-wider text-slate-500">
            Key service areas
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {centre.services.map((service) => (
              <li
                key={service}
                className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white p-4"
              >
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: centre.accent.primary }}
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-slate-700">{service}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5">
          <EnquiryForm
            defaultCentre={centre.slug}
            lockedCentre
            heading="Enquire with this Centre"
            intro="This form is routed directly to this Centre's department."
          />
        </div>
      </section>
    </main>
  );
}
