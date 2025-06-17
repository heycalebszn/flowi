import { useState } from 'react';
import { useCollections } from '../hooks/useCollections';
import CollectionCard from '../components/ui/CollectionCard';
import SearchInput from '../components/ui/SearchInput';

const Collection = () => {
    const { collections } = useCollections();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    // Filter collections based on search query
    const filteredCollections = collections.filter(collection => 
        collection.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        collection.creator.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">My Collection</h1>
                <SearchInput placeholder="Hinted search text" onChange={handleSearch} />
            </div>

            {/* Collections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredCollections.map(collection => (
                    <CollectionCard key={collection.id} collection={collection} />
                ))}
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {filteredCollections.map(collection => (
                    <CollectionCard key={`second-${collection.id}`} collection={collection} />
                ))}
            </div>
        </div>
    );
};

export default Collection;