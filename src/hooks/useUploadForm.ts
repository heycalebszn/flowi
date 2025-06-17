import { useState } from 'react';
import type { UploadAssetForm } from '../types';

export const useUploadForm = () => {
  const initialState: UploadAssetForm = {
    title: '',
    description: '',
    price: 0,
    collection: '',
    rights: '',
    file: undefined
  };

  const [formData, setFormData] = useState<UploadAssetForm>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (file: File) => {
    setFormData(prev => ({
      ...prev,
      file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Validate form
      if (!formData.title || !formData.file || !formData.collection || !formData.rights) {
        throw new Error('Please fill all required fields');
      }

      // In a real app, this would be an API call to upload the asset
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(true);
      setFormData(initialState);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload asset');
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(initialState);
    setError(null);
    setSuccess(false);
  };

  return {
    formData,
    isSubmitting,
    error,
    success,
    handleChange,
    handleFileChange,
    handleSubmit,
    resetForm
  };
}; 