import { useState } from 'react';
import type { Profile } from '../types/profile';

// Mock profile data
const mockProfile: Profile = {
    id: '1',
    name: "Adrian's Concepts",
    username: 'Adrian_Creates',
    bannerImage: 'https://images.unsplash.com/photo-1680983914080-d3d21f9cbee8?q=80&w=1000&auto=format&fit=crop',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
    stats: {
        followers: 10000,
        works: 100,
        likes: 100000,
        nfts: 150
    }
};

export const useProfile = () => {
    const [profile, setProfile] = useState<Profile>(mockProfile);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchProfile = async () => {
        // In a real application, this would fetch from an API
        setLoading(true);
        try {
            // Simulating API call
            await new Promise(resolve => setTimeout(resolve, 500));
            setProfile(mockProfile);
            setError(null);
        } catch (err) {
            setError('Failed to fetch profile');
        } finally {
            setLoading(false);
        }
    };

    return {
        profile,
        loading,
        error,
        fetchProfile
    };
}; 