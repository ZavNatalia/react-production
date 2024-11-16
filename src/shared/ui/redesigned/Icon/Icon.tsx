import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;
export type IconVariant = 'normal' | 'hint';
interface IconBaseProps extends SvgProps {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    className?: string;
}

interface NonClickableIconProps extends IconBaseProps {
    variant?: IconVariant;
    clickable?: false;
}

interface ClickableIconProps extends IconBaseProps {
    variant?: IconVariant;
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableIconProps;

export const Icon = memo((props: IconProps) => {
    const {
        Svg,
        className,
        variant = 'normal',
        width = 28,
        height = 28,
        clickable,
        ...otherProps
    } = props;

    const icon = (
        <Svg
            className={classNames(cls.Icon, {}, [className, cls[variant]])}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
        />
    );

    if (clickable) {
        return (
            <button
                className={cls.iconBtn}
                type="button"
                style={{ height, width }}
                onClick={props.onClick}
            >
                {icon}
            </button>
        );
    }
    return icon;
});
