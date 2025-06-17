import { useState } from 'react';
import type { Asset } from '../types';

// Mock data for assets
const mockAssets: Asset[] = [
  {
    id: '1',
    title: 'Tiger Robot',
    imageUrl: 'https://images.unsplash.com/photo-1680983914080-d3d21f9cbee8?q=80&w=1000&auto=format&fit=crop',
    creator: {
      name: 'Uche Okoro',
      id: 'uche1'
    },
    ownershipType: 'Full'
  },
  {
    id: '2',
    title: 'Ai Girlie',
    imageUrl: 'https://images.unsplash.com/photo-1633957897986-70e83293f3ff?q=80&w=1000&auto=format&fit=crop',
    creator: {
      name: 'Anna Chay',
      id: 'anna1'
    },
    ownershipType: 'Full'
  },
  {
    id: '3',
    title: 'Electrobott',
    imageUrl: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1000&auto=format&fit=crop',
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