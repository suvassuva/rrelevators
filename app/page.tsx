import { Hero } from '@/components/home/Hero';
import { TrustBar } from '@/components/home/TrustBar';
import { AboutPreview } from '@/components/home/AboutPreview';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { ProductsShowcase } from '@/components/home/ProductsShowcase';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { CounterSection } from '@/components/home/CounterSection';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { Industries } from '@/components/home/Industries';
import { InstallationProcess } from '@/components/home/InstallationProcess';
import { Testimonials } from '@/components/home/Testimonials';
import { ClientLogos } from '@/components/home/ClientLogos';
import { FAQ } from '@/components/home/FAQ';
import { CTABanner } from '@/components/home/CTABanner';
import { HOME_FAQ, SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants';

// Structured Data for SEO
function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-98765-43210',
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
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
      <Hero />
      <TrustBar />
      <AboutPreview />
      <ServicesGrid />
      <ProductsShowcase />
      <WhyChooseUs />
      <CounterSection />
      <FeaturedProjects />
      <Industries />
      <InstallationProcess />
      <Testimonials />
      <ClientLogos />
      <FAQ />
      <CTABanner />
    </>
  );
}
