import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { Notification } from '../../modal/types/notification';
import cls from './NotificationItem.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';

interface NotificationItemProps {
    className?: string;
    item?: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;
    const content = (
        <Card
            className={classNames(cls.NotificationItem, {}, [className])}
            padding="16"
            variant="normal"
        >
            <Text title={item?.title} text={item?.description} size="s" />
        </Card>
    );

    if (item?.href) {
        return (
            <a
                className={cls.link}
                href={item.href}
                target="_blank"
                rel="noreferrer"
            >
                {content}
            </a>
        );
    }
    return content;
});
