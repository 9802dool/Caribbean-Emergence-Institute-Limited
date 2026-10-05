import { FOUNDER } from "@/lib/institution";

export default function FounderLegacy({
  headingLevel = "h2",
}: {
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <article className="relative overflow-hidden rounded-2xl border-l-8 border-cei-gold bg-cei-navy p-8 text-white shadow-xl lg:p-12">
      <p className="mb-3 inline-block rounded bg-cei-gold/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#00A88F]">
        Founder Legacy
      </p>
      <Heading className="font-serif text-3xl font-bold">{FOUNDER.name}</Heading>
      <p className="mb-6 mt-1 font-medium text-[#00A88F]">{FOUNDER.role}</p>
      <div className="max-w-4xl space-y-4 leading-relaxed text-slate-300">
        {FOUNDER.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
