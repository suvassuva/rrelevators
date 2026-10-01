import type {
  NavLink,
  Stat,
  GalleryProject,
  ElevatorService,
  TrustItem,
  FAQItem,
} from '@/types';

// ─── Brand Metadata ──────────────────────────────────────────
export const BRAND = {
  name: 'RR Elevators',
  tagline: 'Precision Mobility. Engineering Vertical Excellence.',
  subheading:
    'Pioneering smart, energy-efficient vertical transportation systems. From whisper-quiet residential shafts to heavy industrial freight lifts, engineered to the world’s most stringent safety standards.',
  experienceYears: 18,
  established: 2007,
  colors: {
    primaryCyan: '#0082C8',
    deepNavy: '#1A4B75',
    charcoal: '#232B30',
    darkSlate: '#3A4750',
    lightBg: '#F8FAFC',
    darkSurface: '#0F172A',
  },
};

export const SITE_NAME = 'RR Elevators';
export const SITE_TAGLINE = 'Precision Mobility. Engineering Vertical Excellence.';
export const SITE_DESCRIPTION =
  'RR Elevators delivers precision-engineered vertical mobility solutions across India. Specializing in passenger, panoramic capsule, hospital, and heavy industrial freight lifts with certified safety & 24/7 emergency dispatch.';
export const SITE_URL = 'https://rrelevators.com';

// ─── Contact & Helpline ──────────────────────────────────────
export const CONTACT = {
  phone: '+91 96633 84455',
  phoneRaw: '+919663384455',
  helpline: '+91 96633 84455',
  helplineRaw: '+919663384455',
  dispatchPhone: '+91 96633 84455',
  email: 'info@rrelevators.com',
  dispatchEmail: 'dispatch@rrelevators.com',
  salesEmail: 'sales@rrelevators.com',
  whatsapp: '919663384455',
  address:
    'No 53 & 53, 1st Floor, SS Towers, Sai Baba Temple Rd, Green Garden Layout, Munnekolala, Bengaluru, Karnataka - 560037',
  corporateOffice:
    'No 53 & 53, 1st Floor, SS Towers, Sai Baba Temple Rd, Green Garden Layout, Munnekolala, Bengaluru, Karnataka - 560037',
  workingHours: 'Mon - Sat: 8:30 AM - 7:00 PM',
  emergencyHours: '24/7 Breakdown Dispatch Line',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=SS+Towers,+Sai+Baba+Temple+Rd,+Green+Garden+Layout,+Munnekolala,+Bengaluru,+Karnataka+560037',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=SS+Towers+Sai+Baba+Temple+Rd+Green+Garden+Layout+Munnekolala+Bengaluru+560037&t=&z=15&ie=UTF8&iwloc=&output=embed',
};

// ─── Social Links ───────────────────────────────────────────
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/rrelevators',
  instagram: 'https://www.instagram.com/rr_elevators/',
  linkedin: 'https://linkedin.com/company/rrelevators',
  twitter: 'https://twitter.com/rrelevators',
  youtube: 'https://youtube.com/@rrelevators',
};

// ─── Navigation Anchor Links ────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

// ─── Metric Counter Strip (Hero) ────────────────────────────
export const METRIC_STATS: Stat[] = [
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 99.8, suffix: '%', label: 'System Uptime' },
  { value: 24, suffix: '/7', label: 'Breakdown Response' },
  { value: 100, suffix: '%', label: 'Certified Safety' },
];

