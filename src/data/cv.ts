// Verbatim credentials data sourced from the formal CV document.
// Content is copied as-is; only the home street address is omitted (city/state kept).

export const CV_META = {
  name: "Omoshola Owolabi",
  descriptor:
    "Data scientist & AI/ML researcher · IEEE Senior Member · AI governance and explainable AI for regulated industries",
  location: "Durham, NC",
  email: "owolabi.omoshola@outlook.com",
};

// Anchor index rendered at the top of the page.
export const SECTIONS = [
  { id: "experience", label: "Work Experience" },
  { id: "education", label: "Education" },
  { id: "leadership", label: "Leadership in AI Governance & Ethics" },
  { id: "standards", label: "International Standards Development" },
  { id: "policy", label: "Policy Engagement & Government Initiatives" },
  { id: "certifications", label: "Certifications" },
  { id: "presentations", label: "Presentations" },
  { id: "recognition", label: "Professional Recognition & Membership" },
  { id: "publications", label: "Peer-Reviewed Publications" },
  { id: "skills", label: "Technical Skills" },
] as const;

export interface Experience {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    role: "Kinaxis Subject Matter Expert - Supply Chain",
    org: "IBM",
    period: "September 2024 – Present",
    bullets: [
      "Develop AI-enhanced predictive analytics systems using Maestro and Kinaxis Supply AI to detect supply chain vulnerabilities and predict disruptions in real-time, achieving a 30% reduction in planning cycle times and enabling proactive risk management across IBM's global operations through transparent, data-driven decision-making frameworks.",
      "Engineered scalable SQL/DB2 solutions and automated analytics dashboards serving 200+ decision-makers that provide real-time visibility into inventory risks and operational vulnerabilities, reducing reporting time by 65% and enhancing supply chain resilience through explainable, data-driven insights that support informed strategic decisions.",
    ],
  },
  {
    role: "Data Scientist",
    org: "Volvo Financial Services",
    period: "November 2023 – September 2024",
    bullets: [
      "Led development of an explainable machine learning credit risk intelligence system processing 200,000+ applications, integrating real-time economic indicators with transparent AI architectures to detect default vulnerabilities, predict financial disruptions, and enable informed lending decisions that reduced default rates by 15% while expanding access to underserved populations.",
      "Engineered privacy-preserving synthetic data generator using Gaussian Copula and GANs that enables secure AI model testing with 100% anonymization and full regulatory compliance, addressing the critical tension between data utility and privacy protection while maintaining statistical validity for risk prediction systems.",
    ],
  },
  {
    role: "Supply Chain Analyst",
    org: "Mikano International Limited",
    period: "July 2020 – Dec 2022",
    bullets: [
      "Developed predictive analytics models using time series forecasting (ARIMA, neural networks) and machine learning-based supplier risk scoring systems to detect supply chain vulnerabilities and predict disruptions, reducing stockouts by 22% and generating $2M in cost savings through data-driven decision-making that enhanced operational resilience during global supply chain crises.",
    ],
  },
  {
    role: "Integrated Corporate Services Limited",
    org: "",
    period: "Feb 2014 – June 2019",
    bullets: [
      "Implemented automated compliance verification systems for international trade documentation that enhanced risk detection accuracy by 15% and reduced processing time by 20%, while managing $100M trade finance portfolio with zero regulatory infractions across three Central Bank audits through systematic risk assessment frameworks that enabled informed decision-making in complex cross-border transactions.",
    ],
  },
];

export interface Education {
  school: string;
  credential: string;
  location: string;
  date: string;
}

export const EDUCATION: Education[] = [
  {
    school: "Carolina University",
    credential: "Master of Science in Data Science.",
    location: "Winston Salem, NC",
    date: "August 2024",
  },
  {
    school: "Joseph Ayo Babalola University",
    credential: "B.Sc. Business Administration.",
    location: "",
    date: "July 2016",
  },
];

export interface LeadershipRole {
  role: string;
  venue: string;
  detail: string;
}

