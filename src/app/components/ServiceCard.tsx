export function ServiceCard({
  title,
  features,
  benefits,
}: {
  title: string;
  features: string[];
  benefits: string[];
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg">
      <h3 className="mb-3 text-xl font-semibold text-[#0B1F3B]">{title}</h3>

      <div className="mb-4">
        <h4 className="mb-1 text-sm font-semibold text-[#C89B3C]">Features</h4>
        <ul className="space-y-1">
          {features.map((f, i) => (
            <li key={i} className="flex items-start text-sm">
              <span className="mr-2 text-[#C89B3C]">•</span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="mb-1 text-sm font-semibold text-[#1F7A6B]">Benefits</h4>
        <ul className="space-y-1">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start text-sm">
              <span className="mr-2 text-[#1F7A6B]">•</span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      <span className="cursor-pointer font-semibold text-[#1F7A6B] hover:underline">
        Learn More →
      </span>
    </div>
  );
}
