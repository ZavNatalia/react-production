import { Fragment, ReactNode, useMemo } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../../redesigned/Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './ListBox.module.scss';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { Icon } from '../../../Icon';

export interface ListBoxItem<T extends string> {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    items?: ListBoxItem<T>[];
    value?: T;
    className?: string;
    defaultValue?: string;
    label?: string;
    readonly?: boolean;
    direction?: DropdownDirection;
    onChange: (value: T) => void;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
    const {
        items,
        value,
        className,
        defaultValue,
        label,
        readonly,
        direction = 'bottom right',
        onChange,
    } = props;

    const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === value);
    }, [items, value]);

    return (
        <HStack gap="8">
            {label && <span className={cls.label}>{label}</span>}

            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(
                    cls.ListBox,
                    { [cls.readonly]: readonly },
                    [className, popupCls.popup],
                )}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button as="div" className={cls.trigger}>
                    <Button
                        variant="filled"
                        size="s"
                        disabled={readonly}
                        addonRight={<Icon Svg={ArrowIcon} />}
                    >
                        {selectedItem?.content ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                        [popupCls.selected]: selected,
                                    })}
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