export const LEADERSHIP: LeadershipRole[] = [
  {
    role: "Ethics Reviewer",
    venue: "NeurIPS 2025 Conference – Datasets and Benchmarks Track",
    detail:
      "Selected for the world's premier machine learning conference to evaluate cutting-edge AI research for privacy implications, fairness concerns, and societal impact, including trajectory foundation models and code generation systems",
  },
  {
    role: "Conference Reviewer",
    venue: "DeepLearningIndaba 2025 (Africa's Premier ML Conference)",
    detail:
      "Assessed research on explainable AI, federated learning for fraud detection, and financial AI systems with a focus on ethical deployment in developing economies",
  },
  {
    role: "Conference Reviewer",
    venue:
      "IEEE 5th International Conference on Computing and Machine Intelligence (ICMI 2026)",
    detail:
      "King Faisal University, Saudi Arabia - Evaluated AI applications across medical diagnostics, social optimization, and human-AI collaboration frameworks",
  },
  {
    role: "Conference Reviewer",
    venue: "2nd IEOM 2025 World Congress, University of Windsor, Canada",
    detail:
      "Evaluated research on intelligent IoT supply chains, sustainability systems, and infrastructure development for diverse economic contexts",
  },
  {
    role: "Conference Reviewer",
    venue:
      "4th IEEE International Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation (IATMSI)",
    detail: "",
  },
  {
    role: "Conference Reviewer",
    venue:
      "2025 International Conference on Signal Processing, Computation, Electronics, Power and Telecommunication",
    detail: "",
  },
  {
    role: "Judge",
    venue: "HackNC 2025, University of North Carolina at Chapel Hill",
    detail:
      "Evaluated participants innovations on technical merit, real-world impact, and ethical design considerations",
  },
  {
    role: "Judge",
    venue:
      "TrackShift Innovation Challenge 2025, Smart File Transfer System track at the TrackShift Innovation Challenge – TrackShift.in, an initiative by Mphasis F1 Foundation in association with the MoneyGram Haas F1 Team, aimed at driving innovation through real-world problem solving and industry collaboration",
    detail:
      "Evaluated participants innovations on technical merit, real-world impact, and ethical design considerations, and share valuable insights that will inspire the next generation of tech leaders",
  },
  {
    role: "Judge",
    venue:
      "American Statistical Association Statistics Project Competition (Grades 7-12)",
    detail:
      "Primary evaluator for 30+ nationwide projects specializing in financial data analysis and economic applications",
  },
  {
    role: "Judge",
    venue: "ASA Undergraduate Statistics Class Project Competition (USCLAP)",
    detail:
      "Expert evaluation of undergraduate statistical methodology and research quality",
  },
  {
    role: "Journal Peer Reviewer",
    venue: "Journal of Data Analysis and Information Processing (JDAIP)",
    detail:
      "Evaluate research on LLM-powered enterprise intelligence, healthcare big data, and cloud computing optimization",
  },
  {
    role: "Mentor",
    venue: "SciPy Conference 2025 Mentorship Program",
    detail:
      "Guide emerging data scientists (mentee: Jennifer Iloekwe) in advanced analytics and ethical AI implementation.",
  },
];

export interface Committee {
  title: string;
  committee: string;
  role?: string;
  duration: string;
  detail: string;
}

