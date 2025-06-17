import { useState } from 'react';
import type { Asset } from '../types';

// Mock data for assets
const mockAssets: Asset[] = [
  {
    id: '1',
    title: 'Tiger Robot',
    imageUrl: '/tiger-robot.jpg',
    creator: {
      name: 'Uche Okoro',
      id: 'uche1'
    },
    ownershipType: 'Full'
  },
  {
    id: '2',
    title: 'Ai Girlie',
    imageUrl: '/ai-girlie.jpg',
    creator: {
      name: 'Anna Chay',
      id: 'anna1'
    },
    ownershipType: 'Full'
  },
  {
    id: '3',
    title: 'Electrobott',
    imageUrl: '/electrobott.jpg',
    creator: {
      name: 'Johnson Clay',
      id: 'johnson1'
    },
    ownershipType: 'Full'
  }
];

export const useAssets = () => {
  const [assets, setAssets] = useState<Asset[]>(mockAssets);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAssets = async () => {
    // In a real application, this would fetch from an API
    setLoading(true);
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setAssets(mockAssets);
      setError(null);
    } catch (err) {
      setError('Failed to fetch assets');
    } finally {
      setLoading(false);
    }
  };

  const addAsset = (newAsset: Asset) => {
    setAssets(prev => [newAsset, ...prev]);
  };

  return {
    assets,
    loading,
    error,
    fetchAssets,
    addAsset
  };
}; 