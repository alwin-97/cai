export const strategicOverview = {
  title: "University AI Strategic Initiative",
  tagline: "Empowering Christites for the AI-Powered World",
  description: "The AI Strategic Initiative is a university-wide roadmap focused on enabling the responsible, strategic, and effective adoption of Artificial Intelligence across academics, research, administration, and student capability development. Its broader objective is to prepare Christites to develop AI-focused competencies and become ethical leaders in AI-powered workplaces and global communities.",
  reasons: [
    {
      title: "Building Trust & Reputation",
      desc: "Strengthening CHRIST's reputation for forward-thinking innovation, attracting world-class students, faculty, doctoral researchers, and international collaborators.",
      icon: "ShieldCheck"
    },
    {
      title: "Graduate Employability",
      desc: "Developing standardized, industry-relevant AI literacy and competencies to prepare graduates for high-impact careers in AI-enabled workplaces.",
      icon: "GraduationCap"
    },
    {
      title: "Strategic Partnerships",
      desc: "Establishing a governed and responsible AI ecosystem that catalyzes deep industry co-innovation, cloud compute grants, and funded research consortia.",
      icon: "Network"
    },
    {
      title: "Operational Excellence",
      desc: "Deploying AI-assisted automation to streamline routine administrative processes, improve accuracy, accelerate decision-making, and liberate staff for high-value activities.",
      icon: "Zap"
    }
  ]
};

