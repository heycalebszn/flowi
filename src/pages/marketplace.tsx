import { useState } from 'react';
import { useAssets } from '../hooks/useAssets';
import AssetCard from '../components/ui/AssetCard';
import SearchInput from '../components/ui/SearchInput';
import FilterButton from '../components/ui/FilterButton';
import TabButton from '../components/ui/TabButton';
import DropdownFilter from '../components/ui/DropdownFilter';

type TabType = 'trending' | 'top-creators' | 'new';

const Marketplace = () => {
  const { assets } = useAssets();
  const [activeTab, setActiveTab] = useState<TabType>('trending');
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Filter assets based on search query
  const filteredAssets = assets.filter(asset => 
    asset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    asset.creator.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      {/* Activity Feed */}
      <div className="bg-white p-4 rounded-lg mb-6">
        <div className="flex items-center space-x-2">
          <img 
            src="/avatar.jpg" 
            alt="User Avatar" 
            className="w-8 h-8 rounded-full"
          />
          <span>aSiliko bought 1.5k of Baby Robot of Openfind</span>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex justify-between items-center mb-8">
        <FilterButton />
        <SearchInput placeholder="Hinted search text" onChange={handleSearch} />
      </div>

      {/* Filter Categories */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <DropdownFilter label="All Categories" options={['Art', 'Music', 'Photography', 'Sports']} />
        <DropdownFilter label="Price" options={['Low to High', 'High to Low']} />
        <DropdownFilter label="Ownership" options={['Full', 'Partial', 'Shared']} />
        <DropdownFilter label="Creator" options={['Verified', 'New', 'Popular']} />
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-8">
        <TabButton 
          isActive={activeTab === 'trending'} 
          onClick={() => handleTabChange('trending')}
        >
          Trending
        </TabButton>
        <TabButton 
          isActive={activeTab === 'top-creators'} 
          onClick={() => handleTabChange('top-creators')}
        >
          Top Creators
        </TabButton>
        <TabButton 
          isActive={activeTab === 'new'} 
          onClick={() => handleTabChange('new')}
        >
          New
        </TabButton>
      </div>

      {/* Assets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssets.map(asset => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
