import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Popups/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import { HStack } from 'shared/ui/Stack';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { Popover } from 'shared/ui/Popups';
import { NotificationList } from 'entities/Notification';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const autData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (autData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    theme={TextTheme.INVERTED}
                    title={t('Open source')}
                />
                <HStack gap="32" className={cls.actions}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.article_create}
                    >
                        {t('Create article')}
                    </AppLink>
                    <Popover
                        direction="bottom left"
                        trigger={(
                            <Button theme={ButtonTheme.CLEAR}>
                                <Icon Svg={NotificationIcon} inverted />
                            </Button>
                        )}
                    >
                        <NotificationList className={cls.notifications} />
                    </Popover>
                    <Dropdown
                        items={[
                            ...(isAdminPanelAvailable ? [{
                                content: t('Admin panel'),
                                href: RoutePath.admin_panel,
                            }] : []),
                            {
                                content: t('Profile'),
                                href: RoutePath.profile + autData.id,
                            },
                            {
                                content: t('Log out'),
                                onClick: onLogOut,
                            },
                        ]}
                        trigger={autData?.avatar
                            ? <Avatar size={30} src={autData?.avatar} />
                            : <ProfileIcon className={cls.menuIcon} />}
                        direction="bottom left"
                    />
                </HStack>
                {isAuthModal && (
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={onCloseModal}
                    />
                )}
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t('Log in')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </header>
    );
});
