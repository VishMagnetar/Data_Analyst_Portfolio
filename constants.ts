import { Project, EducationItem, CertificationItem, Skill } from './types';
import { LayoutTemplate, Wrench, Globe, GraduationCap } from 'lucide-react';

// Make sure to place your image as 'vishal-mankar.jpg' in the public/root directory
export const PROFILE_IMAGE = "./vishal-mankar.jpg";
export const RESUME_URL = "./VishalMankar-Resume.pdf";

// Get your free access key from https://web3forms.com/
export const WEB3FORMS_ACCESS_KEY = "3f1c1221-e5bf-43e2-88b4-c9b723eefa7f";

export const SOCIAL_LINKS = {
  email: "mailto:mankarvishal28@gmail.com",
  linkedin: "https://www.linkedin.com/in/vishalmankar12123",
  github: "https://github.com/VishMagnetar",
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Sales Performance Analysis Dashboard',
    shortDesc: 'Designed an automated Power BI dashboard to visualize regional sales performance, identifying key growth areas.',
    problem: 'The business lacked a centralized view of sales performance, leading to inefficient tracking across regions.',
    approach: [
      'Cleaned and structured raw sales data for analysis readiness',
      'Optimized SQL queries to extract key performance metrics',
      'Built an interactive Power BI dashboard for real-time reporting'
    ],
    outcome: [
      'Pinpointed top-performing regions and high-growth products',
      'Flagged underperforming categories to support inventory decisions',
      'Enhanced visibility of monthly sales trends for better forecasting'
    ],
    tools: ['SQL', 'Power BI', 'Excel'],
    link: '#',
    documentation: '',
    aiDescription: 'AI-assisted SQL query optimization and DAX formula refinement.',
    featured: true,
  },
  {
    id: '2',
    title: 'Customer Data Analysis',
    shortDesc: 'Performed exploratory data analysis on customer behavior to drive targeted marketing strategies.',
    problem: 'Fragmented customer data made it difficult to identify purchasing patterns and profitable segments.',
    approach: [
      'Automated data cleaning processes using Python (Pandas)',
      'Conducted in-depth exploratory analysis to uncover behavioral trends',
      'Visualized customer segments to support strategic planning'
    ],
    outcome: [
      'Defined distinct customer segments for personalized engagement',
      'Identified recurring purchase patterns to boost retention',
      'Delivered actionable insights for targeted marketing campaigns'
    ],
    tools: ['Python', 'Excel'],
    link: '#',
    documentation: '',
    aiDescription: 'AI-assisted data cleaning script generation and clustering validation.',
    featured: true,
  },
  {
    id: '3',
    title: 'DataGuardian',
    shortDesc: 'Developed a decision support system to validate data quality and bias before strategic implementation.',
    problem: 'Teams often make business decisions based on dashboards and metrics without verifying whether the underlying data is fresh, complete, unbiased, or appropriate for the decision context, leading to confident but incorrect outcomes.',
    approach: [
      'Validated data freshness, sample adequacy, bias, and metric applicability before decisions',
      'Implemented rule-based checks to allow, warn, or block decisions based on risk level',
      'Enforced justification and confidence penalties for risky decision overrides',
      'Logged complete decision flow for traceability and accountability'
    ],
    outcome: [
      'Reduced risk of decisions made on misleading or incomplete data',
      'Improved accountability through enforced warnings and audit logs',
      'Established clear traceability from data input to final decision outcome'
    ],
    tools: ['Data Quality Validation', 'Analytics Logic', 'Decision Framework Design', 'Automation', 'AI-Assisted Decision Support'],
    link: 'https://github.com/VishMagnetar/DataGuardian',
    github: 'https://github.com/VishMagnetar/DataGuardian',
    documentation: './DataGuardian-documentation.pdf',
    aiDescription: 'AI-assisted decision rule refinement and validation logic verification.',
    featured: true,
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: '1',
    degree: 'Bachelor of Computer Applications (BCA) | 6.9 CGPA',
    institution: 'Shankarlal Khandelwal College Akola / SGBAU',
    year: '2022 - 25',
  },
  {
    id: '2',
    degree: 'Higher Secondary Certificate (HSC) | 89.67%',
    institution: 'Maharashtra State Board',
    year: '2021',
    details: [
      { subject: 'Marathi', score: '88' },
      { subject: 'English', score: '88' },
      { subject: 'Mathematics & Statistics', score: '89' },
      { subject: 'Physics, Chemistry & Biology', score: '91' },
      { subject: 'Total', score: '538 / 600 (89.67%)' }
    ]
  },
  {
    id: '3',
    degree: 'Secondary School Certificate (SSC) | 76%',
    institution: 'Maharashtra State Board',
    year: '2019',
    details: [
      { subject: 'Marathi (First Language)', score: '63 / 100' },
      { subject: 'Hindi / Sanskrit', score: '87 / 100' },
      { subject: 'English', score: '73 / 100' },
      { subject: 'Mathematics', score: '71 / 100' },
      { subject: 'Science & Technology', score: '67 / 100' },
      { subject: 'Social Science', score: '79 / 100' },
      { subject: 'Total', score: '380 / 500 (76%)' }
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: '1',
    name: 'Python for Machine Learning',
    issuer: 'Great Learning Academy',
    year: 'Feb 2024',
    link: './gl pythonV.pdf',
  },
  {
    id: '2',
    name: 'SQL and Relational Databases 101',
    issuer: 'Cognitive Class (IBM)',
    year: 'Issued',
    link: './IBM DB0101EN Certificate _ Cognitive Class.pdf',
  },
  {
    id: '3',
    name: 'Machine Learning with Python',
    issuer: 'Cognitive Class (IBM)',
    year: 'Issued',
    link: './IBM ML0101EN Certificate _ Cognitive Class.pdf',
  },
  {
    id: '4',
    name: 'Python 101 for Data Science',
    issuer: 'Cognitive Class (IBM)',
    year: 'Issued',
    link: './IBM PY0101EN Certificate _ Cognitive Class.pdf',
  }
];

