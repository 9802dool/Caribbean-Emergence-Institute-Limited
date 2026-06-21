import PageHeader from "../components/PageHeader";
import { InsightCard } from "../components/InsightCard";

export default function InsightsPage() {
  const insights = [
    {
      title: "Global Scan: From MDGs to SDGs",
      category: "Global",
      summary:
        "Following the Millennium Summit and the UN Millennium Declaration, global priorities evolved from MDGs to SDGs, reflecting a renewed commitment to tackle contemporary challenges such as poverty, health, peace, human rights, gender equality and environmental sustainability.",
    },
    {
      title: "Accountability, FATF and IFRS in the Nonprofit Sector",
      category: "Global",
      summary:
        "Organisations now navigate added dimensions of accountability and transparency, with the Financial Action Task Force and International Financial Reporting Standards guiding nonprofits in responsible stewardship of resources.",
    },
    {
      title: "CARICOM Single Market and Economy (CSME)",
      category: "Regional",
      summary:
        "The CSME dismantles barriers to the free flow of goods, services and people, reshaping risk landscapes and creating opportunities for new entrants, substitution and changing supplier dynamics across the Caribbean.",
    },
    {
      title: "Small Island Developing States and Resource Challenges",
      category: "Regional",
      summary:
        "Small Island Developing States face resource constraints intensified by migration flows, such as the influx of Venezuelan nationals, demanding strategic navigation and proactive social safety considerations.",
    },
    {
      title: "NGO and NPO Sector in the Caribbean",
      category: "Sector",
      summary:
        "The Caribbean NGO and NPO sector is diverse, spanning healthcare, education, environmental conservation, social justice and community empowerment, with grassroots organisations and larger entities collaborating on regional challenges.",
    },
    {
      title: "Technology Adoption and Youth Engagement",
      category: "Sector",
      summary:
        "Organisations increasingly adopt technology for program delivery, fundraising and outreach, while youth engagement in social and environmental initiatives cultivates a new generation of changemakers.",
    },
  ];

  return (
    <main>
      <PageHeader
        title="Impact & Insights"
        subtitle="Macro-economic analysis, regional dynamics and sector trends."
      />
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-12 md:grid-cols-2">
        {insights.map((insight) => (
          <InsightCard key={insight.title} {...insight} />
        ))}
      </section>
    </main>
  );
}
