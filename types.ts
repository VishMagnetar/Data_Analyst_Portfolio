export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  problem: string;
  approach?: string[];
  outcome?: string[];
  tools: string[];
  link?: string;
  github?: string;
  documentation?: string;
  aiDescription?: string;
  featured: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  details?: { subject: string; score: string }[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year: string;
  link?: string;
}

export interface Skill {
  name: string;
  category: 'technical' | 'business' | 'tool' | 'core' | 'ai-automation';
}

export interface NavLink {
  label: string;
  path: string;
}