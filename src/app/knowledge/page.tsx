import PageHeader from "../components/PageHeader";
import { InsightCard } from "../components/InsightCard";

export default function KnowledgePage() {
  const resources = [
    {
      title: "Code of Ethics for Civil Society Organisations",
      category: "Guideline",
      summary:
        "A sector-wide Code of Ethics supporting integrity, transparency and accountability, facilitating standardization and stakeholder confidence.",
    },
    {
      title: "Best Practices in Nonprofit Governance",
      category: "Best Practice",
      summary:
        "Curated practices on board roles, fiduciary responsibilities and leadership paradigms to strengthen governance in NGOs and NPOs.",
    },
    {
      title: "Knowledge Products and Publications",
      category: "Publication",
      summary:
        "Reports, manuals and learning materials developed to support training, development and awareness building across the sector.",
    },
    {
      title: "Research & Development Initiatives",
      category: "Research",
      summary:
        "Interdisciplinary inquiries into organisational essence, raison d’être and capacity for development, guiding knowledge design and structures.",
    },
  ];

  return (
    <main>
      <PageHeader
        title="Knowledge Hub"
        subtitle="Knowledge products, best practices and research for sustainable futures."
      />
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-12 md:grid-cols-2">
        {resources.map((resource) => (
          <InsightCard key={resource.title} {...resource} />
        ))}
      </section>
    </main>
  );
}