// ─── About Section Features ─────────────────────────────────
export const ABOUT_FEATURES = [
  {
    id: 'safety',
    title: 'Uncompromising Safety',
    badge: 'BIS / CE Standards',
    description:
      'Engineered with dual-circuit electromagnetic fail-safe braking, automatic speed governors, bi-directional door light curtain barriers, and integrated seismic detection.',
    highlight: 'Multi-layer Braking & Interlocks',
    icon: 'ShieldCheck',
    image: '/images/unnamed (10).webp',
  },
  {
    id: 'efficiency',
    title: 'Energy Efficiency',
    badge: 'Save Up to 40% Power',
    description:
      'Permanent Magnet Synchronous Motors (PMSM) paired with regenerative Variable Frequency Drives return kinetic power back to the building grid while cutting standby draw to near-zero.',
    highlight: 'Regenerative Eco-Drive Tech',
    icon: 'Zap',
    image: '/images/unnamed (2).webp',
  },
  {
    id: 'cabins',
    title: 'Bespoke Cabins',
    badge: 'Tailored Luxury',
    description:
      'Laser-cut hairline stainless steel, panoramic acoustic glass, customizable indirect linear ambient lighting, touchless capacitive calls, and Italian marble floorings.',
    highlight: 'Architectural Glass & Custom SS',
    icon: 'Sparkles',
    image: '/images/unnamed (5).webp',
  },
];

