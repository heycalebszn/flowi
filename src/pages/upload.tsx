import { useState } from 'react';
import { useUploadForm } from '../hooks/useUploadForm';
import FileUploader from '../components/upload/FileUploader';
import FormField from '../components/upload/FormField';

const Upload = () => {
    const { 
        formData, 
        isSubmitting, 
        error, 
        success, 
        handleChange, 
        handleFileChange, 
        handleSubmit 
    } = useUploadForm();

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    console.log(selectedFile)

    const handleFileSelected = (file: File) => {
        setSelectedFile(file);
        handleFileChange(file);
    };

    return (
        <div className="container mx-auto max-w-4xl">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-1">
                    <FileUploader onFileSelected={handleFileSelected} />
                </div>

                <div className="md:col-span-1 space-y-6">
                    <FormField label="Title">
                        <input 
                            type="text" 
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter title"
                        />
                    </FormField>

                    <FormField label="Description">
                        <textarea 
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                            placeholder="Tell us what's special about your asset"
                        />
                    </FormField>

                    <FormField label="Price">
                        <input 
                            type="number" 
                            name="price"
                            value={formData.price || ''}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="0.00"
                        />
                    </FormField>

                    <FormField label="Collection">
                        <select 
                            name="collection"
                            value={formData.collection}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select a collection</option>
                            <option value="collection1">Citadel Hub</option>
                            <option value="collection2">Digital Dreams</option>
                            <option value="collection3">Future Art</option>
                        </select>
                    </FormField>

                    <FormField label="Rights">
                        <select 
                            name="rights"
                            value={formData.rights}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select rights</option>
                            <option value="full">Full Rights</option>
                            <option value="partial">Partial Rights</option>
                            <option value="license">License Only</option>
                        </select>
                    </FormField>

                    {error && (
                        <div className="text-red-500 text-sm">{error}</div>
                    )}

                    {success && (
                        <div className="text-green-500 text-sm">Asset uploaded successfully!</div>
                    )}

                    <button 
                        type="submit" 
                        className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Publishing...' : 'Publish'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Upload;