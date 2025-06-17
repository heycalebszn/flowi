import type { Notification } from '../../types/notifications';

interface NotificationItemProps {
    notification: Notification;
}

const NotificationItem = ({ notification }: NotificationItemProps) => {
    return (
        <div className="flex items-center py-3">
            <img 
                src={notification.user.avatar || '/default-avatar.jpg'} 
                alt={notification.user.name}
                className="w-12 h-12 rounded-full mr-4"
            />
            <div className="flex-grow">
                <div className="flex items-center">
                    <p className="font-medium">{notification.user.name}</p>
                    {notification.otherUsers && (
                        <span className="ml-1">and {notification.otherUsers} other</span>
                    )}
                </div>
                <p className="text-gray-500">
                    {notification.type === 'follow' ? 'Followed You' : `just Purchased your ${notification.asset?.name}`}
                </p>
            </div>
            {notification.asset && (
                <img 
                    src={notification.asset.image} 
                    alt={notification.asset.name}
                    className="w-14 h-14 rounded-md object-cover"
                />
            )}
        </div>
    );
};

export default NotificationItem; 