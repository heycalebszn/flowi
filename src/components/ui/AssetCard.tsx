import type { Asset } from '../../types';
import { FiHeart } from 'react-icons/fi';

interface AssetCardProps {
  asset: Asset;
  showOwnership?: boolean;
}

const AssetCard = ({ asset, showOwnership = true }: AssetCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md bg-white">
      <div className="relative">
        <img 
          src={asset.imageUrl} 
          alt={asset.title} 
          className="w-full h-64 object-cover"
        />
        <button className="absolute top-2 right-2 p-2 bg-white bg-opacity-80 rounded-full">
          <FiHeart className="text-xl" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold">{asset.title}</h3>
        <p className="text-gray-600">By {asset.creator.name}</p>
        
        {showOwnership && asset.ownershipType && (
          <div className="mt-2">
            <span className="text-sm text-gray-500">Ownership Type</span>
            <div className="flex items-center">
              <span>{asset.ownershipType}</span>
            </div>
          </div>
        )}
        
        <button className="mt-4 w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-center transition-colors">
          View Collection
        </button>
      </div>
    </div>
  );
};

export default AssetCard; 