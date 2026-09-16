import { SITE_CONFIG } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-cei-gold/20 bg-cei-navy px-4 py-12 text-sm text-gray-400">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-2 font-serif text-lg font-bold text-white">
            {SITE_CONFIG.name}
          </h3>
          <p className="mb-4">
            Practical legal, governance, and operational foundations for
            Caribbean organisations.
          </p>
          <p className="text-xs text-gray-500">
            Contact:{" "}
            <a
              href={`mailto:${SITE_CONFIG.contactEmail}`}
              className="text-cei-gold underline"
            >
              {SITE_CONFIG.contactEmail}
            </a>
          </p>
        </div>
        <div>
          <h4 className="mb-2 font-bold text-white">Strategic Partners</h4>
          <ul className="space-y-1">
            {SITE_CONFIG.partners.map((partner) => (
              <li key={partner}>{partner}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-bold text-white">Pricing Disclaimer</h4>
          <p className="text-xs leading-relaxed text-gray-500">
            {SITE_CONFIG.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