export const STANDARDS = {
  intro: {
    title: "IEEE Standards Technical Expert | Multiple Committees",
    period: "2025 – Present",
    detail:
      "Contributing technical expertise to IEEE international standards development across artificial intelligence ethics, financial services AI, cybersecurity, and risk management. Participate in working group content development and provide expert commentary on standards governing AI deployment in regulated industries, supply chain security, and privacy-preserving systems.",
  },
  workingGroup: {
    label: "Working Group Participation (Active Content Development)",
    items: [
      {
        title: "IEEE P7999 Series - Artificial Intelligence Ethics Oversight Standards",
        committee:
          "IEEE Computer Society Artificial Intelligence Standards Committee (C/AISC)",
        role: "AI Ethics Oversight Working Group Member",
        duration: "December 2025 – Present",
        detail:
          "Contributing to the development of a technical standards framework for AI ethics governance, oversight mechanisms, and ethical deployment requirements. Participating in monthly working group meetings and subgroup activities, developing standards content for ethical AI implementation across industries.",
      },
    ] as Committee[],
  },
  entityBallot: {
    label: "Entity Ballot Participation (IBM Corporation-Affiliated)",
    items: [
      {
        title:
          "IEEE P3826 - Technical Requirements for Large Language Models in Financial Applications",
        committee:
          "IEEE Computer Technical Services Digital Finance Standards Committee (CTS/DFESC)",
        duration: "October 2025 – Present",
        detail:
          "Contributing expertise in ethical AI frameworks, explainability requirements, and regulatory compliance for financial LLMs",
      },
      {
        title:
          "IEEE P3829 - Privacy-Preserving Algorithm Trading Framework for Financial Services",
        committee:
          "IEEE Consumer Technology Society Digital Finance Standards Committee (CTS/DFESC)",
        duration: "December 2025 – Present",
        detail:
          "Contributing expertise in privacy-preserving computation, explainable AI frameworks for financial services, regulatory compliance integration (GDPR, data protection laws), and blockchain-based algorithm governance mechanisms",
      },
      {
        title:
          "IEEE P3549 - Inference Optimization Systems for Large Language Models",
        committee:
          "IEEE Computer Society Artificial Intelligence Standards Committee (C/AISC)",
        duration: "October 2025 – Present",
        detail:
          "Providing technical guidance on performance optimization, resource efficiency, and real-time inference requirements",
      },
    ] as Committee[],
  },
  individualBallot: {
    label: "Individual Ballot Participation (Research Classification)",
    items: [
      {
        title:
          "IEEE P3390 - Security Management Framework for Open Source Software Supply Chain",
        committee:
          "IEEE Computer Society Cybersecurity and Privacy Standards Committee (C/CPSC)",
        duration: "October 2025 – Present",
        detail:
          "Contributing expertise on AI-powered risk intelligence frameworks and supply chain visibility",
      },
      {
        title: "IEEE P3409 - Zero Trust Security Framework",
        committee:
          "IEEE Computer Society Cybersecurity and Privacy Standards Committee (C/CPSC)",
        duration: "February 2026 – Present",
        detail:
          "Contributing technical commentary on AI/ML system security requirements within zero trust architecture for financial services and critical infrastructure, integrating regulatory compliance frameworks with zero trust security controls",
      },
      {
        title:
          "IEEE P29148 - Systems and Software Engineering Life Cycle Processes",
        committee:
          "IEEE Computer Society Software & Systems Engineering Standards Committee (C/S2ESC)",
        duration: "October 2025 – Present",
        detail:
          "Providing expertise on AI system requirements in regulated industries and continuous validation",
      },
    ] as Committee[],
  },
};

export interface PolicyEntry {
  role: string;
  body: string;
  year: string;
  summary: string;
  contributions: string[];
}

export const POLICY: PolicyEntry[] = [
  {
    role: "Federal AI Policy Contributor",
    body: "White House Office of Science and Technology Policy (OSTP)",
    year: "2025",
    summary:
      "Submitted substantive technical commentary to OSTP Request for Information on AI regulatory reform (Docket ID: OSTP-TECH-2025-0067), identifying specific regulatory barriers in Federal Reserve guidance that hinder deployment of explainable AI systems in financial services.",
    contributions: [
      "Identified Federal Reserve SR 11-7 documentation requirements designed for single-algorithm models that prevent the deployment of superior ensemble AI methods despite mathematical explainability",
      "Identified Federal Reserve SR 23-4 third-party relationship guidance creating barriers to integrating Federal Reserve FRED API and other government data sources",
      "Proposed specific administrative actions, including supplemental supervisory letters recognizing SHAP/LIME explainability, clarification excluding federal data APIs from vendor management requirements, and interagency coordination",
      "Quantified economic impact: 10-15% credit loss reduction across $18.04 trillion household debt market through enhanced risk assessment",
    ],
  },
  {
    role: "Federal AI Export Strategy Contributor",
    body: "U.S. Department of Commerce – American AI Exports Program",
    year: "2025",
    summary:
      "Submitted substantive technical commentary to the Department of Commerce's Federal Register Request for Information on the American AI Exports Program (90 FR 48726), providing expert guidance on strengthening U.S. competitiveness in exporting explainable, regulatory-compliant AI systems for financial services and supply chain resilience. Identified critical gaps in current AI export frameworks and proposed a U.S. strategy centered on transparency, security, and regulatory alignment to reduce global dependence on adversary AI technologies.",
    contributions: [
      "Identified the absence of a regulatory-compliance layer in the U.S. AI tech stack and recommended embedding Basel III/IV, GDPR-aligned privacy, and SHAP/LIME explainability to enhance global trust in American AI exports.",
      "Demonstrated how opaque foreign AI systems pose national-security and financial-stability risks, offering U.S. alternatives built on transparency, interpretability, and secure data governance.",
      "Proposed export-ready AI frameworks integrating economic intelligence, risk-scoring engines, and explainable decision systems—highlighting CRCreditum as a reference architecture for compliant financial AI exports.",
      "Recommended harmonization with IEEE international AI standards to ensure American technical approaches become embedded in global AI regulation and adoption.",
      "Outlined strategies to strengthen allied nations' financial and supply-chain infrastructures while reducing dependency on non-aligned AI technologies.",
    ],
  },
];

