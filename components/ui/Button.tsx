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
  const baseStyles = "inline-flex items-center justify-center font-sans transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed tracking-widest focus:outline-none rounded-sm";
  
  const variants = {
    // Copper Gold Accent - Organic Luxury
    primary: "bg-[#BFA588] text-white hover:bg-[#A88F75] shadow-lg shadow-[#BFA588]/20",
    // Dusty Pink - Soft Luxury
    secondary: "bg-[#D8C6C6] text-white hover:bg-[#C4B0B0] shadow-lg shadow-[#D8C6C6]/20",
    // Outline - Minimal
    outline: "border border-[#BFA588] text-[#BFA588] hover:bg-[#BFA588] hover:text-white bg-transparent",
  };

  const sizes = {
    sm: "px-6 py-2 text-xs",
    md: "px-8 py-3 text-xs min-h-[48px]", // More elegant text size
    lg: "px-10 py-4 text-sm min-h-[56px]",
    xl: "px-12 py-5 text-base min-h-[64px]",
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