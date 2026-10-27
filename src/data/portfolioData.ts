import { Project, Capability, StatItem, EnterpriseDomain, UIScreenItem, ProcessStep, SkillCategory, PersonalInfo, SocialLink, EducationItem } from '../types';
import { Mail, Linkedin, Github } from 'lucide-react';

export const PERSONAL_INFO: PersonalInfo = {
  name: "GISHNU L",
  motto: "I CAN, I WILL, I TRY",
  roleTags: ["PRODUCT DESIGNER", "UI/UX DESIGNER", "FRONTEND DEVELOPER"],
  tagline: "PRODUCT DESIGNER   /   UI/UX DESIGNER   /   FRONTEND DEVELOPER",
  heroHeadline: {
    line1: "I design digital products.",
    line2Prefix: "I ",
    highlightWord: "build",
    line2Suffix: " what I design.",
  },
  heroBio: "Product Designer and Frontend Developer crafting thoughtful digital experiences from research and user flows to polished interfaces and production-ready React applications.",
  aboutHeading: "Designer who understands the build.",
  aboutBio: "I work across the product design and frontend development lifecycle — from understanding problems and mapping user journeys to designing interfaces and turning them into scalable React applications.",
  aboutQuote: "Better UI, Better Impact",
  email: "gishnug65@gmail.com",
  phone: "+91 9965996283",
  location: "Coimbatore, Tamil Nadu, India",
  linkedin: "https://linkedin.com/in/gishnulingappan",
  github: "https://github.com/GishnuL",
  // To update your resume in the future, simply replace the PDF in `public/assets/gishnu-resume.pdf`
  // or change this path:
  resumeUrl: "/assets/gishnu-resume.pdf",
  portraitImage: "/assets/gishnu-cutout.png",
  bannerBgImage: "/assets/banner-arch-bg.jpg",
};

export const HERO_STATS: StatItem[] = [
  { id: "years", value: "2+", label: "Years Experience", icon: "Calendar" },
  { id: "projects", value: "14+", label: "Projects", icon: "Layers" },
  { id: "screens", value: "300+", label: "UI Screens", icon: "Monitor" },
  { id: "craft", value: "Design +", label: "Development", icon: "Code" },
];

export const HERO_SOCIAL_LINKS: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/gishnulingappan",
    type: "linkedin",
  },
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/GishnuL",
    type: "github",
  },
  {
    id: "email",
    label: "gishnug65@gmail.com",
    url: "mailto:gishnug65@gmail.com",
    type: "email",
  },
];



export const CAPABILITIES: Capability[] = [
  {
    number: "CARD 01",
    title: "Product Thinking",
    iconName: "Compass",
    items: [
      "User research",
      "User journeys",
      "Information architecture",
      "User flows",
      "Problem solving",
    ],
  },
  {
    number: "CARD 02",
    title: "Visual Design",
    iconName: "Palette",
    items: [
      "Wireframes",
      "UI design",
      "Design systems",
      "Responsive design",
      "Accessibility",
      "Prototyping",
    ],
  },
  {
    number: "CARD 03",
    title: "Frontend Engineering",
    iconName: "Code2",
    items: [
      "React.js",
      "TypeScript",
      "Redux",
      "REST APIs",
      "Reusable components",
      "Responsive development",
    ],
  },
];

export const EXPERIENCE_NUMBERS: StatItem[] = [
  { value: "2+", label: "Years Experience", sublabel: "Continuous design & code" },
  { value: "14+", label: "Enterprise Projects", sublabel: "Complex workflow systems" },
  { value: "300+", label: "Responsive UI Screens", sublabel: "Engineered with precision" },
  { value: "6+", label: "Business Domains", sublabel: "Healthcare, ERP, CRM, more" },
];

