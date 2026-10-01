// ─── Navigation ─────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
  description?: string;
  icon?: string;
}

// ─── Brand & Specs ──────────────────────────────────────────
export type GalleryCategory = 'All' | 'Residential' | 'Commercial' | 'Capsule' | 'Interiors';

export interface GalleryProject {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Capsule' | 'Interiors';
  location: string;
  specs: string;
  stops: string;
  speed: string;
  capacity: string;
  image: string;
  description: string;
}

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface ElevatorService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  image: string;
  specs: ServiceSpec[];
  keyFeatures: string[];
}

export interface LeadFormData {
  fullName: string;
  phoneNumber: string;
  projectType: 'Residential' | 'Commercial' | 'Industrial' | 'AMC';
  totalFloors: string;
  message: string;
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

// ─── FAQ ────────────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
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

// ─── Trust Item ─────────────────────────────────────────────
export interface TrustItem {
  icon: string;
  title: string;
  description?: string;
}

