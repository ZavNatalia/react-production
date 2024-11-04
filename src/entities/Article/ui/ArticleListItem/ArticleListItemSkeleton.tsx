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
                    <Card>
                        <div className={cls.header}>
                            <Skeleton border="50%" width={30} height={30} />
                            <Skeleton
                                className={cls.username}
                                width={150}
                                height={20}
                            />
                            <Skeleton
                                className={cls.date}
                                width={150}
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
                            <Skeleton className={cls.img} height={200} />
                        </div>
                        <div className={cls.footer}>
                            <Skeleton
                                className={cls.moreBtn}
                                width={200}
                                height={36}
                            />
                        </div>
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
                <Card>
                    <VStack gap="8">
                        <Skeleton width={210} height={210} />
                        <Skeleton width={120} height={20} />
                        <Skeleton width={180} height={18} />
                        <Skeleton width={180} height={18} />
                    </VStack>
                </Card>
            </div>
        );
    },
);
