export interface Service {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  summary: string;
  description: string[];
  includes: { icon: string; title: string; body: string }[];
  clientTypes: { title: string; body: string }[];
  processSteps: { label: string; body: string }[];
  relatedSlugs: string[];
}

export const services: Service[] = [
  {
    slug: "audit",
    name: "Audit",
    tagline: "Independent assurance you and your stakeholders can rely on.",
    icon: "analytics",
    summary:
      "Rigorous, independent audit services delivered in full compliance with Nigerian Standards on Auditing and IFRS — giving directors, investors, and regulators the assurance they need.",
    description: [
      "At Layi Lawal & Co, our audit practice is built on independence, technical rigour, and a deep understanding of the Nigerian regulatory environment. We conduct statutory and special-purpose audits in accordance with the Nigerian Standards on Auditing (NSA) and International Financial Reporting Standards (IFRS), ensuring your financial statements give a true and fair view.",
      "Our team brings experience across a wide range of sectors — from manufacturing and FMCG to NGOs, real estate, and financial services. We understand the nuances of the Companies and Allied Matters Act (CAMA) 2020 and remain current with all FIRS, CAC, and Securities and Exchange Commission requirements.",
      "We take a risk-based approach to every engagement, focusing our attention where it matters most. Our audit process is collaborative — we work closely with your finance team, minimising disruption while delivering actionable insights that go beyond the audit opinion itself.",
      "Whether you require a statutory audit under CAMA 2020, a donor-mandated audit for an NGO, or a special-purpose audit for a specific transaction, our team is equipped to deliver with precision and professionalism.",
    ],
    includes: [
      { icon: "fact_check", title: "Statutory Audit", body: "Full CAMA 2020-compliant audit of annual financial statements for companies of all sizes." },
      { icon: "policy", title: "Internal Audit", body: "Independent evaluation of internal controls, risk management frameworks, and governance processes." },
      { icon: "search", title: "Special-Purpose Audit", body: "Audits designed for specific transactions, grant compliance, donor reporting, or regulatory investigations." },
      { icon: "verified", title: "IFRS Compliance Review", body: "Assessment of financial statements for compliance with International Financial Reporting Standards." },
      { icon: "security", title: "Forensic Audit", body: "Investigation of suspected fraud, financial irregularities, or disputed transactions." },
      { icon: "description", title: "Regulatory Reporting", body: "Preparation and review of returns required by the SEC, CBN, PENCOM, and other regulators." },
    ],
    clientTypes: [
      {
        title: "Listed & Public Companies",
        body: "Publicly quoted companies requiring statutory audits under SEC and NGX regulations, with tight reporting deadlines and heightened disclosure requirements.",
      },
      {
        title: "SMEs Seeking Investment",
        body: "Growing businesses preparing for private equity, venture capital, or bank financing who need credible, independently audited accounts to satisfy investor due diligence.",
      },
      {
        title: "NGOs & Donor-Funded Organisations",
        body: "Non-profit organisations required to provide audited accounts to donors such as bilateral agencies, foundations, and international development bodies.",
      },
    ],
    processSteps: [
      { label: "Engagement & Planning", body: "We agree scope, timelines, and materiality thresholds, and assign a dedicated audit team to your organisation." },
      { label: "Risk Assessment", body: "We identify key audit risks, assess internal controls, and design procedures tailored to your business." },
      { label: "Fieldwork", body: "Our team conducts substantive testing, gathers evidence, and liaises closely with your finance staff throughout." },
      { label: "Reporting", body: "We issue a formal audit opinion and management letter, discussing findings and recommendations with your board." },
    ],
    relatedSlugs: ["advisory", "accountancy"],
  },
  {
    slug: "advisory",
    name: "Advisory",
    tagline: "Strategic financial advice that moves your business forward.",
    icon: "tips_and_updates",
    summary:
      "From business strategy and financial due diligence to restructuring and feasibility studies, our advisory practice delivers the insight your leadership team needs to make confident decisions.",
    description: [
      "Sound decisions require more than intuition — they require rigorous financial analysis, sector knowledge, and an independent perspective. Our advisory team at Layi Lawal & Co works alongside business owners, boards, and management teams to deliver practical, commercially grounded advice.",
      "We have advised clients across transactions ranging from business acquisitions and mergers to corporate restructurings and management buy-outs. Our due diligence work has supported investors and lenders across the banking, manufacturing, oil and gas, and technology sectors.",
      "We also assist entrepreneurs and established businesses with feasibility studies, business plans, and financial modelling — whether you are entering a new market, applying for funding, or planning a major capital investment.",
      "Our advisory engagements are collaborative and results-focused. We combine deep technical expertise with a thorough understanding of the Nigerian business environment, giving you advice that is both technically sound and practically actionable.",
    ],
    includes: [
      { icon: "manage_search", title: "Financial Due Diligence", body: "Independent analysis of a target's financial position, earnings quality, and key risks ahead of an acquisition or investment." },
      { icon: "bar_chart", title: "Business Valuation", body: "Defensible valuations for transactions, dispute resolution, shareholder restructuring, or regulatory purposes." },
      { icon: "trending_up", title: "Feasibility Studies", body: "Rigorous financial and commercial assessment of new ventures, capital projects, and market expansion opportunities." },
      { icon: "account_tree", title: "Corporate Restructuring", body: "Advice on reorganising business structures, optimising capital allocation, and improving operational efficiency." },
      { icon: "handshake", title: "Mergers & Acquisitions", body: "End-to-end support through the M&A process — from target identification and deal structuring to post-merger integration." },
      { icon: "insert_chart", title: "Financial Modelling", body: "Detailed, scenario-tested financial models to support investment decisions, fundraising, and strategic planning." },
    ],
    clientTypes: [
      {
        title: "Business Owners & Entrepreneurs",
        body: "Founders and owner-managers seeking independent financial analysis to support growth plans, funding applications, or succession decisions.",
      },
      {
        title: "Investors & Lenders",
        body: "Private equity houses, banks, and development finance institutions requiring independent due diligence before deploying capital.",
      },
      {
        title: "Boards & Executive Teams",
        body: "Directors and management teams navigating major strategic decisions, transactions, or organisational change who need trusted external counsel.",
      },
    ],
    processSteps: [
      { label: "Scoping", body: "We define the advisory mandate, agree deliverables and timelines, and assemble the right team for your engagement." },
      { label: "Information Gathering", body: "We collect and review financial data, management information, contracts, and operational records relevant to the engagement." },
      { label: "Analysis & Modelling", body: "Our team builds the analytical framework — financial models, valuation analyses, or risk assessments — underpinning our advice." },
      { label: "Reporting & Presentation", body: "We deliver a clear written report and present our findings to your board or deal team, with time for discussion and questions." },
    ],
    relatedSlugs: ["audit", "tax"],
  },
  {
    slug: "accountancy",
    name: "Accountancy",
    tagline: "Accurate, timely financial information at the heart of your business.",
    icon: "calculate",
    summary:
      "From bookkeeping and payroll to management accounts and statutory financial statements, we keep your financial records in order so you can focus on running your business.",
    description: [
      "Reliable financial information is the foundation of every well-run business. Our accountancy services are designed to give you accurate, timely records — whether you need day-to-day bookkeeping, monthly management accounts, or full statutory financial statements prepared under IFRS or Nigerian GAAP.",
      "We work with businesses of all sizes, from sole traders and partnerships to limited liability companies and group structures. Our team is fluent in widely-used accounting platforms including Sage, QuickBooks, and Xero, and can work within your existing systems or help you migrate to a more suitable solution.",
      "Beyond the numbers, we provide management accounts that are genuinely useful to decision-makers — clear, well-presented reports with commentary that helps you understand what is driving performance and where attention is needed.",
      "Our payroll service ensures your staff are paid accurately and on time, with all statutory deductions — including PAYE, pension contributions, and the National Housing Fund levy — correctly calculated and remitted.",
    ],
    includes: [
      { icon: "receipt", title: "Bookkeeping", body: "Day-to-day recording of transactions, bank reconciliations, and maintenance of the general ledger." },
      { icon: "summarize", title: "Management Accounts", body: "Monthly or quarterly management accounts with variance analysis and performance commentary." },
      { icon: "description", title: "Financial Statements", body: "Preparation of statutory annual accounts under IFRS or Nigerian GAAP, ready for audit and filing." },
      { icon: "payments", title: "Payroll Management", body: "End-to-end payroll processing including PAYE, pension, NHF, and group life remittances." },
      { icon: "account_balance", title: "Fixed Asset Register", body: "Maintenance of detailed fixed asset schedules with depreciation calculations and periodic reconciliation." },
      { icon: "sync_alt", title: "Accounting System Setup", body: "Configuration and migration of accounting software (Sage, QuickBooks, Xero) tailored to your business." },
    ],
    clientTypes: [
      {
        title: "Start-ups & Early-Stage Businesses",
        body: "Founders who need their books kept properly from day one, with systems and processes that will scale as the business grows.",
      },
      {
        title: "Established SMEs",
        body: "Owner-managed businesses requiring reliable management accounts and outsourced finance support without the cost of a full-time finance team.",
      },
      {
        title: "Companies Preparing for Audit",
        body: "Businesses whose accounts need to be audit-ready — properly reconciled, well-documented, and prepared to the required standard.",
      },
    ],
    processSteps: [
      { label: "Onboarding", body: "We review your existing records, agree the scope of service, and set up secure access to your accounting systems." },
      { label: "Recording & Reconciliation", body: "Transactions are recorded accurately, bank accounts reconciled, and any discrepancies investigated promptly." },
      { label: "Reporting", body: "We prepare and deliver management accounts or statutory statements to the agreed timetable and format." },
      { label: "Review & Support", body: "We review reports with you, answer queries, and provide ongoing support as your business needs evolve." },
    ],
    relatedSlugs: ["audit", "tax"],
  },
  {
    slug: "tax",
    name: "Tax",
    tagline: "Full-service Nigerian tax compliance and planning.",
    icon: "receipt_long",
    summary:
      "Navigating Nigeria's multi-layered tax system requires specialist knowledge. We handle your FIRS and state IRS obligations, VAT, withholding tax, transfer pricing, and beyond — keeping you compliant and minimising your exposure.",
    description: [
      "Nigeria's tax landscape is complex and constantly evolving. Companies must navigate Federal Inland Revenue Service (FIRS) regulations, state Internal Revenue Service requirements, Value Added Tax (VAT), Withholding Tax (WHT), and — for multinational groups — Transfer Pricing rules and Country-by-Country Reporting obligations.",
      "Our tax practice at Layi Lawal & Co provides end-to-end compliance and advisory support. We prepare and file all required returns accurately and on time, represent clients during FIRS and SIRS audits, and advise on structuring transactions in a tax-efficient manner — always within the bounds of the law.",
      "We have particular depth in corporate income tax under the Companies Income Tax Act (CITA), personal income tax for expatriates and high-net-worth individuals, and sector-specific tax regimes including petroleum profits tax and the Pioneer Status Incentive scheme.",
      "Tax planning is most effective when integrated with business strategy. We work proactively with clients to identify opportunities, manage exposures, and ensure that tax considerations inform key commercial decisions from the outset.",
    ],
    includes: [
      { icon: "domain", title: "Corporate Income Tax", body: "Preparation and filing of Companies Income Tax returns with the FIRS, including capital allowance computations." },
      { icon: "storefront", title: "Value Added Tax", body: "Monthly VAT returns, input credit reconciliation, and advice on the taxability of supplies." },
      { icon: "percent", title: "Withholding Tax", body: "WHT computation, deduction from payments, credit notes, and remittance to FIRS and state revenue authorities." },
      { icon: "person", title: "Personal Income Tax", body: "Annual PIT returns for business owners, partners, directors, and expatriate employees under PITA." },
      { icon: "public", title: "Transfer Pricing", body: "TP documentation, benchmarking studies, and Country-by-Country Reporting for related-party transactions." },
      { icon: "gavel", title: "Tax Dispute Resolution", body: "Representation before FIRS, SIRS, and the Tax Appeal Tribunal for assessments, objections, and appeals." },
    ],
    clientTypes: [
      {
        title: "Nigerian-Owned Companies",
        body: "Local businesses that need reliable, on-time compliance across all federal and state tax obligations without the risk of penalties.",
      },
      {
        title: "Multinational Groups",
        body: "Foreign-owned companies with Nigerian subsidiaries requiring transfer pricing documentation, CbCR compliance, and coordination with group tax functions.",
      },
      {
        title: "High-Net-Worth Individuals",
        body: "Business owners and professionals seeking advice on personal tax planning, investment structuring, and compliance with the Joint Tax Board requirements.",
      },
    ],
    processSteps: [
      { label: "Tax Health Check", body: "We review your current tax position, identify exposures, and establish a compliance calendar tailored to your business." },
      { label: "Computation & Review", body: "Our team prepares all computations, reviews supporting schedules, and reconciles to your audited accounts." },
      { label: "Filing & Payment", body: "Returns are filed electronically with the FIRS or relevant SIRS, and payment references issued to your finance team." },
      { label: "Ongoing Advisory", body: "We provide proactive updates on legislative changes and advise on the tax implications of business decisions throughout the year." },
    ],
    relatedSlugs: ["advisory", "accountancy"],
  },
  {
    slug: "insolvency",
    name: "Insolvency",
    tagline: "Expert guidance through financial distress — for businesses and their creditors.",
    icon: "gavel",
    summary:
      "Whether you are a company facing financial difficulty, a creditor seeking recovery, or a director managing your obligations, our insolvency practice provides the expertise and independence you need under the CAMA 2020 framework.",
    description: [
      "Financial distress is one of the most challenging situations a business or its stakeholders can face. Our insolvency practice at Layi Lawal & Co combines deep legal and financial expertise to guide clients through these circumstances with clarity, professionalism, and rigorous adherence to the Companies and Allied Matters Act (CAMA) 2020.",
      "We act as appointed receivers, liquidators, and business rescue practitioners, fulfilling our statutory duties with independence and integrity. We also advise directors on their obligations when a company is in or approaching insolvency, helping them avoid personal liability while acting in the interests of creditors.",
      "Where there is a genuine prospect of rescue, we work quickly to assess viability, develop a rescue plan, and engage with creditors — because preserving a business as a going concern is almost always preferable to liquidation for all parties involved.",
      "Our creditor advisory work includes advising banks, trade creditors, and bond holders on recovery strategies, proof of debt, and their rights in formal insolvency proceedings.",
    ],
    includes: [
      { icon: "manage_accounts", title: "Receivership", body: "Acting as court-appointed or out-of-court receiver to realise assets and distribute proceeds to secured creditors." },
      { icon: "balance", title: "Voluntary Liquidation", body: "Members' and creditors' voluntary winding-up under CAMA 2020, from appointment through to final dissolution." },
      { icon: "healing", title: "Business Rescue", body: "Appointment as business rescue practitioner to develop and implement a rescue plan for a financially distressed company." },
      { icon: "shield", title: "Director Advisory", body: "Advice to directors on their duties and personal liability when a company is insolvent or approaching insolvency." },
      { icon: "account_balance_wallet", title: "Creditor Advisory", body: "Representing banks, trade creditors, and bond holders in formal insolvency proceedings and recovery strategies." },
      { icon: "calculate", title: "Asset Realisation", body: "Independent valuation and managed sale of business assets to maximise returns to creditors." },
    ],
    clientTypes: [
      {
        title: "Companies in Distress",
        body: "Businesses experiencing acute financial difficulty who need immediate, expert guidance on their options — from informal restructuring to formal insolvency proceedings.",
      },
      {
        title: "Directors & Shareholders",
        body: "Individuals with personal liability concerns who need clear, confidential advice on their obligations and options when a company's financial position deteriorates.",
      },
      {
        title: "Creditors & Lenders",
        body: "Banks, trade creditors, and other stakeholders seeking to understand and enforce their rights in formal insolvency or restructuring processes.",
      },
    ],
    processSteps: [
      { label: "Initial Assessment", body: "We conduct a rapid review of the company's financial position, assets, liabilities, and viability prospects." },
      { label: "Options Analysis", body: "We present the full range of options — from informal workouts to formal insolvency — and advise on the most appropriate course." },
      { label: "Appointment & Execution", body: "Where a formal process is required, we accept appointment and manage the process from inception to completion." },
      { label: "Realisation & Closure", body: "Assets are realised, creditor claims adjudicated, distributions made, and the company formally wound up or rescued." },
    ],
    relatedSlugs: ["advisory", "audit"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string): Service[] {
  const service = getService(slug);
  if (!service) return [];
  return service.relatedSlugs
    .map((s) => getService(s))
    .filter((s): s is Service => s !== undefined);
}
