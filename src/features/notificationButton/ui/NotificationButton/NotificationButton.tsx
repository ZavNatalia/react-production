import React, { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/redesigned/Icon';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { NotificationList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import cls from './NotificationButton.module.scss';
import { Popover } from '@/shared/ui/redesigned/Popups';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo(
    ({ className }: NotificationButtonProps) => {
        const [isOpen, setIsOpen] = useState(false);
        const isMobile = useDevice();

        const onOpenDrawer = useCallback(() => {
            setIsOpen(true);
        }, []);

        const onCloseDrawer = useCallback(() => {
            setIsOpen(false);
        }, []);

        const trigger = (
            <Icon
                Svg={NotificationIcon}
                width={38}
                height={38}
                clickable
                onClick={onOpenDrawer}
            />
        );

        if (isMobile) {
            return (
                <>
                    {trigger}
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </>
            );
        }

        return (
            <Popover
                className={classNames('', {}, [className])}
                direction="bottom left"
                trigger={trigger}
            >
                <NotificationList className={cls.notifications} />
            </Popover>
        );
    },
);
