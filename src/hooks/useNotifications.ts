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
            avatar: '/avatar1.jpg'
        },
        otherUsers: 1
    },
    {
        id: '2',
        type: 'purchase',
        date: '2 Days Ago',
        user: {
            name: 'Aisha Yemi',
            avatar: '/avatar2.jpg'
        },
        asset: {
            name: 'video',
            image: '/tiger-robot.jpg'
        }
    },
    {
        id: '3',
        type: 'follow',
        date: '2 Days Ago',
        user: {
            name: 'Samantha',
            avatar: '/avatar1.jpg'
        },
        otherUsers: 1
    },
    {
        id: '4',
        type: 'purchase',
        date: '2 Days Ago',
        user: {
            name: 'Aisha Yemi',
            avatar: '/avatar2.jpg'
        },
        asset: {
            name: 'video',
            image: '/tiger-robot.jpg'
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