// ─── 6 Interactive Services (With Authentic Imagery) ────────
export const SERVICES_LIST: ElevatorService[] = [
  {
    id: 'passenger',
    title: 'Passenger Elevators',
    tagline: 'Smooth, silent vertical transit for high-rise residences & corporate towers.',
    description:
      'Designed with gearless traction technology for high-speed, vibration-free rides. Features advanced microprocessor group control for minimum lobby wait times and optimum passenger throughput.',
    icon: 'Users',
    image: '/images/unnamed (4).webp',
    specs: [
      { label: 'Capacity', value: '6 to 26 Persons (408 - 1,768 kg)' },
      { label: 'Rated Speed', value: '1.0 m/s up to 2.5 m/s' },
      { label: 'Drive System', value: 'Permanent Magnet Synchronous (PMSM)' },
      { label: 'Standards', value: 'IS 14665 / EN 81-20 / EN 81-50' },
    ],
    keyFeatures: [
      'Whisper-quiet acoustic sound dampening (< 50 dBA)',
      'Intelligent collective selective traffic algorithms',
      'Micro-leveling precision within ±2 mm',
    ],
  },
  {
    id: 'panoramic',
    title: 'Panoramic & Capsule Lifts',
    tagline: 'Architectural kinetic centerpieces with 180° to 360° panoramic vistas.',
    description:
      'Turn vertical transit into a captivating architectural experience. Engineered with curved laminated safety glass, exterior stainless skeletal chassis, and integrated LED accent mood lighting.',
    icon: 'Eye',
    image: '/images/unnamed (6).webp',
    specs: [
      { label: 'Glass Specs', value: '10+10 mm Toughened Laminated Glass' },
      { label: 'Speed Range', value: '1.0 m/s to 2.0 m/s' },
      { label: 'Configurations', value: 'Circular, Semi-Circular & Polygonal' },
      { label: 'Shaft Type', value: 'Exposed Steel Glass Wellway' },
    ],
    keyFeatures: [
      'Weatherproof external or atrium installations',
      'Curved panoramic glass panels with UV filtration',
      'Programmable RGB chassis perimeter lighting',
    ],
  },
  {
    id: 'freight',
    title: 'Heavy Industrial Freight Lifts',
    tagline: 'Rugged, high-tonnage lifting power for factories, logistics & warehouses.',
    description:
      'Built to endure intense industrial conditions with reinforced structural steel chassis, non-skid chequered plate decking, and heavy impact side protection rails compatible with forklifts.',
    icon: 'PackageCheck',
    image: '/images/unnamed (10).webp',
    specs: [
      { label: 'Payload', value: '1,000 kg up to 5,000+ kg' },
      { label: 'Operating Speed', value: '0.25 m/s to 1.0 m/s' },
      { label: 'Door Options', value: 'Vertical Bi-Parting / Multi-Leaf Collapsible' },
      { label: 'Floor Platform', value: 'Heavy Gauge Mild Steel Chequered Plate' },
    ],
    keyFeatures: [
      'Point-load reinforced flooring for pallet trucks & forklifts',
      'Dual hydraulic cylinder or heavy geared traction configurations',
      'Explosion-proof & dust-resistant motor housing options',
    ],
  },
  {
    id: 'hospital',
    title: 'Hospital & Stretcher Lifts',
    tagline: 'Critical patient mobility with ultra-smooth acceleration & antibacterial cabins.',
    description:
      'Engineered specifically for healthcare environments, featuring deep cabin dimensions accommodating modern intensive care beds, life-support monitors, and emergency surgical teams.',
    icon: 'Stethoscope',
    image: '/images/unnamed (3).webp',
    specs: [
      { label: 'Cabin Depth', value: '2,400 mm+ (Bed & Stretcher Ready)' },
      { label: 'Capacity', value: '13 to 26 Passengers (1,000 - 2,000 kg)' },
      { label: 'Leveling Accuracy', value: 'Jerk-free absolute zero threshold (±1 mm)' },
      { label: 'Hygiene Rating', value: 'Medical-grade 304/316 Antimicrobial SS' },
    ],
    keyFeatures: [
      'Code Blue Emergency Priority Override key switch',
      'Infrared full-height non-contact light safety curtain',
      'Extended door dwell timers for gentle stretcher entry/exit',
    ],
  },
  {
    id: 'modernization',
    title: 'Modernization & Retrofitting',
    tagline: 'Transform aging elevators into high-efficiency, code-compliant systems.',
    description:
      'Upgrade your building’s vertical transportation without the cost and downtime of full replacement. We replace outdated relay controllers with smart microprocessors and energy-saving PMSM drives.',
    icon: 'RefreshCw',
    image: '/images/unnamed (9).webp',
    specs: [
      { label: 'Energy Reduction', value: 'Up to 40% Power Consumption Saved' },
      { label: 'Execution', value: 'Phased implementation to minimize downtime' },
      { label: 'Controller', value: '32-Bit Microprocessor VVVF Vector Control' },
      { label: 'Compliance', value: 'Updated to current national BIS safety norms' },
    ],
    keyFeatures: [
      'Re-skinning of cabin interiors with modern architectural finishes',
      'Integration of modern destination dispatch & keycard security',
      'Smoother acceleration curve eliminating start-stop vibrations',
    ],
  },
  {
    id: 'amc',
    title: 'AMC & Emergency Support',
    tagline: 'Guaranteed 24/7 rapid breakdown response and proactive IoT maintenance.',
    description:
      'Comprehensive Annual Maintenance Contracts (AMC) backed by dedicated mobile emergency dispatch units, certified elevator engineers, and 100% genuine factory OEM replacement parts.',
    icon: 'Headphones',
    image: '/images/unnamed (7).webp',
    specs: [
      { label: 'Dispatch SLA', value: '< 30 Minutes Emergency Rapid Dispatch' },
      { label: 'Helpline', value: '24/7/365 Dedicated Toll-Free Center' },
      { label: 'Inspection Cycle', value: 'Monthly 36-Point Preventive Checklist' },
      { label: 'Spare Parts', value: '100% Genuine OEM Components Stocked' },
    ],
    keyFeatures: [
      'Real-time IoT telemetry monitoring for predictive anomaly detection',
      'Certified technicians trained in high-rise emergency passenger rescue',
      'Customizable SLA tiers: Comprehensive, Semi-Comprehensive, & Basic',
    ],
  },
];

