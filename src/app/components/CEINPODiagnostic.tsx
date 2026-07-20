"use client";

import React from "react";

const checklistRows: string[][] = [
  [
    "Registration",
    "NPO must be registered before operating",
    "s.6",
    "Is the organisation registered? Is the certificate current?",
    "Certificate of Registration",
  ],
  [
    "Renewal of Registration",
    "Registration must be renewed annually",
    "s.7",
    "Has the NPO renewed registration within the required timeframe?",
    "Renewal receipt, Form 3",
  ],
  [
    "Constituent Documents",
    "NPO must file constituent documents",
    "s.6(2)",
    "Does the organisation maintain updated governing documents?",
    "Constitution, by-laws, trust deed",
  ],
  [
    "Register of Controllers",
    "Details of controllers must be kept current",
    "ss.6(2), 15",
    "Is there an updated list of directors/trustees/controllers?",
    "Register of officers/controllers",
  ],
  [
    "Notice of Changes",
    "Registrar must be notified of changes",
    "s.15",
    "Are changes reported promptly?",
    "Filed Form 4, board resolutions",
  ],
  [
    "Registered Office",
    "NPO must maintain a registered office",
    "ss.6, 15",
    "Is there a current registered address?",
    "Utility bill, lease, filings",
  ],
  [
    "Record Keeping",
    "Proper books and records must be maintained",
    "s.16",
    "Are accounting and operational records up to date?",
    "Financial records, ledgers",
  ],
  [
    "Retention of Records",
    "Records must be retained",
    "s.16",
    "Is there a document retention policy?",
    "Records management policy",
  ],
  [
    "Financial Transparency",
    "Maintain records showing receipt and use of funds",
    "s.16",
    "Can the organisation trace donations and expenditures?",
    "Audited accounts, bank records",
  ],
  [
    "Annual Financial Statements",
    "Financial statements must be prepared",
    "s.16",
    "Are annual financial statements prepared consistently?",
    "Audited or management accounts",
  ],
  [
    "Monitoring of Transactions",
    "Monitor financial activities to prevent abuse",
    "ss.16, 18",
    "Are there controls for payments and approvals?",
    "Financial procedures manual",
  ],
  [
    "AML/CFT Compliance",
    "Must not be used for money laundering or terrorist financing",
    "Act + FIU obligations",
    "Has the organisation conducted AML/CFT risk assessments?",
    "AML/CFT policy, risk assessment",
  ],
  [
    "Internal Governance",
    "Controllers responsible for compliance",
    "ss.18, 19",
    "Do board members understand legal duties?",
    "Board induction records",
  ],
  [
    "Fit and Proper Controllers",
    "Disqualified persons cannot act as controllers",
    "s.19",
    "Have background checks been conducted?",
    "Declarations, police certificates",
  ],
  [
    "Cooperation with Registrar",
    "Registrar may request information",
    "ss.10–13",
    "Can the organisation respond promptly?",
    "Compliance files",
  ],
  [
    "Inspection Powers",
    "Must facilitate lawful inspections",
    "ss.10–13",
    "Is there a process for inspections?",
    "Compliance protocol",
  ],
  [
    "Filing Accuracy",
    "Information must be truthful and complete",
    "ss.6, 7, 18",
    "Are filings reviewed before submission?",
    "Signed declarations",
  ],
  [
    "Use of Funds",
    "Funds must advance non-profit purposes",
    "s.3",
    "Are expenditures aligned with objects?",
    "Budgets, programme reports",
  ],
  [
    "Restriction on Profit Distribution",
    "Profits cannot be distributed to members",
    "s.3",
    "Is there a policy prohibiting private benefit?",
    "HR/payroll policies",
  ],
  [
    "Governance Meetings",
    "Controllers should oversee operations",
    "Best practice",
    "Are board meetings held regularly?",
    "Board minutes",
  ],
  [
    "Conflict of Interest",
    "Controllers should avoid improper benefit",
    "Fiduciary duties",
    "Is there a conflict-of-interest policy?",
    "Conflict declarations",
  ],
  [
    "Risk Management",
    "Identify and mitigate risks",
    "s.18",
    "Does the organisation conduct risk reviews?",
    "Risk register",
  ],
  [
    "Reporting to Authorities",
    "Information must be supplied",
    "ss.10–13",
    "Is responsibility assigned?",
    "Compliance calendar",
  ],
  [
    "Suspension/Cancellation Risk",
    "Registration may be cancelled",
    "ss.8–9",
    "Has the organisation assessed non-compliance?",
    "Internal compliance review",
  ],
  [
    "Penalties",
    "Breaches may result in offences",
    "Part V",
    "Are directors aware of liability exposure?",
    "Governance training records",
  ],
];

