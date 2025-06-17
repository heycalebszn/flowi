import React from 'react';

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const TabButton = ({ isActive, onClick, children }: TabButtonProps) => {
  return (
    <button
      className={`px-6 py-2 text-lg font-medium transition-colors ${
        isActive 
          ? 'border-b-2 border-black text-black' 
          : 'text-gray-500 hover:text-gray-800'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TabButton; 