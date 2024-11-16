import React, { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                />
            )),
        [collapsed, sidebarItemsList],
    );

    return (
        <aside
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <AppLogo size={collapsed ? 50 : 80} className={cls.appLogo} />
            <VStack role="navigation" className={cls.items} gap="8">
                {itemsList}
            </VStack>
            <div className={cls.collapseBtnWrapper}>
                <Icon
                    className={cls.collapseBtn}
                    Svg={ArrowIcon}
                    clickable
                    onClick={onToggle}
                />
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </aside>
    );
});
