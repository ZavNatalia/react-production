import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <VStack max justify="center" align="center" gap="16">
            <Skeleton width={200} height={38} />
            <Skeleton width={200} height={38} />
            <Skeleton width={200} height={38} />
        </VStack>
    </div>
);
