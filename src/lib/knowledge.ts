export type KnowledgeItem = {
  title: string;
  type: string;
  summary: string;
  topics: string[];
};

export const knowledgeItems: KnowledgeItem[] = [
  {
    title: "Governance Toolkit for Caribbean NGOs",
    type: "Guide",
    summary:
      "Practical templates and checklists for boards, policies, and compliance readiness.",
    topics: ["Governance", "Compliance", "Board development"],
  },
  {
    title: "Theory of Change Workbook",
    type: "Workbook",
    summary:
      "Step-by-step exercises to articulate outcomes, indicators, and learning loops.",
    topics: ["Impact", "Programme design", "Evaluation"],
  },
  {
    title: "Social Enterprise Models in Small States",
    type: "Research Brief",
    summary:
      "Case studies of hybrid revenue models across the Caribbean and lessons learned.",
    topics: ["Social business", "Revenue", "Sustainability"],
  },
  {
    title: "Facilitator's Guide to Strategic Planning",
    type: "Guide",
    summary:
      "Session designs, prompts, and facilitation notes for organisational planning retreats.",
    topics: ["Strategy", "Facilitation", "Planning"],
  },
  {
    title: "CARICOM Policy Landscape Primer",
    type: "Reference",
    summary:
      "Overview of regional frameworks affecting civil society, trade, and social development.",
    topics: ["CARICOM", "Policy", "Regional context"],
  },
  {
    title: "Network Weaving Playbook",
    type: "Playbook",
    summary:
      "Methods for building cross-island collaborations and shared learning communities.",
    topics: ["Networks", "Collaboration", "Community"],
  },
];
