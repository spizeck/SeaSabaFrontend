// src/components/Button.tsx
import React from 'react';

const buttonStyles = {
  primary: 'bg-blue-500 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-500 hover:bg-gray-700 text-white', // Fixed the spelling of 'gray'
  positive: 'bg-green-500 hover:bg-green-700 text-white',
  negative: 'bg-red-500 hover:bg-red-700 text-white',
  warning: 'bg-yellow-500 hover:bg-yellow-700 text-white',
  info: 'bg-blue-500 hover:bg-blue-700 text-white',
  dark: 'bg-gray-800 hover:bg-gray-900 text-white',
  light: 'bg-white hover:bg-gray-100 text-gray-800',
  disabled: 'bg-gray-500 text-white cursor-not-allowed',
};

export type ButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
  type?: 'primary' | 'secondary' | 'positive' | 'negative' | 'warning' | 'info' | 'dark' | 'light' | 'disabled';
}

const Button = ({label, onClick, className, type = 'primary'}:
                  { label: string; onClick: () => void; className?: string; type?: keyof typeof buttonStyles }) => {
  const isDisabled = type === 'disabled';
  const finalClassName = `${buttonStyles[type] || buttonStyles.primary} font-bold py-2 px-4 rounded-full ${className || ''}`;

  return (
    <button
      className={finalClassName}
      onClick={onClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

export default Button;