export const CERTIFICATIONS: string[] = [
  "Google Data Analytics Professional Certificate (2022) - Data cleaning, analysis, visualization, R, SQL, Tableau",
  "The Federal Polytechnic, Ilaro | Secretarial, Office Technology & Management Diploma. August 2012",
  "Financial Modeling & Valuation Analyst (FMVA) | Corporate Finance Institute (2022) - Financial modeling, valuation, scenario analysis",
];

export interface Presentation {
  title: string;
  detail: string;
}

export const PRESENTATIONS: Presentation[] = [
  {
    title: "Leveraging AI and Learning Analytics to Enhance Educational Outcomes",
    detail:
      "Presented at the 11th International Workshop on Applied Probability (IWAP 2025) – NC State University, August 2024",
  },
  {
    title: "Credit Card Issuer Market Share Analysis in the Educational Sector",
    detail:
      "Presented to the Data Science Department of Carolina University, Winston-Salem, August 2024",
  },
  {
    title:
      "Enhancing Credit Risk Evaluation in Automotive Finance: A Machine Learning Approach",
    detail:
      "Presented as a Capstone to Volvo Financial Services and the Data Science Department of Carolina University, Winston-Salem, Greensboro, NC, April 2024",
  },
];

export const RECOGNITION = {
  title: "IEEE Senior Member | 2025",
  body: "Elevated in recognition of significant contributions to the profession; eligible for executive volunteer positions and review panel service. Active memberships: IEEE Computational Intelligence Society, IEEE Consumer Technology Society, IEEE Technology and Engineering Management Society, IEEE Young Professionals",
};

export interface Publication {
  title: string;
  venue: string;
  note: string;
}

export const PUBLICATIONS = {
  leadAuthorLabel: "Lead Author – Journal Articles:",
  items: [
    {
      title: "Ethical Implications of AI Adoption in Financial Decision Making",
      venue: "Computer and Information Science, April 2024 | DOI: 10.5539/cis.v17n1p49",
      note: "Highest-cited work (76 citations) - Developed a comprehensive ethical framework for financial AI addressing algorithmic fairness, transparency, and regulatory compliance",
    },
    {
      title:
        "Comparative Analysis of Machine Learning Models for Customer Churn Prediction in U.S. Banking",
      venue: "Journal of Data Analysis and Information Processing, Aug 2024",
      note: "Integrated real-time Federal Reserve economic indicators demonstrating 8%+ accuracy improvements",
    },
    {
      title:
        "Integration of Decentralized Finance (DeFi) in U.S. Supply Chain Finance",
      venue: "International Journal of Computer Science and Information Technology, June 2024",
      note: "Evaluated blockchain applications for supply chain transparency, addressing regulatory frameworks",
    },
    {
      title:
        "Blockchain-Based System for Secure and Efficient Cross-Border Remittances",
      venue: "2024",
      note: "Proposed secure SWIFT alternative integrating cryptographic protocols with real-time fraud detection",
    },
    {
      title: "Network Analysis for Systemic Risk Assessment in Supply Chains",
      venue: "2025",
      note: 'Introduced "too central to fail" supplier concept with stress testing methodologies for national resilience',
    },
  ] as Publication[],
  impact:
    "Research Impact: 101 citations | h-index: 3-5 | 7,100+ reads (ResearchGate) | Research Interest Score: 138.3",
};

export interface SkillGroup {
  group: string;
  items: string;
}

export const SKILLS: SkillGroup[] = [
  {
    group: "AI & Machine Learning",
    items:
      "TensorFlow, PyTorch, Scikit-learn, XGBoost, LightGBM, SHAP, CNNs, RNNs, Transformers, Explainable AI, Federated Learning",
  },
  {
    group: "Programming & Analytics",
    items: "Python, R, SQL, PySpark, SAS, VBA, Databricks",
  },
  {
    group: "Blockchain & Security",
    items:
      "Ethereum, Hyperledger Fabric, Solidity, Elliptic Curve Cryptography, Anomaly Detection",
  },
  {
    group: "Supply Chain & Big Data",
    items:
      "Kinaxis RapidResponse, Hadoop, Spark, SQL/NoSQL Databases, Time Series Forecasting (ARIMA, Prophet)",
  },
  {
    group: "Data Visualization & BI",
    items: "Tableau, Power BI, Matplotlib, Seaborn",
  },
  {
    group: "Cloud Platforms",
    items: "AWS (SageMaker, S3, EC2), Azure ML, Google Cloud Platform",
  },
];
