import PageHeader from "../components/PageHeader";
import { ServiceCard } from "../components/ServiceCard";

export default function ServicesPage() {
  const services = [
    {
      title: "Baseline Assessment & Organisational Diagnosis",
      features: [
        "Thorough diagnosis of organisational structure",
        "Tailored to the need of individual organisations",
      ],
      benefits: [
        "In-depth analysis of current realities",
        "Appropriate tools for implementing changes",
      ],
    },
    {
      title: "Readiness for Coaching",
      features: [
        "Assessment of organisational commitment to change",
        "Identification of coaching needs and priorities",
      ],
      benefits: [
        "Buy-in to process and use of knowledge",
        "Stronger foundation for capacity building",
      ],
    },
    {
      title: "Recommendations & Innovation Opportunities",
      features: [
        "Strategic recommendations for improvement",
        "Learning from best practices and sector trends",
      ],
      benefits: [
        "Sustainability and improved credibility",
        "Opportunities for innovation and growth",
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
        "Professionalism and organisational confidence",
      ],
    },
    {
      title: "Pedagogy, Workshops & Experiential Learning",
      features: [
        "Blended learning and interactive workshops",
        "Role simulations, mentoring and multimedia applications",
      ],
      benefits: [
        "Caters to all learning styles",
        "Introduces ICT skills and competencies",
      ],
    },
    {
      title: "Implementation Support",
      features: [
        "Assignment of a development officer",
        "On-going mentoring and technical support",
      ],
      benefits: [
        "Support to implement knowledge gained",
        "Guidance for change management",
      ],
    },
    {
      title: "Evaluation & Continuous Improvement",
      features: [
        "Assessment of learning and process tracking",
        "Identification of areas for additional focus",
      ],
      benefits: [
        "Evidence of success and impact",
        "Targeted refinement of interventions",
      ],
    },
    {
      title: "Legitimization & Legal Compliance",
      features: [
        "Incorporation, Articles, Bylaws and/or Constitution",
        "Legal registration and compliance processes",
      ],
      benefits: [
        "Lawful operations and integrity",
        "Stakeholder confidence and trust",
      ],
    },
    {
      title: "Strategic Planning & Systems Design",
      features: [
        "Strategic planning facilitation",
        "Design of organisational systems and structures",
      ],
      benefits: [
        "Clear direction and alignment",
        "Resilient and responsive systems",
      ],
    },
    {
      title: "Project & Proposal Development & Resource Mobilisation",
      features: [
        "Project and proposal design support",
        "Resource mobilisation strategies",
      ],
      benefits: [
        "Improved access to funding",
        "Stronger project pipelines",
      ],
    },
    {
      title: "Research, Knowledge Products & Innovation",
      features: [
        "Research and development initiatives",
        "Development of knowledge products and dissemination",
      ],
      benefits: [
        "Market leadership and advocacy",
        "Resource material for training and awareness",
      ],
    },
    {
      title: "Social Enterprise & Social Investment",
      features: [
        "Social enterprise design and support",
        "Social investment strategies",
      ],
      benefits: [
        "New revenue streams for impact",
        "Alignment with conscious capital ideals",
      ],
    },
    {
      title: "Best Practices, Network Weaving & Code of Ethics",
      features: [
        "Sharing of sector-specific best practices",
        "Facilitation of standardization with Code of Ethics",
      ],
      benefits: [
        "Growth and opportunities through networking",
        "Integrity, transparency and accountability",
      ],
    },
    {
      title: "Fellowships & Additional Support Services",
      features: [
        "Fellowships and learning opportunities",
        "Access to reference library and technical support",
      ],
      benefits: [
        "Ongoing professional development",
        "Inclusion on mailing lists and international fora",
      ],
    },
  ];

  return (
    <main>
      <PageHeader
        title="Services for Civil Society Organisations"
        subtitle="Capacity building, institutional strengthening, effective service delivery and sustainability."
      />
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    </main>
  );
}
