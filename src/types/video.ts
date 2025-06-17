export interface VideoStyle {
    id: string;
    name: string;
    image: string;
}

export interface VideoGeneratorState {
    selectedStyle: string | null;
    prompt: string;
    aspectRatio: string;
    isGenerating: boolean;
    generatedVideoUrl: string | null;
} 