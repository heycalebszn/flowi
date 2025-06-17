export interface Notification {
    id: string;
    type: 'follow' | 'purchase';
    date: string;
    user: {
        name: string;
        avatar: string;
    };
    otherUsers?: number;
    asset?: {
        name: string;
        image: string;
    };
} 