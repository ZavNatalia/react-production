import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import cls from './ArticlesPage.module.scss';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: { className?: string }) => {
    const dispatch = useAppDispatch();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);
    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <Page
                    className={classNames(cls.ArticlesPage, {}, [className])}
                    onScrollEnd={onLoadNextPart}
                    data-testid="ArticlesPage"
                >
                    <ArticlePageGreeting />
                    <ArticlesPageFilters />

                    <ArticleInfiniteList className={cls.list} />
                </Page>
            }
            on={
                <StickyContentLayout
                    left={<ViewSelectorContainer />}
                    right={<FiltersContainer />}
                    content={
                        <Page
                            className={classNames(cls.ArticlesPageV2, {}, [
                                className,
                            ])}
                            onScrollEnd={onLoadNextPart}
                            data-testid="ArticlesPage"
                        >
                            <ArticleInfiniteList className={cls.list} />
                        </Page>
                    }
                />
            }
        />
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
