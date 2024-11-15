import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToTopButton.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import MoveToStartIcon from '@/shared/assets/icons/move-to-start.svg';

interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo(
    ({ className }: ScrollToTopButtonProps) => {
        const onClick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        return (
            <Icon
                className={classNames(cls.ScrollToTopButton, {}, [className])}
                width={32}
                height={32}
                clickable
                Svg={MoveToStartIcon}
                onClick={onClick}
            />
        );
    },
);
