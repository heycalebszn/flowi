import { FiUploadCloud } from 'react-icons/fi';
import { useRef } from 'react';

interface FileUploaderProps {
  onFileSelected: (file: File) => void;
  accept?: string;
  maxSize?: number; // in MB
}

const FileUploader = ({ 
  onFileSelected, 
  accept = "image/jpeg, image/png, image/jpg, video/mp4", 
  maxSize = 50 
}: FileUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      validateAndProcessFile(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      validateAndProcessFile(file);
    }
  };

  const validateAndProcessFile = (file: File) => {
    // Check file size
    if (file.size > maxSize * 1024 * 1024) {
      alert(`File size exceeds the limit of ${maxSize}MB`);
      return;
    }

    // Check file type
    const fileType = file.type;
    const acceptedTypes = accept.split(',').map(type => type.trim());
    
    if (!acceptedTypes.includes(fileType)) {
      alert(`File type not supported. Please upload ${accept}`);
      return;
    }

    onFileSelected(file);
  };

  return (
    <div 
      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer"
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        accept={accept} 
        onChange={handleFileChange}
      />
      
      <div className="flex flex-col items-center">
        <FiUploadCloud className="text-5xl text-gray-400 mb-4" />
        <h3 className="text-lg font-medium mb-2">Choose a file or drag & drop it here</h3>
        <p className="text-sm text-gray-500">JPEG, PNG, PDG, and MP4 formats, up to 50MB</p>
        
        <button 
          className="mt-6 px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          Browse File
        </button>
      </div>
    </div>
  );
};

export default FileUploader; 