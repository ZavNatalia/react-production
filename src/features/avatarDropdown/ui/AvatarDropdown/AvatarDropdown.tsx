import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import cls from './AvatarDropdown.module.scss';
import {
    getRouteAdmin,
    getRouteProfile,
    getRouteSettings,
} from '@/shared/const/router';
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
            content: t('Settings'),
            href: getRouteSettings(),
        },
        {
            content: t('Log out'),
            onClick: onLogOut,
        },
    ];

    return (
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
    );
});
