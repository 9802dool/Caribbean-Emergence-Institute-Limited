export function CourseCard({
  title,
  desc,
  modules,
}: {
  title: string;
  desc: string;
  modules: string[];
}) {
  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg">
      <h3 className="mb-2 text-xl font-semibold text-[#0B1F3B]">{title}</h3>
      <p className="mb-4 text-sm text-gray-700">{desc}</p>
      <ul className="mb-6 space-y-1">
        {modules.map((m, i) => (
          <li key={i} className="flex items-start text-sm">
            <span className="mr-2 text-[#C89B3C]">•</span>
            {m}
          </li>
        ))}
      </ul>
      <span className="mt-auto cursor-pointer font-semibold text-[#1F7A6B] hover:underline">
        View Course Outline →
      </span>
    </div>
  );
}