// ─── Filterable Gallery Projects (Real RR Elevators Installations) ─────
export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'proj-1',
    title: 'Emerald Lotus Architectural Lift',
    category: 'Interiors',
    location: 'Bengaluru, Whitefield',
    specs: 'Laser-Cut Emerald False Ceiling | Hairline Mirror SS',
    stops: 'Bespoke Interior',
    speed: '1.75 m/s',
    capacity: '8 Pax (544 kg)',
    image: '/images/unnamed (4).webp',
    description: 'Custom architectural elevator cabin featuring laser-cut floral illuminated false ceiling, mirror-finish stainless steel panels, and LED perimeter mood accents.',
  },
  {
    id: 'proj-2',
    title: 'Amethyst Rose Gold Luxury Cabin',
    category: 'Interiors',
    location: 'Bengaluru, Indiranagar',
    specs: 'Rose Gold Mirror Finish | Violet LED Canopy',
    stops: 'Luxury Villa',
    speed: '1.5 m/s',
    capacity: '8 Pax (544 kg)',
    image: '/images/unnamed (5).webp',
    description: 'Opulent rose gold mirror-polished stainless steel cabin with integrated violet floral lighting canopy engineered for luxury private residences.',
  },
  {
    id: 'proj-3',
    title: 'Sunburst Bronze Architectural Lift',
    category: 'Residential',
    location: 'Bengaluru, Koramangala',
    specs: 'Radial Sunburst Etched SS | Ambient Diffusers',
    stops: '6 Stops',
    speed: '1.5 m/s',
    capacity: '8 Pax (544 kg)',
    image: '/images/unnamed (6).webp',
    description: 'Artisan sunburst etched bronze panels with precision glass flooring and integrated microprocessor car operating panel.',
  },
  {
    id: 'proj-4',
    title: 'Executive Walnut Wood Veneer Suite',
    category: 'Residential',
    location: 'Bengaluru, HSR Layout',
    specs: 'Natural Walnut Grain | Brushed Gold Accents',
    stops: '5 Stops',
    speed: '1.0 m/s',
    capacity: '6 Pax (408 kg)',
    image: '/images/unnamed (9).webp',
    description: 'Bespoke residential elevator interior cladded with acoustic walnut wood veneer and polished brass horizontal handrails.',
  },
  {
    id: 'proj-5',
    title: 'Microprocessor COP Touch Station',
    category: 'Commercial',
    location: 'Bengaluru, Marathahalli',
    specs: 'Digital LED Position Display | Braille Keypad',
    stops: '8 Stops',
    speed: '1.75 m/s',
    capacity: '10 Pax (680 kg)',
    image: '/images/unnamed (3).webp',
    description: 'Smart microprocessor car operating panel with illuminated braille buttons, fire emergency alarms, and crystal-clear floor matrix display.',
  },
  {
    id: 'proj-6',
    title: 'Granite Landing Call & Fire Station',
    category: 'Commercial',
    location: 'Bengaluru, Munnekolala',
    specs: 'Flameproof Break-Glass Fire Switch | LED Landing',
    stops: 'Multi-Floor',
    speed: '2.0 m/s',
    capacity: 'BIS IS 14665',
    image: '/images/unnamed (7).webp',
    description: 'Heavy-duty landing indicator and call fixture flush-mounted in polished granite with dedicated emergency firemen override switch.',
  },
  {
    id: 'proj-7',
    title: 'Royal Gold Arabesque Filigree Cabin',
    category: 'Interiors',
    location: 'Bengaluru, JP Nagar',
    specs: 'Gold Arabesque Laser Etch | Mirror Ceiling',
    stops: '4 Stops',
    speed: '1.0 m/s',
    capacity: '6 Pax (408 kg)',
    image: '/images/unnamed.webp',
    description: 'Intricate gold filigree decorative etched side panels with full-height mirror back wall and architectural warm white downlights.',
  },
  {
    id: 'proj-8',
    title: 'Teak Wood & Linear Diffuser Cabin',
    category: 'Residential',
    location: 'Bengaluru, Electronic City',
    specs: 'Teak Hardwood Laminate | Concealed Lighting',
    stops: '4 Stops',
    speed: '0.75 m/s',
    capacity: '6 Pax (408 kg)',
    image: '/images/unnamed (1).webp',
    description: 'Modern duplex residence lift featuring horizontal teak wood slatted panels and indirect LED cove lighting.',
  },
  {
    id: 'proj-9',
    title: 'Halo Kinetic Circular LED Ceiling',
    category: 'Interiors',
    location: 'Bengaluru, Bellandur',
    specs: 'Concentric Ring Diffuser | Satin SS Finish',
    stops: 'Corporate Tower',
    speed: '2.0 m/s',
    capacity: '13 Pax (884 kg)',
    image: '/images/unnamed (2).webp',
    description: 'Futuristic concentric ring ceiling luminaire paired with hairline stainless steel walls for high-frequency corporate elevators.',
  },
  {
    id: 'proj-10',
    title: 'Certified BIS 6-Passenger Elevator',
    category: 'Commercial',
    location: 'Bengaluru, Sarjapur Road',
    specs: '408 Kgs Payload | BIS Safety Tested & Approved',
    stops: '6 Stops',
    speed: '1.25 m/s',
    capacity: '6 Passengers (408 kg)',
    image: '/images/unnamed (10).webp',
    description: 'Fully certified commercial passenger lift adhering to Bureau of Indian Standards (BIS) IS 14665 with certified overload sensing and ARD battery backup.',
  },
  {
    id: 'proj-11',
    title: 'Cyber Mandala Neon Ceiling Art',
    category: 'Interiors',
    location: 'Bengaluru, MG Road',
    specs: 'Precision Laser Cut Mandala | Blue Neon Backlit',
    stops: 'Luxury Commercial',
    speed: '1.75 m/s',
    capacity: '8 Pax (544 kg)',
    image: '/images/unnamed (11).webp',
    description: 'Intricate sacred geometry mandala ceiling panel with dynamic sapphire blue backlight, transforming the hoistway experience.',
  },
  {
    id: 'proj-12',
    title: 'RR Elevators Engineering & Tech Hub',
    category: 'Commercial',
    location: 'SS Towers, Munnekolala, Bengaluru',
    specs: 'Customer Experience Center & 24/7 Dispatch Hub',
    stops: 'Headquarters',
    speed: 'Active Hub',
    capacity: '24/7 Operations',
    image: '/images/unnamed (8).webp',
    description: 'Our central headquarters and customer experience facility in Munnekolala, Bengaluru, housing technical diagnostics, spare parts inventory, and 24/7 dispatch.',
  },
];

