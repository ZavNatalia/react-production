import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../../deprecated/Stack';
import Logo from '@/shared/assets/icons/app-image.svg';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo(({ className, size = 80 }: AppLogoProps) => {
    return (
        <HStack className={classNames(cls.appLogoWrapper, {}, [className])}>
            <Logo className={cls.appLogo} height={size} width={size} />
        </HStack>
    );
});
