export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-[#0B1F3B] py-12 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="mb-2 font-serif text-3xl md:text-4xl">{title}</h1>
        {subtitle && <p className="text-sm opacity-80">{subtitle}</p>}
      </div>
    </section>
  );
}
