import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.LIST) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Skeleton border="50%" width={30} height={30} />
                        <Skeleton className={cls.username} width={150} height={16} />
                        <Skeleton className={cls.date} width={150} height={16} />
                    </div>
                    <Skeleton className={cls.title} width={300} height={24} />
                    <Skeleton className={cls.types} width={150} height={18} />
                    <div className={cls.imgWrapper}>
                        <Skeleton className={cls.img} height={200} />
                    </div>
                    <div className={cls.footer}>
                        <Skeleton className={cls.moreBtn} width={200} height={36} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imageWrapper}>
                    <Skeleton width={240} height={240} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton className={cls.title} width={150} height={16} />
            </Card>
        </div>
    );
});
