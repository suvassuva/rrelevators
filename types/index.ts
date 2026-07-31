// ─── Navigation ─────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
  description?: string;
  icon?: string;
}

// ─── Products ───────────────────────────────────────────────
export interface Product {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  capacity: string;
  speed: string;
  machineType: string;
  doorType: string;
  safetyFeatures: string[];
  applications: string[];
  features: string[];
  brochureUrl?: string;
}

// ─── Services ───────────────────────────────────────────────
export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image?: string;
}

// ─── Projects ───────────────────────────────────────────────
export interface Project {
  slug: string;
  title: string;
  description: string;
  category: 'commercial' | 'residential' | 'hospital' | 'hotel' | 'mall' | 'school';
  client: string;
  location: string;
  completionDate: string;
  elevatorType: string;
  images: string[];
  beforeImage?: string;
  afterImage?: string;
  testimonial?: Testimonial;
}

// ─── Testimonials ───────────────────────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  rating: number;
  image?: string;
}

// ─── Blog ───────────────────────────────────────────────────
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: Author;
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: number;
}

export interface Author {
  name: string;
  avatar: string;
  bio: string;
}

// ─── FAQ ────────────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

// ─── Career ─────────────────────────────────────────────────
export interface JobOpening {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  description: string;
  requirements: string[];
  responsibilities: string[];
  postedAt: string;
}

// ─── Contact Form ───────────────────────────────────────────
export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  company?: string;
  location?: string;
  requirement: string;
  message: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  company?: string;
  elevatorType: string;
  floors: number;
  location: string;
  message?: string;
}

// ─── Industry ───────────────────────────────────────────────
export interface Industry {
  name: string;
  icon: string;
  description: string;
}

// ─── Stats ──────────────────────────────────────────────────
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

// ─── Timeline Step ──────────────────────────────────────────
export interface TimelineStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

// ─── Client ─────────────────────────────────────────────────
export interface Client {
  name: string;
  logo: string;
}

// ─── Trust Item ─────────────────────────────────────────────
export interface TrustItem {
  icon: string;
  title: string;
  description?: string;
}
