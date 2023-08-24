import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 10000,
    });

    if (isLoading) {
        return (
            <VStack
                className={classNames(cls.NotificationList, {}, [className])}
                gap="16"
                max
            >
                <Skeleton width="100%" height="80px" border="8px" />
                <Skeleton width="100%" height="80px" border="8px" />
                <Skeleton width="100%" height="80px" border="8px" />
            </VStack>
        );
    }

    return (
        <VStack
            className={classNames(cls.NotificationList, {}, [className])}
            gap="16"
            max
        >
            {data?.map((item) => (
                <NotificationItem item={item} key={item.id} />
            ))}
        </VStack>
    );
});
