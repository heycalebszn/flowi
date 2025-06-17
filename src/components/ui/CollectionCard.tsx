import type { Collection } from '../../types';

interface CollectionCardProps {
  collection: Collection;
}

const CollectionCard = ({ collection }: CollectionCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md bg-white">
      <div className="relative">
        <img 
          src={collection.imageUrl} 
          alt={collection.title} 
          className="w-full h-64 object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold">{collection.title}</h3>
        <p className="text-gray-600">By {collection.creator.name}</p>
        
        <button className="mt-4 w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-center transition-colors">
          View Collection
        </button>
      </div>
    </div>
  );
};

export default CollectionCard; 