import { useState } from 'react';
import type { VideoStyle, VideoGeneratorState } from '../types/video';

// Mock video styles
const mockVideoStyles: VideoStyle[] = [
    {
        id: 'cartoon',
        name: 'Cartoon',
        image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 'realistic',
        name: 'Realistic',
        image: 'https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: '3d',
        name: '3D',
        image: 'https://images.unsplash.com/photo-1680983914080-d3d21f9cbee8?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 'paranormal',
        name: 'Paranormal',
        image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1000&auto=format&fit=crop'
    }
];

export const useVideoGenerator = () => {
    const [state, setState] = useState<VideoGeneratorState>({
        selectedStyle: null,
        prompt: '',
        aspectRatio: '',
        isGenerating: false,
        generatedVideoUrl: 'https://images.unsplash.com/photo-1680983914080-d3d21f9cbee8?q=80&w=1000&auto=format&fit=crop'
    });
    
    const [error, setError] = useState<string | null>(null);
    const [videoStyles] = useState<VideoStyle[]>(mockVideoStyles);

    const handleStyleSelect = (styleId: string) => {
        setState(prev => ({
            ...prev,
            selectedStyle: styleId
        }));
    };

    const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(prev => ({
            ...prev,
            prompt: e.target.value
        }));
    };

    const handleAspectRatioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState(prev => ({
            ...prev,
            aspectRatio: e.target.value
        }));
    };

    const handleGenerate = async () => {
        if (!state.prompt) {
            setError('Please enter a prompt for your video');
            return;
        }

        setState(prev => ({
            ...prev,
            isGenerating: true
        }));
        
        try {
            // Simulate API call to generate video
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // In a real app, this would be the URL returned from the API
            setState(prev => ({
                ...prev,
                isGenerating: false,
                generatedVideoUrl: 'https://images.unsplash.com/photo-1680983914080-d3d21f9cbee8?q=80&w=1000&auto=format&fit=crop'
            }));
            
            setError(null);
        } catch (err) {
            setError('Failed to generate video');
            setState(prev => ({
                ...prev,
                isGenerating: false
            }));
        }
    };

    return {
        ...state,
        videoStyles,
        error,
        handleStyleSelect,
        handlePromptChange,
        handleAspectRatioChange,
        handleGenerate
    };
}; 