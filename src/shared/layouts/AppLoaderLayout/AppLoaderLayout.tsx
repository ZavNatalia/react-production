import { memo } from 'react';
import { MainLayout } from '../MainLayout';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './AppLoaderLayout.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';

export const AppLoaderLayout = memo(() => {
    return (
        <MainLayout
            className={cls.AppLoaderLayout}
            header={
                <HStack className={cls.header}>
                    <Skeleton width={40} height={40} border="50%" />
                </HStack>
            }
            content={
                <Card variant="light" border="roundBorder" padding="24">
                    <VStack gap="16" className={cls.content}>
                        <Skeleton width="70%" height={54} border="16px" />
                        <Skeleton width="40%" height={26} border="16px" />
                        <Skeleton width="50%" height={26} border="16px" />
                        <Skeleton width="30%" height={32} border="16px" />
                    </VStack>
                </Card>
            }
            sidebar={<Skeleton className={cls.sidebar} />}
        />
    );
});
