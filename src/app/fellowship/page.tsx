import Link from "next/link";
import PageHeader from "../components/PageHeader";

export default function FellowshipPage() {
  return (
    <main>
      <PageHeader
        title="Fellowships & Network Weaving"
        subtitle="A new society of enlightened thinkers and innovators living the ideal of conscious capital."
      />
      <section className="mx-auto max-w-6xl space-y-6 px-6 py-12">
        <div className="rounded-xl border border-[#E2E2E2] bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-semibold text-[#0B1F3B]">
            Fellowship Overview
          </h2>
          <p className="text-sm text-gray-800">
            Fellowships at the Caribbean Emergence Institute foster
            transformative learning, leadership and innovation, connecting
            individuals and organisations committed to service for the good of
            all.
          </p>
        </div>

        <div className="rounded-xl border border-[#E2E2E2] bg-white p-6 shadow-sm">
          <h3 className="mb-2 text-lg font-semibold text-[#0B1F3B]">
            Benefits
          </h3>
          <ul className="space-y-1 text-sm text-gray-800">
            <li>• Continued access to reference library and technical support.</li>
            <li>• Inclusion on mailing lists for updates and opportunities.</li>
            <li>• Access to international fora and sector networks.</li>
            <li>• Participation in workshops, seminars and mentoring sessions.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-[#E2E2E2] bg-white p-6 shadow-sm">
          <h3 className="mb-2 text-lg font-semibold text-[#0B1F3B]">
            Join the Network
          </h3>
          <p className="mb-4 text-sm text-gray-800">
            The Institute encourages network weaving and sharing of best
            practices, building a resilient ecosystem of organisations and
            leaders across the Caribbean.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-md bg-[#C89B3C] px-6 py-3 font-semibold text-[#0B1F3B]"
          >
            Express Interest in Fellowship
          </Link>
        </div>
      </section>
    </main>
  );
}
