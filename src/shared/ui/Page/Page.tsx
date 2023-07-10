import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
}

export const Page = memo(({ className, children }: PageProps) => (
    <section className={classNames(cls.Page, {}, [className])}>
        {children}
    </section>
));
