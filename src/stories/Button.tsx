import React from 'react';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  // Define base classes for all buttons
  let baseClasses = 'rounded font-bold focus:outline-none focus:ring';

  // Define size-specific classes
  let sizeClasses;
  switch (size) {
    case 'small':
      sizeClasses = 'text-sm px-3 py-2';
      break;
    case 'large':
      sizeClasses = 'text-lg px-6 py-3';
      break;
    default:
      // 'medium' size
      sizeClasses = 'text-md px-5 py-2.5';
  }

  // Define classes for primary vs secondary buttons
  let colorClasses = primary
    ? 'bg-blue-500 hover:bg-blue-700 text-white'
    : 'bg-gray-200 hover:bg-gray-400 text-black';

  // Use backgroundColor prop if provided
  const style = backgroundColor ? { backgroundColor } : {};

  return (
    <button
      type="button"
      className={`${baseClasses} ${sizeClasses} ${colorClasses}`}
      style={style}
      {...props}
    >
      {label}
    </button>
  );
};
