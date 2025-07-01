'use client';

import React from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyles =
    'font-semibold px-6 py-3 rounded-md transition-colors duration-200';

  const variants: Record<string, string> = {
    primary: 'bg-[#1959AC] hover:bg-[#0546D2] text-white',
    outline:
      'bg-white border border-gray-300 text-[#1959AC] hover:bg-gray-100',
    secondary:
      'bg-gray-100 hover:bg-gray-200 text-[#0546D2]',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
