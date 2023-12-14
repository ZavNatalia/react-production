import React, { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { NotificationList } from '@/entities/Notification';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import cls from './NotificationButton.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
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
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <ButtonDeprecated
                        onClick={onOpenDrawer}
                        theme={ButtonTheme.CLEAR}
                    >
                        <IconDeprecated
                            Svg={NotificationIconDeprecated}
                            inverted
                        />
                    </ButtonDeprecated>
                }
                on={
                    <Icon
                        Svg={NotificationIcon}
                        width={36}
                        height={36}
                        clickable
                        onClick={onOpenDrawer}
                    />
                }
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
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <PopoverDeprecated
                        className={classNames('', {}, [className])}
                        direction="bottom left"
                        trigger={trigger}
                    >
                        <NotificationList className={cls.notifications} />
                    </PopoverDeprecated>
                }
                on={
                    <Popover
                        className={classNames('', {}, [className])}
                        direction="bottom left"
                        trigger={trigger}
                    >
                        <NotificationList className={cls.notifications} />
                    </Popover>
                }
            />
        );
    },
);