export const strategicPillars = [
  {
    id: "academics",
    number: "01",
    title: "Academics & Curriculum",
    subtitle: "Curriculum & Teaching-Learning Transformation",
    icon: "BookOpen",
    lead: "Integrate AI competencies systematically into programmes, curricula, teaching, and assessment.",
    initiatives: [
      "Include explicit AI competency within University Graduate Attributes (GA).",
      "Systematic curricular reviews for progressive AI integration across all academic departments.",
      "Revision of relevant Programme Outcomes (POs), Programme Specific Outcomes (PSOs), and Course Outcomes (COs).",
      "Development of university-level guidelines and departmental AI integration frameworks.",
      "Integration of AI in formative & summative assessments with faculty capacity-building.",
      "Deployment of the institutional Three-Tier Framework for AI in Teaching-Learning."
    ],
    framework: [
      {
        tier: "Tier 1",
        name: "Foundational AI Literacy",
        target: "Universal across all disciplines",
        desc: "Core understanding of AI principles, prompt engineering, critical evaluation, ethical boundaries, and generative AI literacy for every Christite.",
        skills: ["Prompting & Context Design", "AI Ethics & Academic Integrity", "Cognitive Bias Identification", "GenAI Productivity Tools"]
      },
      {
        tier: "Tier 2",
        name: "Applied AI Integration",
        target: "Discipline-specific application",
        desc: "Embedding domain-tuned AI tools into business, social sciences, humanities, law, and physical sciences to accelerate professional capability.",
        skills: ["Domain AI Workflows", "Data Analysis & Visualization", "Automated Case Analysis", "Computational Domain Modeling"]
      },
      {
        tier: "Tier 3",
        name: "AI Specialization",
        target: "Advanced AI & technical expertise",
        desc: "Deep engineering of foundational models, machine learning systems, robotics, computer vision, and specialized neural architectures.",
        skills: ["Transformer Fine-Tuning", "Autonomous Systems & ROS2", "Edge AI & Embedded TPU", "Advanced AI Research"]
      }
    ]
  },
  {
    id: "research",
    number: "02",
    title: "Research & Ethics",
    subtitle: "AI-Assisted & Responsible Research Ecosystem",
    icon: "FlaskConical",
    lead: "Establish responsible AI-assisted research practices, policies, auditing tools, and researcher capabilities.",
    initiatives: [
      "Finalisation and promulgation of the institutional AI Research Policy and Ethical Guidelines.",
      "Creation of an official University Master List of Approved AI Tools for research and thesis writing.",
      "Rigorous compliance auditing of AI platforms regarding data usage, data protection, and privacy guarantees.",
      "Specialized training workshops on 'AI in Research' for PhD scholars, post-docs, and faculty mentors.",
      "Guidelines on algorithmic transparency, citation of generative models, and intellectual property."
    ],
    resources: [
      { name: "AI Research Policy", desc: "Institutional guidelines on ethical AI adoption in scholarly publications." },
      { name: "Approved AI Tools Registry", desc: "Audited repository of privacy-compliant software for analysis and synthesis." },
      { name: "Ethical Guidelines & Citations", desc: "Protocols for disclosure, reproducibility, and human-in-the-loop validation." },
      { name: "Research Training & Fellowships", desc: "Workshops on PyTorch, literature synthesis, and patent disclosures." }
    ]
  },
  {
    id: "administration",
    number: "03",
    title: "Administration & Operations",
    subtitle: "Institutional Transformation & Automation",
    icon: "Cpu",
    lead: "Apply AI and automated decision intelligence to improve university operations, efficiency, and resource planning.",
    initiatives: [
      "Development of AI tools for academic workload and timetable management for HODs, Deans' Offices, and Academic Offices.",
      "Executive AI enablement and training for university administrative officers and directors.",
      "Systematic identification and pipeline automation of high-volume routine administrative workflows.",
      "Real-time institutional analytics dashboards supporting strategic university leadership decisions."
    ],
    priorityOffices: [
      { name: "Admissions Office", focus: "Automated candidate inquiry resolution, document verification, and multilingual applicant assistance." },
      { name: "Research Cell", focus: "Centralized grant proposal tracking, compliance checks, and scholar milestone automation." },
      { name: "IQAC", focus: "Internal Quality Assurance Cell automated data aggregation for NAAC, NIRF, and accreditation cycles." },
      { name: "CRP (Centre for Research-Projects)", focus: "Project lifecycle management, fund utilization auditing, and milestone telemetry." },
      { name: "International Affairs", focus: "Global student exchange matchmaking, visa advisory automation, and partner university tracking." }
    ]
  },
  {
    id: "upskilling",
    number: "04",
    title: "AI Capability Development",
    subtitle: "Continuous Learning & Upskilling",
    icon: "Users",
    lead: "Develop progressive AI competencies among students, faculty, academic leaders, and administrative personnel.",
    initiatives: [
      "Odd Semester: Intensive Agentic AI training for all final-year graduating students across all campuses.",
      "Comprehensive 'Train-the-Trainers' programme empowering core faculty champions in each department.",
      "Coordinated pan-campus delivery synchronizing Bangalore, Lavasa, and Delhi NCR learning schedules.",
      "Even Semester: Tiered AI training scaled to remaining undergraduate and postgraduate cohorts."
    ],
    tracks: [
      { group: "Students", detail: "Agentic AI workflows, portfolio capstones, prompt engineering, and employability credentials." },
      { group: "Faculty", detail: "Train-the-trainers pedagogy, AI-assisted curriculum authoring, and rubric design." },
      { group: "Researchers", detail: "Deep learning workflows, computational reproducibility, and grant proposal synthesis." },
      { group: "Academic Leaders", detail: "Strategic AI adoption, departmental roadmapping, and ethical governance." },
      { group: "Administrative Staff", detail: "Routine workflow automation, office productivity tools, and document processing." }
    ]
  }
];

