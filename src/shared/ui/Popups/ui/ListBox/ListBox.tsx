import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

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

export function ListBox(props: ListBoxProps) {
    const {
        items, value, className, defaultValue, label, readonly, direction = 'bottom right', onChange,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack
            className={classNames(cls.ListBox, { [cls.readonly]: readonly }, [className, popupCls.popup])}
            gap="8"
        >
            {label && <span className={cls.label}>{label}</span>}

            <HListBox
                disabled={readonly}
                as="div"
                value={value}
                onChange={onChange}
            >
                <HListBox.Button as="div" className={cls.trigger}>
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
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,
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
        </HStack>
    );
}
