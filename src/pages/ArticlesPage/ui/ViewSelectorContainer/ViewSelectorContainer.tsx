import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticlesPageView } from '../../model/selectors/articlesPageSelector';
import { ArticleView } from '@/entities/Article';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';

interface ViewSelectorContainerProps {
    className?: string;
}

export const ViewSelectorContainer = memo(
    ({ className }: ViewSelectorContainerProps) => {
        const { t } = useTranslation();
        const dispatch = useAppDispatch();

        const view = useSelector(getArticlesPageView);

        const onChangeView = useCallback(
            (view: ArticleView) => {
                dispatch(articlesPageActions.setView(view));
                dispatch(articlesPageActions.setPage(1));
            },
            [dispatch],
        );

        return (
            <ArticleViewSelector
                className={className}
                view={view}
                onViewClick={onChangeView}
            />
        );
    },
);
