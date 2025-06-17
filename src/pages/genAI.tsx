import { useVideoGenerator } from '../hooks/useVideoGenerator';
import StyleSelector from '../components/video/StyleSelector';
import VideoPreview from '../components/video/VideoPreview';

const GenAI = () => {
    const {
        selectedStyle,
        prompt,
        aspectRatio,
        isGenerating,
        generatedVideoUrl,
        videoStyles,
        error,
        handleStyleSelect,
        handlePromptChange,
        handleAspectRatioChange,
        handleGenerate
    } = useVideoGenerator();

    return (
        <div className="container mx-auto max-w-4xl">
            <h1 className="text-3xl font-bold text-center mb-8">Generate your Videos</h1>
            
            {/* Style Selection */}
            <StyleSelector 
                styles={videoStyles}
                selectedStyle={selectedStyle}
                onSelect={handleStyleSelect}
            />
            
            {/* Prompt Input */}
            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Generate a prompt for your video"
                    value={prompt}
                    onChange={handlePromptChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
            </div>
            
            {/* Aspect Ratio */}
            <div className="mb-8">
                <label className="block mb-2">Aspect Ratio</label>
                <select
                    value={aspectRatio}
                    onChange={handleAspectRatioChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select</option>
                    <option value="16:9">16:9 (Landscape)</option>
                    <option value="9:16">9:16 (Portrait)</option>
                    <option value="1:1">1:1 (Square)</option>
                    <option value="4:3">4:3 (Classic)</option>
                </select>
            </div>
            
            {/* Preview */}
            <VideoPreview videoUrl={generatedVideoUrl} />
            
            {/* Generate Button */}
            <div className="flex justify-end">
                <button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                    {isGenerating ? 'Generating...' : 'Generate'}
                </button>
            </div>
        </div>
    );
};

export default GenAI;