import React from 'react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <Section background="dark" padding="lg" centered>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your IT Infrastructure?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Let's discuss how HiqServe can help your business thrive in the digital era with our cutting-edge IT solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button href="/contact" size="lg">
            Get Started Today
          </Button>
          <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
            Explore Our Services
          </Button>
        </div>
      </div>
    </Section>
  );
}