export const PROJECTS: Project[] = [
  {
    id: "thalam-360",
    title: "THALAM 360",
    subtitle: "Photography Studio CRM & Management Platform (Web & Mobile App)",
    category: "web & mobile",
    categories: ["web", "mobile"],
    role: "Product Designer + Frontend Developer",
    technology: ["React.js", "TypeScript", "Tailwind CSS", "Mobile App (PWA & Responsive)"],
    domain: "Photography Studio & CRM",
    image: "/assets/thalam-mockup.png",
    liveUrl: "https://thalam360.com/",
    features: [
      "Web & Mobile App",
      "Calendar Scheduling",
      "Enquiry Management",
      "Quotations",
      "Expenses",
      "Invoices",
      "Payment Tracking",
      "WhatsApp Sharing",
    ],
    overview: "A comprehensive SaaS ecosystem custom-built for high-volume creative photography studios, available as both a high-efficiency Web Application and a Mobile App for photographers on the go. Streamlines client intake, booking schedules, multi-currency invoicing, milestone payments, and instant WhatsApp updates.",
    problem: "Photography studios often juggle multiple disconnected apps (spreadsheets, chat apps, manual PDF invoices), leading to double bookings, delayed customer payments, and lost enquiry records when teams are out on field shoots.",
    solution: "Designed and built a synchronized Web Application and Mobile App with calendar scheduling, real-time quotation-to-invoice generators, milestone alerts, and one-click WhatsApp client communication pipelines.",
    highlights: [
      "Engineered both Web Application & Mobile App workflows for studio managers and on-field photographers",
      "End-to-end UX wireframing, interactive Figma prototypes & production React architecture",
      "Integrated responsive dashboard optimized for studio managers on desktop and mobile viewports",
      "Automated quotation generator reducing proposal turnaround from 40 minutes to under 3 minutes",
      "Built with strict TypeScript types, reusable component library, and optimized state management"
    ]
  },
  {
    id: "red-fort-resort",
    title: "RED FORT RESORT",
    subtitle: "Luxury Heritage Resort Website",
    category: "web",
    role: "Designer + Frontend Developer",
    technology: ["React.js", "JavaScript", "HTML5", "CSS3"],
    domain: "Hospitality / Resort",
    image: "/assets/redfort-mockup.jpg",
    liveUrl: "https://www.redfortresort.com",
    features: [
      "Hero",
      "Rooms",
      "Weddings",
      "Dining",
      "Nature",
      "Gallery",
      "Booking / Enquiry",
    ],
    overview: "An immersive, editorial luxury resort website crafted for an iconic heritage property, evoking royalty, heritage architecture, destination wedding experiences, and refined dining.",
    problem: "The previous digital presence failed to convey the premium grandeur of the heritage property, causing low direct conversion rates and high dependency on third-party OTAs.",
    solution: "Crafted a cinematic, story-driven web experience with fluid transitions, ambient photography showcases, interactive room suites visualizer, and an elegant inquiry engine.",
    highlights: [
      "Cinematic visual storytelling capturing authentic palace architecture and lush outdoor suites",
      "Custom responsive reservation flow with date pickers and instant event enquiry handling",
      "Micro-animations designed to reinforce warmth, royalty, and timeless luxury",
      "Lightning-fast load performance despite high-resolution photography assets"
    ]
  },
  {
    id: "enterprise-clinical-ops",
    title: "CLINICAL OPS EHR",
    subtitle: "Enterprise Hospital & Patient Workflow Platform",
    category: "enterprise",
    role: "Lead UI/UX & Frontend Engineer",
    technology: ["React.js", "TypeScript", "Redux Toolkit", "Material UI"],
    domain: "Healthcare",
    image: "/assets/hero-arch.jpg",
    features: [
      "Patient Triage",
      "EHR Charts",
      "Doctor Scheduling",
      "Pharmacy Dispense",
      "Lab Telemetry",
      "HIPAA Audit Logs",
    ],
    overview: "A mission-critical healthcare workflow application designed to handle high-concurrency inpatient admissions, bedside telemetry monitoring, doctor prescription orders, and compliant medical record logs.",
    problem: "Doctors and nursing staff were overwhelmed by dense, cluttered legacy software that caused cognitive fatigue and increased the risk of diagnostic delays.",
    solution: "Re-architected the clinical UI into a clean, hierarchical information system with color-coded triage urgency, contextual doctor notes, and fast keyboard-first patient search.",
    highlights: [
      "Engineered real-time patient status dashboards with low-latency WebSocket updates",
      "Conducted on-ground healthcare persona interviews to map ER doctor & nurse handoff journeys",
      "Achieved 100% WCAG 2.1 AA accessibility compliance for high-contrast hospital lighting environments"
    ]
  },
  {
    id: "asset-license-governance",
    title: "VORTEX ASSET CLOUD",
    subtitle: "Enterprise Asset, Warranty & License Governance",
    category: "enterprise",
    role: "Product Designer + Frontend Developer",
    technology: ["React.js", "TypeScript", "Tailwind CSS", "Recharts"],
    domain: "Enterprise ERP / Asset Ops",
    image: "/assets/hero-arch.jpg",
    features: [
      "Asset Lifecycle",
      "Warranty Tracker",
      "Software Licenses",
      "Compliance Audits",
      "Procurement Approvals",
      "Multi-Tenant RBAC",
    ],
    overview: "An enterprise-grade asset lifecycle management platform allowing Fortune 500 IT teams to track hardware warranties, monitor software license compliance, and automate procurement renewal lifecycles.",
    problem: "Enterprises waste millions annually on unrenewed or dormant software licenses and lack centralized visibility over physical asset warranty expirations across distributed global branches.",
    solution: "Built a unified data visualization dashboard with automated renewal alerts, proactive license optimization algorithms, and detailed audit trail logs.",
    highlights: [
      "Created a modular Design System with 40+ reusable Figma components and React UI kit",
      "Designed interactive multi-level data tables with sorting, multi-filter queries, and exportable reports",
      "Streamlined warranty claim approval flow reducing multi-department ticket resolution time by 52%"
    ]
  },
  {
    id: "omni-timesheet-workforce",
    title: "PULSE WORKFORCE & TIMESHEET",
    subtitle: "Enterprise Time Allocation & Resource Billing",
    category: "enterprise",
    role: "Product Designer & UI Engineer",
    technology: ["React.js", "TypeScript", "Apache ECharts", "CSS Grid"],
    domain: "Human Capital / ERP",
    image: "/assets/hero-arch.jpg",
    features: [
      "Weekly Grid Timesheet",
      "Project Billing",
      "Leave Balances",
      "Manager Approvals",
      "Productivity Heatmap",
      "Payroll Sync",
    ],
    overview: "A slick time tracking and resource billing platform tailored for consulting, engineering, and digital agency teams handling concurrent client retainers.",
    problem: "Employees resisted submitting tedious daily timesheets, causing revenue leakages and delays in monthly client invoicing.",
    solution: "Crafted a frictionless 1-click weekly timesheet grid with calendar sync, task autofill, and live project budget tracking gauges.",
    highlights: [
      "Interactive weekly timesheet matrix supporting keyboard arrow navigation and quick batch entry",
      "Visual productivity heatmaps and burn-rate analytics charts powered by Apache ECharts",
      "Achieved 98% on-time weekly submission rate across 4,000+ active enterprise users"
    ]
  },
];

