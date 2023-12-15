import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import cls from './AvatarDropdown.module.scss';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const autData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!autData) {
        return null;
    }

    const items = [
        ...(isAdminPanelAvailable
            ? [
                  {
                      content: t('Admin panel'),
                      href: getRouteAdmin(),
                  },
              ]
            : []),
        {
            content: t('Profile'),
            href: getRouteProfile(autData.id),
        },
        {
            content: t('Log out'),
            onClick: onLogOut,
        },
    ];

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <DropdownDeprecated
                    className={classNames('', {}, [className])}
                    items={items}
                    trigger={
                        autData?.avatar ? (
                            <AvatarDeprecated
                                size={30}
                                src={autData?.avatar}
                                fallbackInverted
                            />
                        ) : (
                            <ProfileIcon className={cls.menuIcon} />
                        )
                    }
                    direction="bottom left"
                />
            }
            on={
                <Dropdown
                    className={classNames('', {}, [className])}
                    items={items}
                    trigger={
                        autData?.avatar ? (
                            <Avatar size={40} src={autData?.avatar} />
                        ) : (
                            <ProfileIcon className={cls.menuIcon} />
                        )
                    }
                    direction="bottom left"
                />
            }
        />
    );
});
