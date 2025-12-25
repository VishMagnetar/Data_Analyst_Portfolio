import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
  target?: string;
  download?: boolean | string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick,
  className = '',
  type = 'button',
  href,
  target,
  download
}) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-all duration-300 ease-out font-heading tracking-wide focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:ring-offset-2 focus:ring-offset-luxury-bg cursor-pointer";
  
  const variants = {
    primary: "bg-luxury-gold text-luxury-bg hover:bg-white hover:text-luxury-bg",
    secondary: "bg-luxury-surface text-luxury-text hover:bg-luxury-gold hover:text-luxury-bg",
    outline: "border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-bg",
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        download={download} 
        className={combinedClasses}
        rel={target === '_blank' ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;