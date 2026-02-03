import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  // Base styles: Elegant, tracking-widest, transition
  const baseStyles = "inline-flex items-center justify-center font-sans transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed tracking-widest focus:outline-none";
  
  const variants = {
    // Copper Gold Accent
    primary: "bg-accent text-white hover:bg-[#A88F75] shadow-md",
    // Dusty Pink
    secondary: "bg-main text-white hover:bg-[#C9B5B5] shadow-md",
    // Outline
    outline: "border border-accent text-accent hover:bg-accent hover:text-white bg-transparent",
  };

  const sizes = {
    sm: "px-6 py-2 text-xs",
    md: "px-8 py-3 text-sm min-h-[48px]", // Mobile touch target friendly
    lg: "px-10 py-4 text-base min-h-[56px]",
    xl: "px-12 py-5 text-lg min-h-[64px]",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};