import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant =
    | 'clear'
    | 'outline'
    | 'filled'
    | 'outlineGreen'
    | 'outlineRed'
    | 'transparent';

export type ButtonSize = 's' | 'm' | 'l';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    fullwidth?: boolean;
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
        size = 'm',
        fullwidth,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.disabled]: disabled,
        [cls.fullwidth]: fullwidth,
    };

    const sizeClass = mapSizeToClass[size];

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [
                className,
                cls[variant],
                cls[sizeClass],
            ])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