// ─── Trust Badges & Compliance ──────────────────────────────
export const TRUST_BADGES: TrustItem[] = [
  { icon: 'ShieldCheck', title: 'ISO 9001:2015', description: 'Certified Quality Management' },
  { icon: 'Award', title: 'BIS & CE Certified', description: 'Stringent National & European Safety' },
  { icon: 'Zap', title: 'ARD Included', description: 'Auto Rescue Device on Every Unit' },
  { icon: 'Clock', title: '24/7 Helpline', description: '< 30 Min Emergency Response SLA' },
];

// ─── Frequently Asked Questions (FAQ) ───────────────────────
export const HOME_FAQ: FAQItem[] = [
  {
    question: 'What is an Automatic Rescue Device (ARD) and is it included?',
    answer:
      'Yes, an Automatic Rescue Device (ARD) is standard across our elevators. In the event of a sudden grid power blackout, the battery-backed ARD system instantly activates, brings the elevator car smoothly to the nearest floor, and opens the doors automatically to let passengers safely exit.',
  },
  {
    question: 'How do gearless permanent magnet motors save energy?',
    answer:
      'Our PMSM (Permanent Magnet Synchronous Motor) drives eliminate the mechanical gearbox friction of traditional elevator machines. Coupled with regenerative drives that harness gravitational and braking energy, they cut electricity consumption by up to 40% compared to conventional geared traction systems.',
  },
  {
    question: 'What safety standards and certifications do RR Elevators meet?',
    answer:
      'Every elevator system engineered by RR Elevators complies strictly with Bureau of Indian Standards (BIS) IS 14665, European EN 81-20/50 safety codes, and ISO 9001:2015 quality management procedures, featuring multi-layer mechanical braking and infrared door curtains.',
  },
  {
    question: 'What is the response time for emergency AMC breakdown calls?',
    answer:
      'Our central 24/7 emergency dispatch line operates round-the-clock. For critical entrapment or emergency calls, our dedicated mobile technicians have a target response time of under 30 minutes in metro and urban territories.',
  },
  {
    question: 'Can you install an elevator in a building with no existing shaft or limited space?',
    answer:
      'Yes. We specialize in retrofit steel-structure and self-supporting glass shaft elevators, as well as Machine-Room-Less (MRL) configurations that do not require an overhead machine room penthouse or deep pit excavation.',
  },
];

