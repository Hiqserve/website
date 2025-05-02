import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';

export default function HeroSection() {
  return (
    <Section 
      background="white" 
      padding="lg" 
      className="overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            High-Quality IT Solutions for Your Business
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            HiqServe provides cutting-edge IT services and solutions to help businesses of all sizes thrive in the digital era.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button href="/contact" size="lg">
              Get Started
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore Services
            </Button>
          </div>
        </div>
        <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
          {/* Replace with your actual hero image */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-80"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center p-8">
              <h2 className="text-3xl font-bold mb-4">Innovative IT Solutions</h2>
              <p className="text-xl">
                This is a placeholder for your hero image. Replace it with an actual image that represents your company's services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}