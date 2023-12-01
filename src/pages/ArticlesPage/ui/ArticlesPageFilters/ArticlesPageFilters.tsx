import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { useDebounce } from '@/shared/lib/useDebounce/useDebounce';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageOrder,
    getArticlesPageSearchQuery,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelector';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { SortOrder } from '@/shared/types/sort';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo(
    ({ className }: ArticlesPageFiltersProps) => {
        const { t } = useTranslation();
        const dispatch = useAppDispatch();

        const view = useSelector(getArticlesPageView);
        const order = useSelector(getArticlesPageOrder);
        const sort = useSelector(getArticlesPageSort);
        const type = useSelector(getArticlesPageType);
        const searchQuery = useSelector(getArticlesPageSearchQuery);

        const fetchData = useCallback(() => {
            dispatch(fetchArticlesList({ replace: true }));
        }, [dispatch]);

        const debouncedFetchData = useDebounce(fetchData, 500);

        const onChangeView = useCallback(
            (view: ArticleView) => {
                dispatch(articlesPageActions.setView(view));
                dispatch(articlesPageActions.setPage(1));
            },
            [dispatch],
        );

        const onChangeOrder = useCallback(
            (order: SortOrder) => {
                dispatch(articlesPageActions.setOrder(order));
                dispatch(articlesPageActions.setPage(1));
                fetchData();
            },
            [dispatch, fetchData],
        );

        const onChangeSort = useCallback(
            (sort: ArticleSortField) => {
                dispatch(articlesPageActions.setSort(sort));
                dispatch(articlesPageActions.setPage(1));
                fetchData();
            },
            [dispatch, fetchData],
        );

        const onChangeType = useCallback(
            (value: ArticleType) => {
                dispatch(articlesPageActions.setType(value));
                dispatch(articlesPageActions.setPage(1));
                fetchData();
            },
            [dispatch, fetchData],
        );

        const onChangeSearchQuery = useCallback(
            (searchQuery: string) => {
                dispatch(articlesPageActions.setSearchQuery(searchQuery));
                dispatch(articlesPageActions.setPage(1));
                debouncedFetchData();
            },
            [debouncedFetchData, dispatch],
        );

        return (
            <div
                className={classNames(cls.ArticlesPageFilters, {}, [className])}
            >
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
                <ArticleTypeTabs
                    className={cls.tabs}
                    onChangeType={onChangeType}
                    value={type}
                />
            </div>
        );
    },
);
