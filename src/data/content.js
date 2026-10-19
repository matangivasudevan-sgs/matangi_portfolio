/**
 * All portfolio content lives here, separated from UI components.
 * Update this file to change copy, skills, experience, projects, etc.
 */

export const RESUME_URL = `${import.meta.env.BASE_URL}Matangi_V_Resume.pdf`

export const profile = {
  name: 'Matangi V',
  initials: 'MV',
  headline: 'MBA Finance & Business Analytics | Aspiring Management Professional',
  email: 'matangivasudevan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/matangi-v-672a7b2a3',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const hero = {
  eyebrow: 'Aspiring Management Professional',
  title: 'Turning Financial Insights into Better Business Decisions.',
  subtitle:
    'MBA Finance & Business Analytics student with practical experience in SAP FI/CO, accounting, financial analysis, and business intelligence.',
  highlights: [
    { label: 'Finance & Accounting' },
    { label: 'Business Analytics' },
    { label: 'Business Process Understanding' },
  ],
  card: {
    role: 'MBA — Finance & Business Analytics',
    college: 'Sree Saraswathi Thyagaraja College, Pollachi',
    tags: [
      'SAP S/4HANA FI/CO',
      'Financial Analysis',
      'Advanced Excel',
      'Power BI',
      'Tableau',
      'Tally ERP',
    ],
    details: [
      { label: 'MBA', value: '2025 – 2027 · Finance & Business Analytics' },
      { label: 'Focus', value: 'Finance, analytics & business processes' },
      { label: 'Open to', value: 'Management Trainee · Analyst · Associate roles' },
    ],
  },
}

export const about = {
  paragraphs: [
    'I am currently pursuing an MBA with a specialization in Finance and Business Analytics. My academic background and practical experiences have helped me develop an understanding of accounting processes, financial systems, business analysis, and data interpretation.',
    'Through my SAP FI/CO training, accounting internship, and financial valuation project, I have gained exposure to financial accounting, business processes, and analytical problem-solving.',
    'I aspire to contribute to an organization through structured thinking, teamwork, financial understanding, and data-driven decision-making while continuing to develop my management and leadership capabilities.',
  ],
  cards: [
    {
      title: 'Finance & Accounting',
      description:
        'Grounding in financial accounting, ledger processes, and valuation concepts built through academics, training, and internship work.',
    },
    {
      title: 'Business Analytics',
      description:
        'Experience turning data into readable insights using Excel, Power BI, and Tableau, supporting better business decisions.',
    },
    {
      title: 'Business Process Knowledge',
      description:
        'Familiarity with end-to-end enterprise processes such as Procure-to-Pay and Order-to-Cash through SAP FI/CO exposure.',
    },
    {
      title: 'Continuous Learning',
      description:
        'A habit of consistent upskilling through certifications, research writing, and hands-on financial projects.',
    },
  ],
}

export const skillGroups = [
  {
    category: 'Finance & Accounting',
    skills: [
      'Financial Accounting',
      'General Ledger',
      'Accounts Payable',
      'Accounts Receivable',
      'Asset Accounting',
      'Bank Reconciliation',
      'Financial Documentation',
      'Financial Analysis',
    ],
  },
  {
    category: 'SAP & Business Processes',
    skills: [
      'SAP S/4HANA FI/CO',
      'FI-GL',
      'FI-AP',
      'FI-AR',
      'FI-AA',
      'Controlling Concepts',
      'FI-MM and FI-SD Integration Concepts',
      'Procure-to-Pay (P2P)',
      'Order-to-Cash (O2C)',
    ],
  },
  {
    category: 'Analytics & Digital Tools',
    skills: [
      'Advanced Excel',
      'Power BI',
      'Tableau',
      'Tally ERP',
      'Financial Valuation Multiples',
      'Data Visualization',
    ],
  },
  {
    category: 'Management & Professional Skills',
    skills: [
      'Analytical Thinking',
      'Problem-Solving',
      'Communication',
      'Teamwork',
      'Business Understanding',
      'Time Management',
    ],
  },
]

export const experiences = [
  {
    role: 'SAP S/4HANA FI Cloud Intern',
    organization: 'Tek Cactus',
    location: 'Chennai',
    duration: 'February 2026 – May 2026',
    points: [
      'Gained practical exposure to SAP FI/CO modules.',
      'Learned about General Ledger, Accounts Payable, Accounts Receivable, Asset Accounting, and Controlling.',
      'Explored enterprise structure configuration and vendor and customer accounting.',
      'Learned about payment processes and FI-MM/FI-SD integration concepts.',
    ],
  },
  {
    role: 'Accounts Intern',
    organization: 'Sunshine Solutions',
    location: 'Theni',
    duration: 'May 2026 – June 2026',
    points: [
      'Assisted with accounting records and financial documentation using Tally ERP.',
      'Gained exposure to invoice preparation and voucher verification.',
      'Worked with purchase and sales entries, ledger maintenance, and bank reconciliation.',
      'Learned about billing, expense management, and routine accounting processes.',
    ],
  },
]

export const projects = [
  {
    title: 'End-to-End SAP FI Configuration and Financial Accounting Process Training',
    category: 'SAP FI | Financial Accounting',
    description:
      'A simulated company-based SAP FI training project covering financial accounting processes and configuration concepts.',
    keyAreas: [
      'General Ledger',
      'Accounts Payable and Accounts Receivable',
      'Payment Terms and Dunning',
      'House Bank and Bank Reconciliation',
      'GST Accounting',
      'Foreign Currency Transactions',
    ],
  },
  {
    title: 'Comparable Company Analysis for Equity Valuation',
    category: 'Finance | Financial Analysis',
    description:
      'Analysed pharmaceutical companies using financial data and valuation multiples to understand relative company valuations.',
    keyAreas: [
      'Comparable Company Analysis',
      'Price-to-Earnings (P/E) Ratio',
      'EV/EBITDA',
      'EV/Revenue',
      'Excel-based financial analysis',
    ],
  },
  {
    title: 'Behavioural Finance and Technology',
    category: 'Research | Financial Decision-Making',
    description:
      'Research paper exploring the influence of digital technologies on financial decision-making and investor behaviour.',
    keyAreas: [],
    publication: 'Book Pen Publishing',
    publicationDate: 'July 2026',
  },
]

export const education = [
  {
    degree: 'Master of Business Administration (MBA)',
    specialization: 'Finance and Business Analytics',
    institution: 'Sree Saraswathi Thyagaraja College, Pollachi',
    duration: '2025 – 2027',
    scoreLabel: 'Current CGPA',
    score: '8.9',
    current: true,
  },
  {
    degree: 'Bachelor of Commerce (B.Com)',
    specialization: undefined,
    institution: 'Hajee Karutha Rowther Howdia College, Theni',
    duration: '2022 – 2025',
    scoreLabel: 'CGPA',
    score: '7.32',
    current: false,
  },
]

export const certifications = [
  { title: 'Google Analytics Certification', organization: 'Google' },
  { title: 'Investor Education Basic', organization: 'National Institute of Securities Markets (NISM)' },
  { title: 'Power BI Data Modelling', organization: 'Microsoft' },
  {
    title: 'Applied Finance and Industrial Immersion',
    organization: 'R.A. Podar College, Mumbai',
  },
  { title: 'Tableau Data Visualization Basics', organization: 'Simplilearn' },
  { title: 'Introduction to Commercial Banking & Fintech', organization: 'NPTEL' },
]

export const contact = {
  heading: "Let's Connect",
  text: 'I am interested in opportunities where I can apply my finance, analytical, and business process knowledge while developing my management capabilities.',
}
