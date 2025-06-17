import { FiFilter } from 'react-icons/fi';

interface FilterButtonProps {
  onClick?: () => void;
}

const FilterButton = ({ onClick }: FilterButtonProps) => {
  return (
    <button 
      className="flex items-center space-x-2 bg-white border border-gray-200 rounded-md px-4 py-2 hover:bg-gray-50 transition-colors"
      onClick={onClick}
    >
      <FiFilter className="text-gray-600" />
      <span>Filter</span>
    </button>
  );
};

export default FilterButton; 