// ─── Compatibility Exports for Existing Subcomponents ───────
export const COUNTER_STATS: Stat[] = [
  { value: 18, suffix: '+', label: 'Years of Engineering' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 250, suffix: '+', label: 'Corporate Clients' },
  { value: 99.8, suffix: '%', label: 'System Uptime' },
];

export const HERO_STATS: Stat[] = [
  { value: 18, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 24, suffix: '/7', label: 'Support Available' },
];

export const TRUST_ITEMS: TrustItem[] = [
  { icon: 'ShieldCheck', title: 'ISO 9001:2015', description: 'Certified Quality Management' },
  { icon: 'Award', title: 'BIS & CE Certified', description: 'Strict Safety Compliance' },
  { icon: 'HardHat', title: 'Certified Engineers', description: '50+ Specialist Technicians' },
  { icon: 'Zap', title: 'ARD Standard', description: 'Automatic Rescue System' },
  { icon: 'Siren', title: 'Emergency Service', description: '24/7 Rapid Response Unit' },
  { icon: 'Clock', title: 'SLA Guarantee', description: '< 30 Min Emergency Dispatch' },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Precision Engineering',
    description: 'Micrometer manufacturing tolerances with high-tensile steel and laser fabrication.',
    icon: 'Settings',
  },
  {
    title: 'Certified Safety First',
    description: 'Adhering strictly to IS 14665 and EN 81-20 safety codes with multi-layer braking.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Regenerative Efficiency',
    description: 'Permanent Magnet Synchronous Motors that recycle braking energy back to the grid.',
    icon: 'Zap',
  },
  {
    title: 'Automatic Rescue Device',
    description: 'Fail-safe battery backup system included on 100% of our elevators.',
    icon: 'Lock',
  },
  {
    title: 'Bespoke Cabins',
    description: 'Architectural glass, hairline stainless steel, and luxury acoustic interior finishes.',
    icon: 'Sparkles',
  },
  {
    title: '24/7 Emergency Support',
    description: 'Dedicated rapid breakdown helpline with certified mobile technicians.',
    icon: 'Headphones',
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Rajiv Malhotra',
    role: 'Managing Director',
    company: 'Skyline Corporate Towers',
    location: 'Gurugram',
    quote: 'RR Elevators delivered 6 high-speed gearless lifts with destination dispatch. The whisper-quiet ride and impeccable build quality impressed all corporate tenants.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Dr. Anita Desai',
    role: 'Medical Director',
    company: 'St. Jude Super-Speciality Hospital',
    location: 'Mohali',
    quote: 'The stretcher lifts from RR Elevators provide exceptionally smooth jerk-free leveling. Their 24/7 emergency dispatch response gives our hospital absolute peace of mind.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Kabir Oberoi',
    role: 'Principal Architect',
    company: 'Oberoi Heritage Hotels',
    location: 'Jaipur',
    quote: 'The curved panoramic glass capsule lifts are the architectural focal point of our atrium. Flawless engineering, stunning illumination, and reliable performance.',
    rating: 5,
  },
];

