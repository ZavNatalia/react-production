import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { ArticleView } from '../../model/consts/consts';
import cls from './ArticleListItem.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props;

        if (view === ArticleView.LIST) {
            return (
                <div
                    className={classNames(cls.ArticleListItem, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Card padding="24" border="roundBorder" variant="light">
                        <VStack gap="8">
                            <div className={cls.header}>
                                <div className={cls.userInfo}>
                                    <Skeleton
                                        border="50%"
                                        width={32}
                                        height={32}
                                    />
                                    <Skeleton width={100} height={24} />
                                </div>

                                <Skeleton
                                    className={cls.date}
                                    width={90}
                                    height={20}
                                />
                            </div>
                            <Skeleton
                                className={cls.title}
                                width={400}
                                height={38}
                            />
                            <Skeleton
                                className={cls.types}
                                width={150}
                                height={20}
                            />
                            <div className={cls.imgWrapper}>
                                <Skeleton
                                    className={cls.img}
                                    width={300}
                                    height={300}
                                />
                            </div>
                            <div className={cls.footer}>
                                <Skeleton width={112} height={42} />
                            </div>
                        </VStack>
                    </Card>
                </div>
            );
        }

        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card padding="16" border="roundBorder" variant="light">
                    <VStack gap="8">
                        <Skeleton width={200} height={200} border="12px" />
                        <Skeleton width={120} height={20} />
                        <Skeleton width={180} height={18} />
                        <Skeleton width={180} height={18} />
                    </VStack>
                </Card>
            </div>
        );
    },
);
