import { classNames } from '@/shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

/**
 * @deprecated
 * use v2 design
 */

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