export const HOME_SERVICES = [
  {
    title: 'Passenger Elevators',
    description: 'Smooth, silent gearless vertical mobility for residential complexes & corporate towers.',
    icon: 'Wrench',
  },
  {
    title: 'Panoramic & Capsule Lifts',
    description: 'Architectural glass showpieces with 360° scenic vistas and customizable ambient lighting.',
    icon: 'Settings',
  },
  {
    title: 'Heavy Industrial Freight Lifts',
    description: 'Rugged cargo handling with forklift-ready chequered steel decks up to 5,000 kg.',
    icon: 'Hammer',
  },
  {
    title: 'Hospital & Stretcher Lifts',
    description: 'Precision ±1mm leveling and medical-grade antibacterial stainless steel cabins.',
    icon: 'ClipboardCheck',
  },
  {
    title: 'Modernization & Retrofitting',
    description: 'Upgrade legacy shafts with microprocessor controllers and regenerative PMSM drives.',
    icon: 'RefreshCw',
  },
  {
    title: '24/7 AMC & Emergency Support',
    description: 'Round-the-clock emergency breakdown response with guaranteed SLA under 30 minutes.',
    icon: 'MessageSquare',
  },
];

export const HOME_PRODUCTS = [
  {
    slug: 'passenger-elevators',
    name: 'Passenger Elevator',
    tagline: 'Smooth Gearless PMSM',
    capacity: '6-26 Persons',
    speed: '1.0 - 2.5 m/s',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'capsule-elevators',
    name: 'Capsule & Panoramic Lift',
    tagline: 'Architectural Curved Glass',
    capacity: '8-16 Persons',
    speed: '1.0 - 2.0 m/s',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'freight-elevators',
    name: 'Industrial Freight Lift',
    tagline: 'Heavy Duty 5,000 kg Payload',
    capacity: '1,000 - 5,000 kg',
    speed: '0.5 - 1.0 m/s',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'hospital-elevators',
    name: 'Hospital Stretcher Lift',
    tagline: 'Jerk-Free Critical Care',
    capacity: '13-26 Persons',
    speed: '1.0 - 1.75 m/s',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=800&auto=format&fit=crop',
  },
];

export const INSTALLATION_STEPS = [
  { step: 1, title: 'Shaft Inspection', description: 'Laser survey of hoistway dimensions and pit depth', icon: 'Search' },
  { step: 2, title: 'Bespoke Design', description: 'CAD engineering drawings and aesthetic cabin selection', icon: 'PenTool' },
  { step: 3, title: 'Precision CNC Fabrication', description: 'Manufacturing of chassis, rails, and PMSM motor assembly', icon: 'Factory' },
  { step: 4, title: 'Rigorous On-Site Rigging', description: 'Certified installation by veteran lift engineers', icon: 'Wrench' },
  { step: 5, title: 'Safety Auditing', description: 'Over-speed and ARD multi-layer testing for BIS approval', icon: 'CheckCircle' },
  { step: 6, title: 'Lifecycle Handover & AMC', description: 'Handover with 24/7 emergency dispatch coverage', icon: 'HeartHandshake' },
];

export const INDUSTRIES = [
  { name: 'Commercial Towers', icon: 'Building2', description: 'High-speed corporate lobbies' },
  { name: 'Luxury Residential', icon: 'Home', description: 'Villas, penthouses & apartments' },
  { name: 'Healthcare & Hospitals', icon: 'Hospital', description: 'Stretcher-compliant elevators' },
  { name: 'Hotels & Hospitality', icon: 'Hotel', description: 'Panoramic glass showpieces' },
  { name: 'Industrial & Warehouses', icon: 'Factory', description: 'Heavy tonnage cargo lifts' },
  { name: 'Retail & Atriums', icon: 'ShoppingBag', description: 'Capsule elevators & escalators' },
];