export const ENTERPRISE_DOMAINS: EnterpriseDomain[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "HeartPulse",
    description: "Inpatient triage, electronic health records, nursing workflows, bedside telemetry, doctor prescription orders",
    screensCount: 58,
  },
  {
    id: "erp",
    name: "ERP",
    icon: "Layers",
    description: "Enterprise resource planning, supply chain, multi-entity accounting, procurement cycles, automated approvals",
    screensCount: 64,
  },
  {
    id: "crm",
    name: "CRM",
    icon: "Users2",
    description: "Lead pipelines, sales forecasting, customer journey tracking, automated omni-channel messaging & deal analytics",
    screensCount: 48,
  },
  {
    id: "inventory",
    name: "Inventory",
    icon: "PackageCheck",
    description: "Warehouse stock management, SKU batch tracking, barcode scanning, multi-location reorder automations",
    screensCount: 42,
  },
  {
    id: "warranty",
    name: "Warranty",
    icon: "ShieldCheck",
    description: "Hardware warranty validation, claim lifecycle processing, RMA tracking, service SLAs",
    screensCount: 36,
  },
  {
    id: "license",
    name: "License Management",
    icon: "FileKey2",
    description: "Enterprise software seat allocation, vendor contract compliance, utilization analytics & renewal lifecycles",
    screensCount: 34,
  },
  {
    id: "timesheet",
    name: "Timesheet Management",
    icon: "Clock8",
    description: "Billable client hours, project budget tracking, weekly matrix entry, multi-tier approvals, payroll export",
    screensCount: 32,
  },
];

