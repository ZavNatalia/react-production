import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled' | 'transparent';

export type ButtonSize = 's' | 'm' | 'l';
export type ButtonColor = 'normal' | 'success' | 'error';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    fullwidth?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

const mapSizeToClass: Record<ButtonSize, string> = {
    s: 'size_s',
    m: 'size_m',
    l: 'size_l',
};

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        variant = 'clear',
        disabled,
        color = 'normal',
        size = 'm',
        fullwidth,
        addonLeft,
        addonRight,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.disabled]: disabled,
        [cls.fullwidth]: fullwidth,
        [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    };

    const sizeClass = mapSizeToClass[size];

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [
                className,
                cls[variant],
                cls[sizeClass],
                cls[color],
            ])}
            disabled={disabled}
            {...otherProps}
        >
            <div className={cls.addonLeft}>{addonLeft}</div>
            {children}
            <div className={cls.addonRight}>{addonRight}</div>
        </button>
    );
});
