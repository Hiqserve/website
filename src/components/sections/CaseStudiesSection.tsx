import React from 'react';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

type CaseStudyCardProps = {
  title: string;
  client: string;
  industry: string;
  description: string;
  imagePlaceholder: string;
  slug: string;
};

const CaseStudyCard = ({ title, client, industry, description, imagePlaceholder, slug }: CaseStudyCardProps) => {
  return (
    <Card className="h-full overflow-hidden" padding="none" hoverEffect>
      <div className="relative h-48 bg-gray-200">
        {/* Replace with actual case study images */}
        <div className="absolute inset-0 flex items-center justify-center bg-primary-100 text-primary-800 text-lg font-medium">
          {imagePlaceholder}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-primary-600">{industry}</span>
          <span className="text-sm text-gray-500">{client}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={`/case-studies/${slug}`} className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
          Read case study
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </Card>
  );
};

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      title: 'Cloud Migration for Financial Services Firm',
      client: 'Global Financial Group',
      industry: 'Financial Services',
      description: 'We helped a leading financial services firm migrate their legacy systems to a secure cloud infrastructure, resulting in 40% cost reduction and improved scalability.',
      imagePlaceholder: 'Financial Services Case Study',
      slug: 'financial-services-cloud-migration',
    },
    {
      title: 'Custom CRM Solution for Retail Chain',
      client: 'RetailPlus Inc.',
      industry: 'Retail',
      description: 'Developed a custom CRM solution that integrated with existing systems, improving customer engagement and increasing sales by 25%.',
      imagePlaceholder: 'Retail CRM Case Study',
      slug: 'retail-custom-crm-solution',
    },
    {
      title: 'Cybersecurity Overhaul for Healthcare Provider',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      description: 'Implemented comprehensive cybersecurity measures for a healthcare provider, ensuring HIPAA compliance and protecting sensitive patient data.',
      imagePlaceholder: 'Healthcare Security Case Study',
      slug: 'healthcare-cybersecurity-overhaul',
    },
    {
      title: 'Data Analytics Platform for Manufacturing',
      client: 'Industrial Innovations',
      industry: 'Manufacturing',
      description: 'Built a data analytics platform that provided real-time insights into manufacturing processes, reducing waste by 30% and improving efficiency.',
      imagePlaceholder: 'Manufacturing Analytics Case Study',
      slug: 'manufacturing-data-analytics-platform',
    },
    {
      title: 'Mobile App Development for Logistics Company',
      client: 'FastTrack Logistics',
      industry: 'Logistics',
      description: 'Developed a mobile application that streamlined delivery tracking and management, improving customer satisfaction and operational efficiency.',
      imagePlaceholder: 'Logistics Mobile App Case Study',
      slug: 'logistics-mobile-app-development',
    },
    {
      title: 'IT Infrastructure Modernization for Education',
      client: 'National Education Board',
      industry: 'Education',
      description: 'Modernized the IT infrastructure for a national education board, enabling remote learning capabilities and improving administrative processes.',
      imagePlaceholder: 'Education IT Case Study',
      slug: 'education-it-infrastructure-modernization',
    },
  ];

  return (
    <Section background="white" padding="lg">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Case Studies</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore how we've helped businesses across various industries solve their most challenging IT problems and achieve their goals.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((caseStudy, index) => (
          <CaseStudyCard
            key={index}
            title={caseStudy.title}
            client={caseStudy.client}
            industry={caseStudy.industry}
            description={caseStudy.description}
            imagePlaceholder={caseStudy.imagePlaceholder}
            slug={caseStudy.slug}
          />
        ))}
      </div>
      <div className="mt-16 text-center">
        <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
          Want to see how we can help your business? Contact us to discuss your specific challenges and goals.
        </p>
        <Button href="/contact" size="lg">
          Discuss Your Project
        </Button>
      </div>
    </Section>
  );
}