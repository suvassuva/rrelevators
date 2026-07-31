import type { NavLink, TrustItem, Stat, TimelineStep, FAQItem } from '@/types';

// ─── Site Metadata ──────────────────────────────────────────
export const SITE_NAME = 'RRL Elevators';
export const SITE_TAGLINE = 'Engineering Vertical Mobility';
export const SITE_DESCRIPTION =
  'Premium Passenger, Hospital, Freight, Home & Commercial Elevator Solutions. Built for Safety & Performance with 20+ years of experience.';
export const SITE_URL = 'https://rrelevators.com';

// ─── Contact Info ───────────────────────────────────────────
export const CONTACT = {
  phone: '+91 98765 43210',
  phoneRaw: '+919876543210',
  altPhone: '+91 98765 43211',
  email: 'info@rrelevators.com',
  salesEmail: 'sales@rrelevators.com',
  whatsapp: '919876543210',
  address: '123, Industrial Area, Phase II, Chandigarh, India - 160002',
  workingHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
  emergencyHours: '24/7 Emergency Support',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0!2d76.78!3d30.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQzJzQ4LjAiTiA3NsKwNDYnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890',
};

// ─── Social Links ───────────────────────────────────────────
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/rrelevators',
  instagram: 'https://instagram.com/rrelevators',
  linkedin: 'https://linkedin.com/company/rrelevators',
  twitter: 'https://twitter.com/rrelevators',
  youtube: 'https://youtube.com/@rrelevators',
};

// ─── Navigation ─────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Products',
    href: '/products',
    children: [
      {
        label: 'Passenger Elevators',
        href: '/products/passenger-elevators',
        description: 'Smooth, silent rides for commercial & residential buildings',
      },
      {
        label: 'Hospital Elevators',
        href: '/products/hospital-elevators',
        description: 'Spacious cabins designed for stretchers & medical equipment',
      },
      {
        label: 'Home Elevators',
        href: '/products/home-elevators',
        description: 'Compact, elegant lifts for luxury residences',
      },
      {
        label: 'Freight Elevators',
        href: '/products/freight-elevators',
        description: 'Heavy-duty lifts for warehouses & factories',
      },
      {
        label: 'Capsule Elevators',
        href: '/products/capsule-elevators',
        description: 'Panoramic glass lifts for malls & hotels',
      },
      {
        label: 'MRL Elevators',
        href: '/products/mrl-elevators',
        description: 'Machine-room-less elevators saving space & energy',
      },
      {
        label: 'Hydraulic Elevators',
        href: '/products/hydraulic-elevators',
        description: 'Low-rise lifts with smooth hydraulic operation',
      },
      {
        label: 'Escalators & Moving Walks',
        href: '/products/escalators',
        description: 'High-traffic vertical & horizontal transit solutions',
      },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Installation',
        href: '/services#installation',
        description: 'End-to-end elevator installation services',
      },
      {
        label: 'AMC',
        href: '/services#amc',
        description: 'Annual maintenance contracts for worry-free operation',
      },
      {
        label: 'Modernization',
        href: '/services#modernization',
        description: 'Upgrade old elevators with modern technology',
      },
      {
        label: 'Repair',
        href: '/services#repair',
        description: 'Fast, reliable elevator repair services',
      },
      {
        label: 'Emergency Support',
        href: '/services#emergency',
        description: '24/7 emergency breakdown assistance',
      },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

// ─── Trust Items ────────────────────────────────────────────
export const TRUST_ITEMS: TrustItem[] = [
  { icon: 'ShieldCheck', title: 'ISO Certified', description: 'ISO 9001:2015 Certified' },
  { icon: 'HardHat', title: 'Expert Engineers', description: '50+ Certified Professionals' },
  { icon: 'Gem', title: 'Premium Materials', description: 'Highest Quality Components' },
  { icon: 'FileCheck', title: 'AMC Support', description: 'Comprehensive Maintenance' },
  { icon: 'Siren', title: 'Emergency Service', description: '24/7 Rapid Response' },
  { icon: 'Award', title: 'Warranty', description: 'Up to 5 Year Warranty' },
];

// ─── Hero Stats ─────────────────────────────────────────────
export const HERO_STATS: Stat[] = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 24, suffix: '/7', label: 'Support Available' },
];

