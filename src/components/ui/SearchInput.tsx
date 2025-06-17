import { FiSearch } from 'react-icons/fi';

interface SearchInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

const SearchInput = ({ placeholder = 'Hinted search text', onChange }: SearchInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder={placeholder}
          className="bg-transparent border-none outline-none flex-1"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchInput;
