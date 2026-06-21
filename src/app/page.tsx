import Hero from "./components/Hero";
import FeatureCards from "./components/FeatureCards";
import { CourseCard } from "./components/CourseCard";
import { ServiceCard } from "./components/ServiceCard";

export default function Home() {
  const homeCourses = [
    {
      title: "Nonprofit Leadership, Governance & Governing Protocols",
      desc: "Unveil the intricate process of decision-making and its implementation within participatory, consensus-oriented, and accountable frameworks.",
      modules: [
        "Board Roles and Responsibilities",
        "Compliance and Fiduciary Responsibilities",
        "Current Leadership Paradigms",
      ],
    },
    {
      title: "Social Impact Strategy for NGOs",
      desc: "Develop skills in utilizing business strategies for social impact and change, aligning values with SDGs and Net Zero themes.",
      modules: [
        "Impact strategy design",
        "Funding and investment approaches",
        "Aligning organisational values with development themes",
      ],
    },
    {
      title: "Social Business Model for Social Innovation",
      desc: "Identify and harness opportunities in social entrepreneurship using the Business Model Canvas and social business planning.",
      modules: [
        "Opportunity identification",
        "Business Model Canvas",
        "Social Business Plan development",
      ],
    },
  ];

  const homeServices = [
    {
      title: "Baseline Assessment & Organisational Diagnosis",
      features: [
        "Tailored to the need of individual organisations",
        "Thorough diagnosis of organisational structure",
      ],
      benefits: [
        "Greater opportunity for in-depth analysis",
        "Appropriate tools for implementing changes",
      ],
    },
    {
      title: "Coaching & Board Development",
      features: [
        "Subject level experts and sector specialists",
        "Board development and good governance coaching",
      ],
      benefits: [
        "Years of practitioner experience",
        "Improved credibility and sustainability",
      ],
    },
    {
      title: "Legitimization & Legal Compliance",
      features: [
        "Incorporation, Articles, Bylaws and/or Constitution",
        "Legal registration and compliance processes",
      ],
      benefits: [
        "Engage in lawful operations",
        "Stakeholder confidence and trust in the industry",
      ],
    },
  ];

  return (
    <main>
      <Hero />
      <FeatureCards />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-6 py-12 md:grid-cols-2">
        <div>
          <h2 className="mb-3 font-serif text-2xl text-[#0B1F3B]">
            Why an Institute?
          </h2>
          <p className="mb-3 text-sm text-gray-800">
            At the Caribbean Emergence Institute, we are more than an
            institution; we are a dynamic hub for research and learning,
            equipping leaders of Civil Society Organisations with essential
            tools and skills.
          </p>
          <p className="text-sm text-gray-800">
            Purpose is the driving force behind high performance and the
            catalyst for visionary ideas and innovation, transforming fragments
            into cohesive movements.
          </p>
        </div>
        <div className="rounded-xl border border-[#E2E2E2] bg-white p-5 shadow-sm">
          <h3 className="mb-2 text-lg font-semibold text-[#0B1F3B]">
            Roots in the Rose Foundation
          </h3>
          <p className="text-sm text-gray-800">
            In its thirty-two years, the Rose Foundation has navigated rapid
            currents of change in learning, technology, and socio-cultural
            paradigms, envisioning the Caribbean Emergence Institute as a
            beacon of knowledge for robust learning and adaptive knowledge
            transfer.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-4 font-serif text-2xl text-[#0B1F3B]">
          Featured Programs
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeCourses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-4 font-serif text-2xl text-[#0B1F3B]">
          Key Services for Civil Society
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    </main>
  );
}