// ─── Counter Stats ──────────────────────────────────────────
export const COUNTER_STATS: Stat[] = [
  { value: 20, suffix: '+', label: 'Years of Experience' },
  { value: 1200, suffix: '+', label: 'Installations' },
  { value: 250, suffix: '+', label: 'Corporate Clients' },
  { value: 99, suffix: '%', label: 'Customer Satisfaction' },
];

// ─── Installation Process ───────────────────────────────────
export const INSTALLATION_STEPS: TimelineStep[] = [
  { step: 1, title: 'Consultation', description: 'Understanding your requirements and providing expert advice', icon: 'MessageSquare' },
  { step: 2, title: 'Site Inspection', description: 'Thorough assessment of the building structure and site conditions', icon: 'Search' },
  { step: 3, title: 'Design', description: 'Custom elevator design tailored to your specifications', icon: 'PenTool' },
  { step: 4, title: 'Manufacturing', description: 'Precision engineering with premium components', icon: 'Factory' },
  { step: 5, title: 'Installation', description: 'Professional installation by certified technicians', icon: 'Wrench' },
  { step: 6, title: 'Testing', description: 'Rigorous safety testing and quality assurance', icon: 'CheckCircle' },
  { step: 7, title: 'Handover', description: 'Complete documentation and training for your team', icon: 'HandshakeIcon' },
  { step: 8, title: 'AMC', description: 'Ongoing maintenance and support for long-term performance', icon: 'HeartHandshake' },
];

// ─── Home FAQ ───────────────────────────────────────────────
export const HOME_FAQ: FAQItem[] = [
  {
    question: 'How long does a typical elevator installation take?',
    answer:
      'A standard elevator installation takes 8-12 weeks from manufacturing to handover, depending on the type and building requirements. Home elevators may take 4-6 weeks, while large commercial projects can take up to 16 weeks.',
  },
  {
    question: 'What safety features come standard with your elevators?',
    answer:
      'All our elevators include emergency braking systems, overload sensors, battery-powered lowering during power failures, intercom systems, fire-rated doors, and CCTV-ready cabins. We exceed all IS/ISO safety standards.',
  },
  {
    question: 'Do you provide Annual Maintenance Contracts (AMC)?',
    answer:
      'Yes, we offer three tiers of AMC plans — Basic, Standard, and Premium. All plans include regular inspections, priority response times, and genuine spare parts. Our Premium plan includes 24/7 emergency support.',
  },
  {
    question: 'What types of buildings can you install elevators in?',
    answer:
      'We install elevators in all types of buildings — residential homes, apartments, commercial offices, hospitals, hotels, shopping malls, factories, airports, metro stations, and educational institutions.',
  },
  {
    question: 'Can you modernize an existing old elevator?',
    answer:
      'Absolutely. Our modernization service upgrades your existing elevator with the latest technology — new controllers, energy-efficient motors, modern cabin interiors, and enhanced safety features — often without major structural changes.',
  },
  {
    question: 'What warranty do you provide?',
    answer:
      'We provide up to 5 years warranty on our elevator systems, covering all major components. Extended warranty options are also available through our AMC plans.',
  },
];

// ─── Industries ─────────────────────────────────────────────
export const INDUSTRIES = [
  { name: 'Residential', icon: 'Home', description: 'Luxury homes & apartments' },
  { name: 'Commercial', icon: 'Building2', description: 'Offices & business complexes' },
  { name: 'Hospital', icon: 'Hospital', description: 'Healthcare facilities' },
  { name: 'Hotels', icon: 'Hotel', description: 'Hospitality & resorts' },
  { name: 'Airports', icon: 'Plane', description: 'Aviation infrastructure' },
  { name: 'Metro', icon: 'TrainFront', description: 'Public transit systems' },
  { name: 'Shopping Malls', icon: 'ShoppingBag', description: 'Retail & entertainment' },
  { name: 'Factories', icon: 'Factory', description: 'Industrial & manufacturing' },
  { name: 'Educational', icon: 'GraduationCap', description: 'Schools & universities' },
];

