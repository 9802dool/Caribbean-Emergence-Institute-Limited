export function InsightCard({
  title,
  category,
  summary,
}: {
  title: string;
  category: string;
  summary: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <span className="mb-2 block text-xs uppercase tracking-wide text-[#1F7A6B]">
        {category}
      </span>
      <h3 className="mb-2 text-lg font-semibold text-[#0B1F3B]">{title}</h3>
      <p className="text-sm text-gray-700">{summary}</p>
    </div>
  );
}
