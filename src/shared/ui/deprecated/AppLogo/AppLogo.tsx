import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../Stack';
import Logo from '@/shared/assets/icons/app-image.svg';
import { Icon } from '../Icon';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
    className?: string;
}

/**
 * @deprecated
 * use v2 design
 */

export const AppLogo = memo(({ className }: AppLogoProps) => {
    return (
        <HStack className={classNames(cls.appLogoWrapper, {}, [className])}>
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <Icon Svg={Logo} height={200} width={200} />
        </HStack>
    );
});
