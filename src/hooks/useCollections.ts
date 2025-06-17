import { useState } from 'react';
import type { Collection } from '../types';

// Mock data for collections
const mockCollections: Collection[] = [
  {
    id: '1',
    title: 'Citadel Hub',
    imageUrl: 'https://images.unsplash.com/photo-1558244661-d248897f7bc4?q=80&w=1000&auto=format&fit=crop',
    creator: {
      name: 'Osasere Hitler',
      id: 'osasere1'
    }
  },
  {
    id: '2',
    title: 'Citadel Hub',
    imageUrl: 'https://images.unsplash.com/photo-1633957897986-70e83293f3ff?q=80&w=1000&auto=format&fit=crop',
    creator: {
      name: 'Osasere Hitler',
      id: 'osasere1'
    }
  },
  {
    id: '3',
    title: 'Citadel Hub',
    imageUrl: 'https://images.unsplash.com/photo-1680983914080-d3d21f9cbee8?q=80&w=1000&auto=format&fit=crop',
    creator: {
      name: 'Osasere Hitler',
      id: 'osasere1'
    }
  },
  {
    id: '4',
    title: 'Citadel Hub',
    imageUrl: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1000&auto=format&fit=crop',
    creator: {
      name: 'Osasere Hitler',
      id: 'osasere1'
    }
  }
];

export const useCollections = () => {
  const [collections, setCollections] = useState<Collection[]>(mockCollections);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCollections = async () => {
    // In a real application, this would fetch from an API
    setLoading(true);
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setCollections(mockCollections);
      setError(null);
    } catch (err) {
      setError('Failed to fetch collections');
    } finally {
      setLoading(false);
    }
  };

  const addCollection = (newCollection: Collection) => {
    setCollections(prev => [newCollection, ...prev]);
  };

  return {
    collections,
    loading,
    error,
    fetchCollections,
    addCollection
  };
}; 