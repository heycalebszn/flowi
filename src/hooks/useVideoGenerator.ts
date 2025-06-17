import { useState } from 'react';
import type { VideoStyle, VideoGeneratorState } from '../types/video';

// Mock video styles
const mockVideoStyles: VideoStyle[] = [
    {
        id: 'cartoon',
        name: 'Cartoon',
        image: '/cartoon-style.jpg'
    },
    {
        id: 'realistic',
        name: 'Realistic',
        image: '/realistic-style.jpg'
    },
    {
        id: '3d',
        name: '3D',
        image: '/tiger-robot.jpg'
    },
    {
        id: 'paranormal',
        name: 'Paranormal',
        image: '/paranormal-style.jpg'
    }
];

export const useVideoGenerator = () => {
    const [state, setState] = useState<VideoGeneratorState>({
        selectedStyle: null,
        prompt: '',
        aspectRatio: '',
        isGenerating: false,
        generatedVideoUrl: '/collection3.jpg'
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
                generatedVideoUrl: '/collection3.jpg'
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