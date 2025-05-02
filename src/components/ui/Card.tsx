import React from 'react';
import Link from 'next/link';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  hoverEffect?: boolean;
};

export default function Card({
  children,
  className = '',
  href,
  onClick,
  padding = 'md',
  shadow = 'md',
  border = true,
  rounded = 'md',
  hoverEffect = false,
}: CardProps) {
  // Base classes
  const baseClasses = 'bg-white dark:bg-gray-800';
  
  // Padding classes
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8',
  };
  
  // Shadow classes
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
  };
  
  // Border class
  const borderClass = border ? 'border border-gray-200 dark:border-gray-700' : '';
  
  // Rounded classes
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };
  
  // Hover effect class
  const hoverClass = hoverEffect ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg' : '';
  
  // Combine all classes
  const cardClasses = `${baseClasses} ${paddingClasses[padding]} ${shadowClasses[shadow]} ${borderClass} ${roundedClasses[rounded]} ${hoverClass} ${className}`;
  
  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {children}
      </Link>
    );
  }
  
  // If onClick is provided, render as button
  if (onClick) {
    return (
      <button onClick={onClick} className={`${cardClasses} w-full text-left`}>
        {children}
      </button>
    );
  }
  
  // Otherwise render as div
  return <div className={cardClasses}>{children}</div>;
}