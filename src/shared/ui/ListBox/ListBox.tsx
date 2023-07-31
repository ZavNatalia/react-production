import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

interface ListBoxProps {
    items?: ListBoxItem[];
    value?: string;
    className?: string;
    defaultValue?: string;
    label?: string;
    readonly?: boolean;
    direction?: DropdownDirection;
    onChange: (value: string) => void;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

export function ListBox(props: ListBoxProps) {
    const {
        items, value, className, defaultValue, label, readonly, direction = 'bottom', onChange,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HListBox
            className={classNames(cls.ListBox, { [cls.readonly]: readonly }, [className])}
            disabled={readonly}
            as="div"
            value={value}
            onChange={onChange}
        >
            {label && <HListBox.Label className={cls.label}>{label}</HListBox.Label>}
            <HListBox.Button className={cls.trigger} disabled={readonly}>
                <Button disabled={readonly}>
                    {value ?? defaultValue}
                </Button>
            </HListBox.Button>
            <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                {items?.map((item) => (
                    <HListBox.Option
                        key={item.value}
                        value={item.value}
                        disabled={item.disabled}
                        as={Fragment}
                    >
                        {({ active }) => (
                            <li
                                className={classNames(
                                    cls.item,
                                    {
                                        [cls.active]: active,
                                        [cls.disabledItem]: item.disabled,
                                    },
                                )}
                            >
                                {item.content}
                            </li>
                        )}
                    </HListBox.Option>
                ))}
            </HListBox.Options>
        </HListBox>
    );
}