export const workingGroupsData = {
  academics: {
    title: "Academics Strategic Pillar Working Group",
    desc: "Overseeing curriculum updates, Graduate Attributes embedding, and Three-Tier framework implementation.",
    members: [
      { name: "Dr Deepthi Das", campus: "Central Campus (Bengaluru)", role: "Pillar Convener - Curriculum Architecture" },
      { name: "Dr Aishwarya N", campus: "Bannerghatta Road (BGR) Campus", role: "Pillar Lead - Humanities & Social Integration" },
      { name: "Dr Sandhiya B", campus: "Kengeri Campus (Engineering)", role: "Pillar Lead - Technical & Engineering Outcomes" },
      { name: "Dr Shilpa Srivastava", campus: "Delhi NCR Campus", role: "Pillar Lead - Professional & Clinical Curriculum" },
      { name: "Dr Teena Jose", campus: "Yeshwanthpur Campus", role: "Pillar Lead - Business Analytics & Quantitative Studies" }
    ]
  },
  research: {
    title: "Research Strategic Pillar Working Group",
    desc: "Governing research policy, AI tool auditing, privacy compliance, and researcher workshops.",
    members: [
      { name: "Dr Helen K Joy", campus: "Central Campus (Bengaluru)", role: "Pillar Convener - Research Ethics & Compliance" },
      { name: "Dr Caxton Emerald", campus: "Central Campus (Bengaluru)", role: "Pillar Lead - Compute Tools & Tool Audits" },
      { name: "Dr Alwin Joseph", campus: "Lavasa Campus (Pune)", role: "Pillar Lead - Data Science & Planetary Modeling" },
      { name: "Dr Sandeep Kumar", campus: "Kengeri Campus (Engineering)", role: "Pillar Lead - Robotics & Intellectual Property" }
    ]
  },
  upskilling: {
    title: "Upskilling Strategic Pillar Working Group",
    desc: "Coordinating university-wide Agentic AI training, Train-the-Trainers, and tiered student programmes.",
    members: [
      { name: "Dr Rupali Wagh", campus: "Central Campus (Bengaluru)", role: "Pillar Convener - Student Capability Development" },
      { name: "Dr Dalwin Vinod K", campus: "Central Campus (Bengaluru)", role: "Pillar Lead - Train-the-Trainers Pedagogy" },
      { name: "Dr Suresh K", campus: "Central Campus (Bengaluru)", role: "Pillar Lead - Campus Sync & Infrastructure" },
      { name: "Dr Ashwini Patil", campus: "Central Campus (Bengaluru)", role: "Pillar Lead - Assessment & Credentialing" }
    ]
  },
  administration: {
    title: "Administration Strategic Pillar Working Group",
    desc: "Driving institutional automation, workload management tools, and administrative leader enablement.",
    members: [
      { name: "Dr Naived Eapen", campus: "Central Campus (Bengaluru)", role: "Pillar Convener - Institutional Automation" },
      { name: "Dr Syam Mohan", campus: "Central Campus (Bengaluru)", role: "Pillar Lead - Workload & Systems Engineering" },
      { name: "Dr Priya Stella M", campus: "Yeshwanthpur Campus", role: "Pillar Lead - Operational Intelligence & IQAC" },
      { name: "Dr Anand Rai", campus: "Bannerghatta Road (BGR) Campus", role: "Pillar Lead - Digital Systems & Campus Operations" }
    ]
  }
};

export const strategicOutcomes = [
  {
    area: "Academics",
    title: "Future-Ready Learning",
    desc: "AI-focused curriculum and modern teaching-learning practices enabling every student to develop authentic, certified AI competencies.",
    color: "#0284c7"
  },
  {
    area: "Research",
    title: "Ethical & Global Scholarship",
    desc: "AI-assisted, ethically governed, and globally competitive research initiatives while resolutely safeguarding academic integrity.",
    color: "#7c3aed"
  },
  {
    area: "Administration",
    title: "Operational Excellence",
    desc: "AI-driven automation, workload optimization, and data-informed decision-making supporting university agility.",
    color: "#b48a14"
  },
  {
    area: "Community",
    title: "Empowered Christites",
    desc: "Graduates, faculty, and scholars capable of ethical and visionary leadership in AI-powered workplaces and communities.",
    color: "#059669"
  }
];

export const strategicRoadmap = [
  {
    step: "01",
    title: "Benchmarking Leading AI Schools",
    desc: "Studying leading global AI institutions, governance models, and curricular standards to position CHRIST internationally."
  },
  {
    step: "02",
    title: "Specialized Laboratory Setup",
    desc: "Commissioning inter-campus physical and virtual GPU compute bays for foundational research and edge experimentation."
  },
  {
    step: "03",
    title: "Sustainable Operational Model",
    desc: "Establishing funded research frameworks, sponsored innovation cells, and value-accretive enterprise consultancy."
  },
  {
    step: "04",
    title: "Enterprise & Industry Alliances",
    desc: "Deepening partnerships with global technology leaders for compute grants, student internships, and joint intellectual property."
  },
  {
    step: "05",
    title: "Democratized Student Research",
    desc: "Providing all undergraduate and postgraduate researchers direct access to Center for AI compute clusters and publishing grants."
  }
];
