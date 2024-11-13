import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from '@/shared/ui/redesigned/Text';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelector';
import { getArticles } from '../../model/slices/articlesPageSlice';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo(
    ({ className }: ArticleInfiniteListProps) => {
        const { t } = useTranslation();
        const articles = useSelector(getArticles.selectAll);
        const isLoading = useSelector(getArticlesPageIsLoading);
        const error = useSelector(getArticlesPageError);
        const view = useSelector(getArticlesPageView);
        const [searchParams] = useSearchParams();
        const dispatch = useAppDispatch();

        useInitialEffect(() => {
            dispatch(initArticlesPage(searchParams));
        });

        const errorMsg = (
            <div className={classNames('', {}, [className])}>
                <Text
                    variant="error"
                    title={t('An error occurred while loading articles')}
                    text={t('Try to reload the page')}
                    align="center"
                />
            </div>
        );

        if (error) {
            return errorMsg;
        }

        return (
            <ArticleList
                className={classNames('', {}, [className])}
                isLoading={isLoading}
                view={view}
                articles={articles}
            />
        );
    },
);