export const UI_SCREENS_SHOWCASE: UIScreenItem[] = [
  {
    id: "screen-dashboard",
    title: "Executive Revenue & Operations Dashboard",
    category: "Dashboard",
    description: "High-density multi-metric dashboard featuring real-time KPI cards, interactive revenue trend line charts, and status indicators.",
    features: ["Real-time KPI Tiles", "Revenue Trendline", "Activity Stream", "Custom Date Range Filter"],
    stats: [{ label: "Efficiency", value: "+38%" }, { label: "Data Points", value: "24/hr" }],
  },
  {
    id: "screen-datatables",
    title: "Complex High-Volume Data Table",
    category: "Data Tables",
    description: "Virtualized table component with multi-column sorting, row batch actions, inline cell editing, and sticky header controls.",
    features: ["Column Reordering", "Multi-Row Batch Edit", "Faceted Filtering", "CSV/PDF Export"],
    stats: [{ label: "Rows Rendered", value: "10,000+" }, { label: "FPS", value: "60 FPS" }],
  },
  {
    id: "screen-forms",
    title: "Multi-Step Modal Form & Validation Engine",
    category: "Forms",
    description: "Streamlined enterprise entry flow with dynamic step indicator, schema validation, contextual help tooltips, and draft auto-save.",
    features: ["Dynamic Step Progress", "Inline Schema Validation", "File Dropzone", "Auto-save Draft"],
    stats: [{ label: "Completion Rate", value: "94%" }, { label: "Drop-off", value: "< 3%" }],
  },
  {
    id: "screen-analytics",
    title: "Deep-Dive Comparative Analytics Matrix",
    category: "Analytics",
    description: "Interactive analytics view with breakdown charts, cohort retention curves, and toggleable benchmark metric comparisons.",
    features: ["Cohort Curves", "Segment Comparison", "Custom Tooltips", "Granular Drilldown"],
    stats: [{ label: "Insight Speed", value: "3x Faster" }, { label: "Visualizations", value: "8 Types" }],
  },
  {
    id: "screen-workflow",
    title: "Visual Approval & Governance Pipeline",
    category: "Workflow",
    description: "Drag-and-drop workflow canvas for configuring approval stages, multi-tier signoffs, and conditional escalation triggers.",
    features: ["Drag-and-drop Stages", "Role Assignment", "SLA Timers", "Audit Trail"],
    stats: [{ label: "Approval Cycle", value: "-45%" }, { label: "Compliance", value: "100%" }],
  },
  {
    id: "screen-employee",
    title: "Employee Directory & Shift Management",
    category: "Employee Management",
    description: "Organization-wide talent directory with skill tags, shift scheduling calendar, and performance milestone tracking.",
    features: ["Shift Calendar", "Skill Matrix Tags", "Direct Reports Hierarchy", "Availability Status"],
    stats: [{ label: "Directory Size", value: "5,000+" }, { label: "Scheduling Time", value: "-60%" }],
  },
  {
    id: "screen-healthcare",
    title: "Hospital Inpatient Bedside Telemetry",
    category: "Healthcare",
    description: "High-contrast clinical bedside monitor view displaying vital signs, medication schedules, doctor prescriptions, and allergy alerts.",
    features: ["Vital Sign Waves", "Medication Checklist", "Emergency Alerts", "Shift Doctor Notes"],
    stats: [{ label: "Alert Latency", value: "< 200ms" }, { label: "WCAG Rating", value: "AAA" }],
  },
  {
    id: "screen-crm",
    title: "Deal Pipeline Kanban & Activity Tracker",
    category: "CRM",
    description: "Interactive sales pipeline board with drag-and-drop deal cards, revenue probabilities, and direct call/email action logs.",
    features: ["Kanban Columns", "Deal Value Weighting", "Contact Quick-View", "Meeting Scheduler"],
    stats: [{ label: "Deals Managed", value: "$12M+" }, { label: "Conversion", value: "+22%" }],
  },
  {
    id: "screen-inventory",
    title: "Warehouse Multi-Location Stock Hub",
    category: "Inventory",
    description: "Real-time inventory ledger tracking stock across 4 regional fulfillment centers with low-stock alerts and supplier lead times.",
    features: ["Warehouse Switcher", "SKU Barcode Search", "Safety Stock Alerts", "Supplier PO Gen"],
    stats: [{ label: "SKUs Tracked", value: "45,000+" }, { label: "Stockouts", value: "0.2%" }],
  },
  {
    id: "screen-timesheet",
    title: "Weekly Time & Project Allocation Matrix",
    category: "Timesheet",
    description: "Keyboard-friendly weekly timesheet grid with smart task suggestion, overtime computation, and instantaneous client billing export.",
    features: ["Quick Keyboard Entry", "Billable vs Non-Billable", "Project Code Lookup", "One-Click Submit"],
    stats: [{ label: "Weekly Submissions", value: "98%" }, { label: "Audit Accuracy", value: "99.8%" }],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    description: "Users, business goals, constraints",
    deliverables: ["Stakeholder Interviews", "Competitor Audit", "Requirement Framing"],
  },
  {
    step: "02",
    title: "Define",
    description: "Journey, IA, user flows",
    deliverables: ["User Personas", "Information Architecture", "Core Task Flows"],
  },
  {
    step: "03",
    title: "Explore",
    description: "Wireframes, concepts",
    deliverables: ["Low-Fi Sketches", "Layout Prototypes", "Interaction Models"],
  },
  {
    step: "04",
    title: "Design",
    description: "UI design systems, responsive layouts",
    deliverables: ["High-Fi Figma Components", "Design Tokens", "Micro-Interactions"],
  },
  {
    step: "05",
    title: "Validate",
    description: "Feedback, testing, iteration",
    deliverables: ["Usability Testing", "Accessibility Audits", "Design QA"],
  },
  {
    step: "06",
    title: "Build",
    description: "React components, handoff",
    deliverables: ["TypeScript Components", "State Management", "Production Code"],
  },
];

