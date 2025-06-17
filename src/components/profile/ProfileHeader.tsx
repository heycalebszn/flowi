import type { Profile } from '../../types/profile';

interface ProfileHeaderProps {
    profile: Profile;
}

const ProfileHeader = ({ profile }: ProfileHeaderProps) => {
    return (
        <div>
            {/* Banner and Profile Image */}
            <div className="relative mb-16">
                <div className="w-full h-64 bg-cover bg-center">
                    <img 
                        src={profile.bannerImage}
                        alt="Profile Banner" 
                        className="w-full h-64 object-cover"
                    />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
                    <img 
                        src={profile.profileImage}
                        alt="Profile Avatar" 
                        className="w-32 h-32 rounded-full border-4 border-white"
                    />
                </div>
            </div>

            {/* Profile Info */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">{profile.name}</h1>
                <p className="text-gray-600">@{profile.username}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mb-10">
                <div className="border border-gray-200 p-4 text-center">
                    <p className="text-3xl font-bold">{profile.stats.followers.toLocaleString()}</p>
                    <p className="text-gray-600">Followers</p>
                </div>
                <div className="border border-gray-200 p-4 text-center">
                    <p className="text-3xl font-bold">{profile.stats.works}+</p>
                    <p className="text-gray-600">Works</p>
                </div>
                <div className="border border-gray-200 p-4 text-center">
                    <p className="text-3xl font-bold">{profile.stats.likes.toLocaleString()}</p>
                    <p className="text-gray-600">Likes</p>
                </div>
                <div className="border border-gray-200 p-4 text-center">
                    <p className="text-3xl font-bold">{profile.stats.nfts}</p>
                    <p className="text-gray-600">NFTs Pack</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader; 