const ratingRows: string[][] = [
  ["0", "Non-compliant"],
  ["1", "Partially compliant"],
  ["2", "Fully compliant"],
  ["N/A", "Not applicable"],
];

const recommendedPolicies = [
  "AML/CFT Policy",
  "Conflict of Interest Policy",
  "Financial Controls Policy",
  "Procurement Policy",
  "Document Retention Policy",
  "Whistleblower Procedure",
  "Board Charter / Terms of Reference",
  "Risk Management Framework",
  "Donation Acceptance Policy",
  "Data Protection and Confidentiality Policy",
];

export default function CEINPODiagnostic() {
  return (
    <div className="text-[#222222]">
      <section className="bg-[#0B1F3B] px-6 py-12 text-center text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-serif text-3xl font-bold md:text-4xl">
            CEI Diagnostic Tool – Non-Profit Organisations
          </h1>
          <p className="mt-4 text-base opacity-90 md:text-lg">
            Governance Diagnostic Checklist based on the Non-Profit Organisations
            Act, No. 7 of 2019 (Trinidad &amp; Tobago)
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="mb-12">
          <p className="text-lg leading-relaxed">
            This diagnostic tool is structured as a practical compliance and
            governance review framework for boards, trustees, controllers, and
            management of non-profit organisations (NPOs). It reflects statutory
            obligations under the Non-Profit Organisations Act No. 7 of 2019 and
            related Registrar General guidance.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 font-serif text-2xl font-bold text-[#0B1F3B]">
            Governance Diagnostic Checklist
          </h2>

          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow">
            <table className="min-w-full text-sm">
              <thead className="bg-[#0B1F3B] text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Governance Area</th>
                  <th className="px-4 py-3 text-left">Legal Obligation</th>
                  <th className="px-4 py-3 text-left">Relevant Section(s)</th>
                  <th className="px-4 py-3 text-left">Diagnostic Questions</th>
                  <th className="px-4 py-3 text-left">Evidence / Documents</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {checklistRows.map((row, i) => (
                  <tr key={i} className="align-top">
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 font-serif text-2xl font-bold text-[#0B1F3B]">
            Key Statutory Obligations — Selected Quotations
          </h2>

          <div className="space-y-6 text-lg">
            <p>
              <strong>Definition of an NPO:</strong> “is established primarily
              for the promotion of a patriotic, religious, philanthropic,
              charitable, educational, cultural, scientific, literary,
              historical, artistic, social, professional, fraternal, sporting or
              athletic purpose…” and “carries on its business without pecuniary
              gain to its members or officers…”
            </p>

            <p>
              <strong>Registration Requirement:</strong> “no one may operate a
              non-profit organisation… unless it is registered with the
              Registrar.”
            </p>

            <p>
              <strong>Record Keeping:</strong> Section 16 requires proper records
              relating to activities, transactions, finances, controllers, and
              operations.
            </p>

            <p>
              <strong>Changes in Particulars:</strong> Section 15 requires
              notification to the Registrar when there are changes to name,
              address, controllers, constituent documents, or declared purposes.
            </p>

            <p>
              <strong>Disqualified Controllers:</strong> Section 19 restricts
              certain persons from acting as controllers.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 font-serif text-2xl font-bold text-[#0B1F3B]">
            Governance Rating System
          </h2>

          <table className="min-w-full rounded-lg border border-gray-200 text-sm shadow">
            <thead className="bg-[#0B1F3B] text-white">
              <tr>
                <th className="px-4 py-3 text-left">Rating</th>
                <th className="px-4 py-3 text-left">Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {ratingRows.map((row, i) => (
                <tr key={i}>
                  <td className="px-4 py-3 font-semibold">{row[0]}</td>
                  <td className="px-4 py-3">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="mt-6 text-lg">
            <strong>Risk Interpretation:</strong>
            <br />
            80–100% = Strong governance
            <br />
            60–79% = Moderate governance risk
            <br />
            Below 60% = Significant compliance exposure
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 font-serif text-2xl font-bold text-[#0B1F3B]">
            Recommended Governance Policies
          </h2>

          <ul className="ml-6 list-disc space-y-2 text-lg">
            {recommendedPolicies.map((policy) => (
              <li key={policy}>{policy}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
