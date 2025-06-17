import { FiPlay } from 'react-icons/fi';

interface VideoPreviewProps {
    videoUrl: string | null;
}

const VideoPreview = ({ videoUrl }: VideoPreviewProps) => {
    if (!videoUrl) return null;
    
    return (
        <div className="mb-8 relative">
            <img 
                src={videoUrl}
                alt="Generated Video Preview"
                className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black bg-opacity-50 rounded-full p-4">
                    <FiPlay className="text-white text-3xl" />
                </div>
            </div>
        </div>
    );
};

export default VideoPreview; 