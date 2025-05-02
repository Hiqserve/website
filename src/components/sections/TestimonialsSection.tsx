import React from 'react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

const Testimonial = ({ quote, author, role, company }: TestimonialProps) => {
  return (
    <Card className="h-full" shadow="lg">
      <div className="flex flex-col h-full">
        <div className="mb-4 text-primary-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-gray-700 mb-6 flex-grow">{quote}</p>
        <div className="mt-auto">
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-gray-600 text-sm">{role}, {company}</p>
        </div>
      </div>
    </Card>
  );
};

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "HiqServe transformed our IT infrastructure, resulting in a 30% increase in operational efficiency. Their team's expertise and dedication to our success made all the difference.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "Global Innovations Inc."
    },
    {
      quote: "The custom software solution developed by HiqServe has streamlined our business processes and significantly improved our customer experience. We couldn't be happier with the results.",
      author: "Michael Chen",
      role: "CEO",
      company: "TechStart Solutions"
    },
    {
      quote: "HiqServe's cybersecurity services have given us peace of mind knowing our sensitive data is protected. Their proactive approach to security has prevented several potential breaches.",
      author: "Jennifer Williams",
      role: "CISO",
      company: "Secure Financial Group"
    }
  ];

  return (
    <Section background="primary" padding="lg" centered>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say about working with HiqServe.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
            company={testimonial.company}
          />
        ))}
      </div>
    </Section>
  );
}