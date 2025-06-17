import { useState } from 'react';
import SearchInput from '../components/ui/SearchInput';
import { FiSettings } from 'react-icons/fi';
import { useNotifications } from '../hooks/useNotifications';
import NotificationItem from '../components/notification/NotificationItem';

const Notification = () => {
    const { groupedNotifications, loading, error } = useNotifications();
    const [searchQuery, setSearchQuery] = useState('');
    console.log(searchQuery)

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    if (loading) {
        return <div className="flex justify-center items-center h-64">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    return (
        <div className="container mx-auto max-w-3xl">
            {/* Search Bar */}
            <div className="flex justify-between items-center mb-8">
                <SearchInput placeholder="Hinted search text" onChange={handleSearch} />
                <button className="p-2 rounded-full bg-gray-100">
                    <FiSettings className="text-xl" />
                </button>
            </div>

            {/* Notifications List */}
            <div className="space-y-8">
                {Object.entries(groupedNotifications).map(([date, notifs]) => (
                    <div key={date}>
                        <h2 className="text-xl font-bold mb-4">{date}</h2>
                        <div className="space-y-4">
                            {notifs.map(notification => (
                                <NotificationItem 
                                    key={notification.id} 
                                    notification={notification} 
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notification;