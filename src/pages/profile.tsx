import { useCollections } from '../hooks/useCollections';
import { useProfile } from '../hooks/useProfile';
import CollectionCard from '../components/ui/CollectionCard';
import ProfileHeader from '../components/profile/ProfileHeader';

const Profile = () => {
    const { collections } = useCollections();
    const { profile, loading, error } = useProfile();

    if (loading) {
        return <div className="flex justify-center items-center h-64">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    return (
        <div className="container mx-auto">
            <ProfileHeader profile={profile} />

            {/* My Works Section */}
            <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6">My Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {collections.map(collection => (
                        <CollectionCard key={collection.id} collection={collection} />
                    ))}
                </div>
            </div>

            {/* Second Row */}
            <div className="mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {collections.map(collection => (
                        <CollectionCard key={`second-${collection.id}`} collection={collection} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;