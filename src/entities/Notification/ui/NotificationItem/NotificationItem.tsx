import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Notification } from '../../modal/types/notification';
import cls from './NotificationItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

interface NotificationItemProps {
    className?: string;
    item?: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;
    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <CardDeprecated
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                    theme={CardTheme.NORMAL}
                >
                    <TextDeprecated
                        title={item?.title}
                        text={item?.description}
                    />
                </CardDeprecated>
            }
            on={
                <Card
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                    padding="16"
                    variant="light"
                >
                    <Text
                        title={item?.title}
                        text={item?.description}
                        size="s"
                    />
                </Card>
            }
        />
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
