import PageHeader from "../components/PageHeader";

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Contact & Applications"
        subtitle="Connect with the Caribbean Emergence Institute Limited."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2">
        <div className="rounded-xl border border-[#E2E2E2] bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-[#0B1F3B]">
            Get in Touch
          </h2>
          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-sm">Name</label>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm">Email</label>
              <input
                type="email"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm">Organisation</label>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm">Interest</label>
              <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm">
                <option>Programs</option>
                <option>Services</option>
                <option>Fellowship</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm">Message</label>
              <textarea
                rows={4}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-[#1F7A6B] px-6 py-2 text-sm font-semibold text-white"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-[#E2E2E2] bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-[#0B1F3B]">
              Location
            </h3>
            <p className="text-sm text-gray-800">
              Crowne Plaza Hotel, Port of Spain (launch site) and operations
              within the CARICOM region.
            </p>
          </div>
          <div className="rounded-xl border border-[#E2E2E2] bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-[#0B1F3B]">
              Quick Links
            </h3>
            <ul className="space-y-1 text-sm text-gray-800">
              <li>• Book a baseline assessment.</li>
              <li>• Request coaching and governance support.</li>
              <li>• Invite the Institute for speaking or facilitation.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
