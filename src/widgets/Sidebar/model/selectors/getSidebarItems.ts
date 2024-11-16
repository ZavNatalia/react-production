import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../types/sidebar';
import MainIcon from '@/shared/assets/icons/home.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import AboutIcon from '@/shared/assets/icons/Info.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';

import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: 'Main',
            Icon: MainIcon,
        },
        {
            path: getRouteAbout(),
            text: 'About us',
            Icon: AboutIcon,
        },
    ];
    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                text: 'Profile',
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                text: 'Articles',
                Icon: ArticleIcon,
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
