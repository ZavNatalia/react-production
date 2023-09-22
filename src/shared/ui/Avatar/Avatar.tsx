import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '../AppImage';
import UserIcon from '../../assets/icons/user-avatar-filled.svg';
import cls from './Avatar.module.scss';
import { Icon } from '../../ui/Icon';
import { Skeleton } from '../../ui/Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
    fallbackInverted?: boolean;
}

export const Avatar = ({
    className,
    src,
    alt,
    size = 100,
    fallbackInverted,
}: AvatarProps) => {
    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = (
        <Icon
            className={className}
            inverted={fallbackInverted}
            Svg={UserIcon}
        />
    );

    return (
        <AppImage
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            alt={alt}
            style={styles}
            fallback={fallback}
            errorFallback={errorFallback}
        />
    );
};
