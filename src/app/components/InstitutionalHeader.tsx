export default function InstitutionalHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-white/10 bg-cei-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-cei-gold">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
          {description}
        </p>
      </div>
    </section>
  );
}
