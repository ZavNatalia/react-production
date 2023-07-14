import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import {
    ArticleSortField, ArticleSortSelector, ArticleView, ArticleViewSelector,
} from 'entities/Article';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types';
import {
    getArticlesPageOrder,
    getArticlesPageSearchQuery,
    getArticlesPageSort,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelector';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string
}

export const ArticlesPageFilters = memo(({ className }: ArticlesPageFiltersProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const view = useSelector(getArticlesPageView);
    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const searchQuery = useSelector(getArticlesPageSearchQuery);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlesPageActions.setOrder(order));
    }, [dispatch]);

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(sort));
    }, [dispatch]);

    const onChangeSearchQuery = useCallback((searchQuery: string) => {
        dispatch(articlesPageActions.setSearchQuery(searchQuery));
    }, [dispatch]);

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Search')}
                    value={searchQuery}
                    onChange={onChangeSearchQuery}
                />
            </Card>
        </div>
    );
});
