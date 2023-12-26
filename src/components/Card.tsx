// src/components/Card.tsx
import React from 'react';

export interface CardProps {
  title: string;
  description: string;
}

export const Card = ({ title, description }: CardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
    </div>
  );
};