// ─── Services (Home Grid) ───────────────────────────────────
export const HOME_SERVICES = [
  {
    title: 'Installation',
    description: 'End-to-end elevator installation with precision engineering and certified technicians.',
    icon: 'Wrench',
  },
  {
    title: 'Maintenance',
    description: 'Comprehensive AMC plans ensuring peak performance and safety compliance.',
    icon: 'Settings',
  },
  {
    title: 'Repair',
    description: 'Fast, reliable repair services with genuine spare parts and expert diagnostics.',
    icon: 'Hammer',
  },
  {
    title: 'Modernization',
    description: 'Upgrade aging elevators with cutting-edge technology and modern aesthetics.',
    icon: 'RefreshCw',
  },
  {
    title: 'Consultation',
    description: 'Expert advice on elevator selection, planning, and compliance for your project.',
    icon: 'MessageSquare',
  },
  {
    title: 'Inspection',
    description: 'Thorough safety inspections and compliance audits by certified engineers.',
    icon: 'ClipboardCheck',
  },
];

// ─── Products (Home Showcase) ───────────────────────────────
export const HOME_PRODUCTS = [
  {
    slug: 'passenger-elevators',
    name: 'Passenger Elevator',
    tagline: 'Smooth & Silent Rides',
    capacity: '6-20 Persons',
    speed: '1.0 - 2.5 m/s',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'hospital-elevators',
    name: 'Hospital Elevator',
    tagline: 'Designed for Critical Care',
    capacity: '13-26 Persons',
    speed: '1.0 - 1.75 m/s',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'home-elevators',
    name: 'Home Elevator',
    tagline: 'Luxury in Every Floor',
    capacity: '2-6 Persons',
    speed: '0.3 - 0.5 m/s',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'freight-elevators',
    name: 'Freight Elevator',
    tagline: 'Heavy-Duty Performance',
    capacity: '1000-5000 kg',
    speed: '0.5 - 1.0 m/s',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'capsule-elevators',
    name: 'Capsule Elevator',
    tagline: 'Panoramic Glass Design',
    capacity: '6-15 Persons',
    speed: '1.0 - 2.0 m/s',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'mrl-elevators',
    name: 'MRL Elevator',
    tagline: 'Space-Saving Innovation',
    capacity: '8-20 Persons',
    speed: '1.0 - 2.5 m/s',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'hydraulic-elevators',
    name: 'Hydraulic Elevator',
    tagline: 'Smooth Hydraulic Lift',
    capacity: '4-20 Persons',
    speed: '0.3 - 1.0 m/s',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'escalators',
    name: 'Escalators',
    tagline: 'High-Traffic Transit',
    capacity: '9000 p/hr',
    speed: '0.5 m/s',
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=800&auto=format&fit=crop',
  },
];

// ─── Testimonials ───────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'Managing Director',
    company: 'Skyline Towers',
    location: 'Delhi',
    quote: 'RRL Elevators delivered exceptional quality and service. Their team was professional from consultation to handover. The elevator runs smoothly and silently — our residents love it.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Dr. Priya Sharma',
    role: 'Hospital Administrator',
    company: 'City General Hospital',
    location: 'Mumbai',
    quote: 'We needed elevators that could handle the demands of a busy hospital. RRL provided spacious, reliable lifts with 24/7 support. Their emergency response time is outstanding.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Anil Mehta',
    role: 'Project Manager',
    company: 'Grandview Hotels',
    location: 'Jaipur',
    quote: 'The capsule elevators installed by RRL are a showstopper. Guests constantly compliment the panoramic views. Professional installation and excellent after-sales support.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Sunita Patel',
    role: 'Facility Manager',
    company: 'TechPark Commercial',
    location: 'Bangalore',
    quote: 'We upgraded our 15-year-old elevators with RRL\'s modernization service. The difference is remarkable — faster, quieter, and energy efficient. Highly recommend their team.',
    rating: 4,
  },
];

// ─── Why Choose Us ──────────────────────────────────────────
export const WHY_CHOOSE_US = [
  {
    title: 'Experience',
    description: 'Over 20 years of expertise in vertical transportation solutions across India.',
    icon: 'Clock',
  },
  {
    title: 'Safety First',
    description: 'Exceeding all IS/ISO safety standards with advanced safety systems in every installation.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Innovation',
    description: 'Latest technology including IoT-enabled elevators, energy-efficient drives, and smart controls.',
    icon: 'Lightbulb',
  },
  {
    title: 'Affordable',
    description: 'Competitive pricing without compromising on quality. Flexible payment plans available.',
    icon: 'IndianRupee',
  },
  {
    title: 'Quality',
    description: 'Premium components sourced from world-class manufacturers. ISO 9001:2015 certified processes.',
    icon: 'Award',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock emergency support with rapid response teams across all service locations.',
    icon: 'Headphones',
  },
];
