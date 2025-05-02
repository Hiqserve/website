import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark' | 'primary' | 'secondary';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  container?: boolean;
  centered?: boolean;
};

export default function Section({
  children,
  className = '',
  id,
  background = 'white',
  padding = 'lg',
  container = true,
  centered = false,
}: SectionProps) {
  // Background classes
  const backgroundClasses = {
    white: 'bg-white text-gray-900',
    light: 'bg-gray-50 text-gray-900',
    dark: 'bg-gray-900 text-white',
    primary: 'bg-primary-50 text-gray-900',
    secondary: 'bg-secondary-50 text-gray-900',
  };
  
  // Padding classes
  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 md:py-24',
  };
  
  // Container class
  const containerClass = container ? 'container mx-auto px-4 sm:px-6 lg:px-8' : '';
  
  // Centered class
  const centeredClass = centered ? 'text-center' : '';
  
  // Combine all classes
  const sectionClasses = `${backgroundClasses[background]} ${paddingClasses[padding]} ${centeredClass} ${className}`;
  
  return (
    <section id={id} className={sectionClasses}>
      <div className={containerClass}>
        {children}
      </div>
    </section>
  );
}