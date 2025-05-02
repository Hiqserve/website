import React from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

type TeamMemberProps = {
  name: string;
  role: string;
  bio: string;
  imagePlaceholder: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
};

const TeamMember = ({ name, role, bio, imagePlaceholder, socialLinks }: TeamMemberProps) => {
  return (
    <Card className="h-full" shadow="md">
      <div className="flex flex-col h-full">
        <div className="relative w-full h-64 mb-4 bg-gray-200 rounded-md overflow-hidden">
          {/* Replace with actual team member images */}
          <div className="absolute inset-0 flex items-center justify-center bg-primary-100 text-primary-800 text-lg font-medium">
            {imagePlaceholder}
          </div>
        </div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-primary-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 mb-4 flex-grow">{bio}</p>
        
        {socialLinks && (
          <div className="flex space-x-4 mt-auto">
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-600">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            )}
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-600">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            )}
            {socialLinks.email && (
              <a href={`mailto:${socialLinks.email}`} className="text-gray-500 hover:text-primary-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      bio: 'John has over 20 years of experience in the IT industry and founded HiqServe with a vision to provide high-quality IT solutions to businesses of all sizes.',
      imagePlaceholder: 'John Smith',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'john@hiqserve.com',
      },
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Sarah leads our technical team with her extensive knowledge in software development, cloud architecture, and emerging technologies.',
      imagePlaceholder: 'Sarah Johnson',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'sarah@hiqserve.com',
      },
    },
    {
      name: 'Michael Chen',
      role: 'Director of Operations',
      bio: 'Michael ensures that our service delivery is efficient and effective, overseeing project management and client satisfaction.',
      imagePlaceholder: 'Michael Chen',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        email: 'michael@hiqserve.com',
      },
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Cybersecurity',
      bio: 'Emily brings her expertise in cybersecurity to protect our clients from evolving threats in the digital landscape.',
      imagePlaceholder: 'Emily Rodriguez',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'emily@hiqserve.com',
      },
    },
  ];

  return (
    <Section background="light" padding="lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Meet the experienced professionals who lead HiqServe and drive our mission forward.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            bio={member.bio}
            imagePlaceholder={member.imagePlaceholder}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>
    </Section>
  );
}