export const SKILLS: Skill[] = [
  // Core Data & Analytics
  { name: 'Data Cleaning & Validation', category: 'core' },
  { name: 'Exploratory Analysis (EDA)', category: 'core' },
  { name: 'Statistical Analysis', category: 'core' },
  { name: 'Business Intelligence', category: 'core' },
  { name: 'Interactive Visualization', category: 'core' },

  // AI-Assisted & Automation
  { name: 'AI-Assisted Analytics', category: 'ai-automation' },
  { name: 'Automated Data Workflows', category: 'ai-automation' },
  { name: 'Python (Pandas & Scripting)', category: 'ai-automation' },

  // Tools & Platforms
  { name: 'SQL (Query Optimization)', category: 'tool' },
  { name: 'Power BI (Dashboards)', category: 'tool' },
  { name: 'Excel (Advanced Analysis)', category: 'tool' },
  { name: 'Database Management', category: 'tool' },
  { name: 'Version Control (GitHub)', category: 'tool' },
];

export const HIGHLIGHTS = [
  { label: 'Projects', icon: LayoutTemplate, value: '2+' },
  { label: 'Tools', icon: Wrench, value: '5+' },
  { label: 'Focus', icon: Globe, value: 'Data Ops' },
  { label: 'Education', icon: GraduationCap, value: 'BCA' },
];

export const EXPERIENCE_POINTS = [
  "Hands-on experience executing end-to-end data analysis projects",
  "Proficient in cleaning complex datasets, building automated dashboards, and deriving business value",
  "Skilled in the complete data analysis lifecycle, from extraction to visualization"
];

export const AI_PRACTICE_POINTS = [
  "Accelerating data exploration and initial validation checks",
  "Refining SQL queries and Python scripts for optimization",
  "Automating routine reporting and documentation workflows",
  "Generating preliminary insights with manual verification",
  "Enhancing productivity while ensuring analytical accuracy"
];