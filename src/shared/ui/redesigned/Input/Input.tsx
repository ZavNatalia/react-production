import React, {
    InputHTMLAttributes,
    memo,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { HStack } from '../Stack';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    label?: string;
    direction?: 'row' | 'column';
    autofocus?: boolean;
    onChange?: (value: string) => void;
    readonly?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        direction = 'row',
        onChange,
        type = 'text',
        label,
        placeholder,
        autofocus,
        readonly,
        addonLeft,
        addonRight,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }
    }, [autofocus]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!readonly) {
            onChange?.(e.target.value);
        }
    };

    const onFocus = () => {
        if (!readonly) {
            setIsFocused(true);
        }
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            if (!readonly) {
                ref.current.focus();
            }
        }
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocused && !readonly,
        [cls.withAddonLeft]: Boolean(addonLeft),
        [cls.withAddonRight]: Boolean(addonRight),
    };

    const input = (
        <div
            className={classNames(cls.InputWrapper, mods, [
                className,
                cls[direction],
            ])}
            onClick={onWrapperClick}
        >
            {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
            <input
                ref={ref}
                type={type}
                value={value}
                className={cls.input}
                readOnly={readonly}
                placeholder={placeholder}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={handleInputChange}
                {...otherProps}
            />
            {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
        </div>
    );

    if (label) {
        return (
            <HStack gap="8" max>
                <div className={cls.label}>{label}</div>
                {input}
            </HStack>
        );
    }

    return input;
});
