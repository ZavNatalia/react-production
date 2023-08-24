import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { useDevice } from 'shared/lib/hooks/useDevice/useDevice';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo(({ className }: NotificationButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useDevice();

    const onOpenDrawer = useCallback(() => {
        console.log(isMobile);
        setIsOpen(true);
    }, [isMobile]);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
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
});
