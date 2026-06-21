import PageHeader from "../components/PageHeader";
import { CourseCard } from "../components/CourseCard";

export default function ProgramsPage() {
  const courses = [
    {
      title: "Nonprofit Leadership, Governance & Governing Protocols",
      desc: "Explore diverse legal frameworks, principles and values of governance while strengthening participatory and accountable decision-making.",
      modules: [
        "Board Roles and Responsibilities",
        "Compliance and Fiduciary Responsibilities",
        "Current Leadership Paradigms",
      ],
    },
    {
      title: "International Organisation Management Training and Skills for NGOs",
      desc: "Elevate proficiency in managing NGOs through international business and management tools and strategic workings of organisations.",
      modules: [
        "International management tools",
        "Organisational strategy and structures",
        "Cross-border NGO operations",
      ],
    },
    {
      title: "The CARICOM Community as a University of Life and Learning",
      desc: "Immerse yourself in the Caribbean as a curriculum, embracing living as a perpetual learning experience within an integrated ecosystem.",
      modules: [
        "Regional integration and CSME",
        "Caribbean socio-economic ecologies",
        "Living curriculum approaches",
      ],
    },
    {
      title: "Social Impact Strategy for NGOs",
      desc: "Develop skills in utilizing business strategies for social impact and change, exploring funding and investment approaches of impact investors.",
      modules: [
        "Impact strategy frameworks",
        "Impact investing and funding",
        "Aligning values with SDGs and Net Zero",
      ],
    },
    {
      title: "Social Business Model for Social Innovation",
      desc: "Identify and harness opportunities in social entrepreneurship, applying the Business Model Canvas and developing a Social Business Plan.",
      modules: [
        "Social entrepreneurship opportunities",
        "Business Model Canvas",
        "Social Business Plan development",
      ],
    },
    {
      title: "Compliance Processes and Procedures",
      desc: "Equip yourself with internal skills and capacities for successful compliance management and corporate administrative services.",
      modules: [
        "Compliance frameworks",
        "Internal controls and procedures",
        "Corporate administrative services",
      ],
    },
  ];

  return (
    <main>
      <PageHeader
        title="Programs & Courses"
        subtitle="Transformative learning for sustainable futures and conscious capital."
      />
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </section>
    </main>
  );
}
