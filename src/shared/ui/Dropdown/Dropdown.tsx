import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import cls from './Dropdown.module.scss';
import { AppLink } from '../AppLink/AppLink';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    href?: string;
    onClick?: () => void;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.menuBottomLeft,
    'bottom right': cls.menuBottomRight,
    'top left': cls.menuTopLeft,
    'top right': cls.menuTopRight,
};

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

export function Dropdown(props: DropdownProps) {
    const {
        className, items, trigger, direction = 'bottom right',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            className={classNames(cls.item, { [cls.active]: active })}
                            type="button"
                            onClick={item.onClick}
                            disabled={item.disabled}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} refName="href" to={item.href} disabled={item.disabled} key={index}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled} key={index}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
