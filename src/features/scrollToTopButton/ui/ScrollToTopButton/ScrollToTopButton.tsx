import { memo, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToTopButton.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import MoveToStartIcon from '@/shared/assets/icons/move-to-start.svg';

interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo(
    ({ className }: ScrollToTopButtonProps) => {
        const [showButton, setShowButton] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 300) {
                    setShowButton(true);
                } else {
                    setShowButton(false);
                }
            };
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };

        if (showButton) {
            return (
                <Icon
                    className={classNames(cls.ScrollToTopButton, {}, [
                        className,
                    ])}
                    width={32}
                    height={32}
                    clickable
                    Svg={MoveToStartIcon}
                    onClick={scrollToTop}
                />
            );
        }
        return null;
    },
);
