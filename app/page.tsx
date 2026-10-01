import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { Services } from '@/components/home/Services';
import { Gallery } from '@/components/home/Gallery';
import { FAQ } from '@/components/home/FAQ';
import { ContactForm } from '@/components/home/ContactForm';
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  CONTACT,
  HOME_FAQ,
} from '@/lib/constants';

// SEO Structured Data (JSON-LD)
function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    telephone: CONTACT.phoneRaw,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'No 53 & 53, 1st Floor, SS Towers, Sai Baba Temple Rd, Green Garden Layout, Munnekolala',
      addressLocality: 'Bengaluru',
      addressRegion: 'KA',
      postalCode: '560037',
      addressCountry: 'IN',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:30',
        closes: '19:00',
      },
    ],
    areaServed: 'IN',
    priceRange: '₹₹₹₹',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOME_FAQ.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd />
      {/* 1. Hero Section (#home) */}
      <Hero />

      {/* 2. About Section (#about) */}
      <About />

      {/* 3. Services Grid (#services) */}
      <Services />

      {/* 4. Filterable Gallery (#gallery) */}
      <Gallery />

      {/* 5. Frequently Asked Questions */}
      <FAQ />

      {/* 6. Contact & Lead Form (#contact) */}
      <ContactForm />
    </>
  );
}
