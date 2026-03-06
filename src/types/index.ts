// types/index.ts — shared TypeScript interfaces & types

export interface Personal {
  name: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  yearsExp: string;
}

export type SkillCategory =
  | "frontend"
  | "performance"
  | "testing"
  | "tools"
  | "backend";

export interface Skill {
  label: string;
  emoji: string;
  skills: string[];
  description: string;
  colSpan: string;
}

export interface Project {
  title: string;
  company: string;
  size: "large" | "medium";
  description: string;
  tags: string[];
  link: string | null;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  stack: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  icon: string;
  detail: string;
}

export interface Value {
  title: string;
  quote: string;
  icon: string;
}

export interface Blog {
  title: string;
  tag: string;
  snippet: string;
}

export interface Tokens {
  isDark: boolean;
  bg: string;
  card: string;
  cardSoft: string;
  blogCard: string;
  heading: string;
  subtext: string;
  muted: string;
  tag: string;
  navBg: string;
  btnIcon: string;
  accent: string;
  accentOutline: string;
  vibeBg: string;
  tlLine: string;
  tlDot: string;
  quoteBar: string;
  tabActive: string;
  tabIdle: string;
  tape: string;
  commitHigh: string;
  commitMid: string;
  commitLow: string;
  commitEmpty: string;
  divider: string;
}