export const CINEMATOGRAPHY_DATA = {
  heading: "Before interfaces, I learned to frame stories.",
  description: "I worked as a Cinematographer with the IPL Broadcasting Team at Isha Foundation, covering major high-scale events such as Mahashivratri and Gramotsavam, along with video series, songs, reels, promotional videos, creative shoots, vlogs, and interviews.",
  highlights: [
    { title: "Camera & Rigging", desc: "Mastery of cinema cameras, dynamic gimbal movement, and low-light sensor dynamics." },
    { title: "Composition & Framing", desc: "Crafting visual balance, rule-of-thirds, depth-of-field, and intentional focus points." },
    { title: "Visual Hierarchy", desc: "Directing viewer attention through lighting contrast, leading lines, and motion." },
    { title: "Storytelling & Rhythm", desc: "Pacing emotional beats and narratives across live broadcasts and documentary cuts." },
  ],
  events: [
    { name: "Mahashivratri Live Broadcast", role: "Camera Operator & Live Feed", reach: "140M+ Viewers" },
    { name: "Gramotsavam Rural Sports", role: "Field Cinematographer", reach: "60k+ Athletes" },
    { name: "Musical Series & Documentaries", role: "Director of Photography", reach: "Global Release" },
  ],
  gallery: [
    {
      title: "Mahashivratri Live Feed",
      subtitle: "Broadcast Stage",
      tag: "140M+ Viewers",
      image: "/assets/mahashivratri-adiyogi.png",
      borderColor: "hover:border-amber-400/50",
      tagTextColor: "text-amber-400",
      subTextColor: "text-amber-300",
      icon: "Sparkles",
    },
    {
      title: "Live Camera Motion & Framing",
      subtitle: "Rig & Optics",
      tag: "ARRI & Gimbal",
      image: "/assets/cinema-camera-rig.jpg",
      borderColor: "hover:border-terracotta-500/50",
      tagTextColor: "text-terracotta-400",
      subTextColor: "text-terracotta-400",
      icon: "Video",
    },
    {
      title: "Documentary Direction",
      subtitle: "Atmosphere",
      tag: "Visual Depth",
      image: "/assets/cinema-landscape-doc.jpg",
      borderColor: "hover:border-emerald-400/50",
      tagTextColor: "text-emerald-400",
      subTextColor: "text-emerald-400",
      icon: "Eye",
    },
    {
      title: "Broadcast Color Grading",
      subtitle: "Color Science",
      tag: "DaVinci Suite",
      image: "/assets/cinema-color-grading.jpg",
      borderColor: "hover:border-terracotta-400/50",
      tagTextColor: "text-terracotta-300",
      subTextColor: "text-terracotta-300",
      icon: "Film",
    },
  ],
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "PRODUCT DESIGN",
    skills: [
      "Figma",
      "FigJam",
      "User Research",
      "User Journey Mapping",
      "Information Architecture",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Design Tokens",
      "Accessibility (WCAG)",
      "Usability Testing",
    ],
  },
  {
    title: "FRONTEND",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "React Hooks",
      "React Router",
      "Redux Toolkit",
      "REST APIs",
      "Axios",
    ],
  },
  {
    title: "UI ENGINEERING",
    skills: [
      "Material UI",
      "Tailwind CSS",
      "Bootstrap",
      "CSS Grid",
      "Flexbox",
      "Responsive Design",
    ],
  },
  {
    title: "DATA VISUALIZATION",
    skills: [
      "Apache ECharts",
      "Recharts",
      "Nivo Charts",
    ],
  },
  {
    title: "TOOLS",
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "Webpack",
      "npm",
    ],
  },
];

export const PHILOSOPHY = {
  heading: "User-focused. Client-minded. Builder-driven.",
  text: "I combine a builder’s mindset with deep user empathy to transform complex business needs into intuitive, purposeful digital experiences. My approach balances user needs, business goals, and thoughtful execution to create products that feel simple, meaningful, and intentional.",
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science",
    period: "2020 — 2023",
    institution: "Kovai Kalaimagal College of Arts & Science",
  },
];

