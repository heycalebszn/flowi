import type { VideoStyle } from '../../types/video';

interface StyleSelectorProps {
    styles: VideoStyle[];
    selectedStyle: string | null;
    onSelect: (styleId: string) => void;
}

const StyleSelector = ({ styles, selectedStyle, onSelect }: StyleSelectorProps) => {
    return (
        <div className="mb-8">
            <p className="text-center mb-4">Pick a style <span className="text-gray-500">(Optional)</span></p>
            <div className="grid grid-cols-4 gap-4">
                {styles.map(style => (
                    <div 
                        key={style.id}
                        className={`cursor-pointer flex flex-col items-center ${selectedStyle === style.id ? 'ring-2 ring-blue-500 rounded-lg' : ''}`}
                        onClick={() => onSelect(style.id)}
                    >
                        <img 
                            src={style.image} 
                            alt={style.name}
                            className="w-24 h-24 object-cover rounded-lg mb-2"
                        />
                        <p className="text-center">{style.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StyleSelector;
