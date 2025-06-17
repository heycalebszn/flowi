import { useState } from 'react';
import type { Notification } from '../types/notifications';

// Mock notifications data
const mockNotifications: Notification[] = [
    {
        id: '1',
        type: 'follow',
        date: '2 Days Ago',
        user: {
            name: 'Samantha',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop'
        },
        otherUsers: 1
    },
    {
        id: '2',
        type: 'purchase',
        date: '2 Days Ago',
        user: {
            name: 'Aisha Yemi',
            avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1000&auto=format&fit=crop'
        },
        asset: {
            name: 'video',
            image: 'https://images.unsplash.com/photo-1680983914080-d3d21f9cbee8?q=80&w=1000&auto=format&fit=crop'
        }
    },
    {
        id: '3',
        type: 'follow',
        date: '2 Days Ago',
        user: {
            name: 'Samantha',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop'
        },
        otherUsers: 1
    },
    {
        id: '4',
        type: 'purchase',
        date: '2 Days Ago',
        user: {
            name: 'Aisha Yemi',
            avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1000&auto=format&fit=crop'
        },
        asset: {
            name: 'video',
            image: 'https://images.unsplash.com/photo-1680983914080-d3d21f9cbee8?q=80&w=1000&auto=format&fit=crop'
        }
    }
];

export const useNotifications = () => {
    const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchNotifications = async () => {
        // In a real application, this would fetch from an API
        setLoading(true);
        try {
            // Simulating API call
            await new Promise(resolve => setTimeout(resolve, 500));
            setNotifications(mockNotifications);
            setError(null);
        } catch (err) {
            setError('Failed to fetch notifications');
        } finally {
            setLoading(false);
        }
    };

    // Group notifications by date
    const groupedNotifications: Record<string, Notification[]> = {};
    
    notifications.forEach(notification => {
        if (!groupedNotifications[notification.date]) {
            groupedNotifications[notification.date] = [];
        }
        groupedNotifications[notification.date].push(notification);
    });

    return {
        notifications,
        groupedNotifications,
        loading,
        error,
        fetchNotifications
    };
}; 