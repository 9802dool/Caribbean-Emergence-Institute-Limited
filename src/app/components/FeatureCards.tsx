import Link from "next/link";

const cards = [
  {
    title: "Programs & Courses",
    desc: "Nonprofit leadership, social impact strategy, social business models, compliance and more.",
    href: "/programs",
  },
  {
    title: "Services for Civil Society",
    desc: "Diagnostics, coaching, governance, systems design, strategic planning.",
    href: "/services",
  },
  {
    title: "Macro & Regional Insights",
    desc: "Global scans, CARICOM analysis, NGO sector trends.",
    href: "/insights",
  },
  {
    title: "Fellowships & Network",
    desc: "Conscious capital, enlightened thinkers, regional network weaving.",
    href: "/fellowship",
  },
];

export default function FeatureCards() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="rounded-xl border border-[#E2E2E2] bg-white p-5 text-left shadow-sm transition hover:shadow-md"
          >
            <h3 className="mb-2 font-semibold text-[#0B1F3B]">{card.title}</h3>
            <p className="text-sm">{card.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
