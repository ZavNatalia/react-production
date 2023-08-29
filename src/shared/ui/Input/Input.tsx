import React, {
    InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string | number;
    label?: string;
    direction?: string;
    autofocus?: boolean;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        direction = 'row',
        onChange,
        type = 'text',
        label,
        autofocus,
        readonly,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }
    }, [autofocus]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className, cls[direction]])}>
            {label && <div className={cls.label}>{label}</div>}
            <input
                ref={ref}
                type={type}
                value={value}
                className={cls.input}
                onChange={handleInputChange}
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    );
});
