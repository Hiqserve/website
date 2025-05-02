import React from 'react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

type ValueCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ValueCard = ({ title, description, icon }: ValueCardProps) => {
  return (
    <Card className="h-full">
      <div className="flex flex-col items-center text-center">
        <div className="bg-primary-100 p-4 rounded-full text-primary-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Card>
  );
};

export default function AboutMissionSection() {
  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: 'Innovation',
      description: 'We embrace innovation and continuously explore new technologies to provide cutting-edge solutions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Integrity',
      description: 'We conduct our business with the highest level of integrity, honesty, and transparency.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Client-Centric',
      description: 'We put our clients at the center of everything we do, focusing on their needs and success.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
    },
  ];

  return (
    <Section background="white" padding="lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 mb-6">
            At HiqServe, our mission is to empower businesses through innovative IT solutions that drive growth, efficiency, and competitive advantage in the digital era.
          </p>
          <p className="text-lg text-gray-600">
            We are committed to understanding our clients' unique challenges and delivering tailored solutions that exceed expectations. By combining technical expertise with business acumen, we help organizations of all sizes harness the power of technology to achieve their goals.
          </p>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
          {/* Replace with your actual mission image */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-80"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center p-8">
              <h3 className="text-2xl font-bold mb-4">Empowering Through Technology</h3>
              <p className="text-lg">
                This is a placeholder for your mission image. Replace it with an actual image that represents your company's mission.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          These principles guide everything we do and define our company culture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <ValueCard
            key={index}
            title={value.title}
            description={value.description}
            icon={value.icon}
          />
        ))}
      </div>
    </Section>
  );
}