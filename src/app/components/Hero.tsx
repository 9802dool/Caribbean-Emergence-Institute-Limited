import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#0B1F3B] to-[#1F7A6B] py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
        <div>
          <h1 className="mb-4 font-serif text-4xl md:text-5xl">
            Caribbean Emergence Institute Limited
          </h1>
          <p className="mb-2 text-xl">
            Transformative Learning for Sustainable Futures
          </p>
          <p className="mb-8 text-sm uppercase tracking-wide">
            GOD is the Governor Of Development
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/programs"
              className="rounded-md bg-[#C89B3C] px-6 py-3 font-semibold text-[#0B1F3B]"
            >
              Explore Programs
            </Link>
            <Link
              href="/services"
              className="rounded-md border border-white px-6 py-3"
            >
              Services for Civil Society
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="h-64 w-full rounded-xl border border-white/20 bg-white/10" />
        </div>
      </div>
    </section>
  );
}
