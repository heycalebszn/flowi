import { FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';

interface DropdownFilterProps {
  label: string;
  options?: string[];
  onChange?: (value: string) => void;
}

const DropdownFilter = ({ 
  label, 
  options = [], 
  onChange 
}: DropdownFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-200 rounded-md"
        onClick={handleToggle}
      >
        <span>{selected || label}</span>
        <FiChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
          {options.map((option, index) => (
            <button
              key={index}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownFilter; 