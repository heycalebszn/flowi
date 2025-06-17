export interface ProfileStats {
    followers: number;
    works: number;
    likes: number;
    nfts: number;
}

export interface Profile {
    id: string;
    name: string;
    username: string;
    bannerImage: string;
    profileImage: string;
    stats: ProfileStats;
} 