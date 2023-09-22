import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    ({ className }: ArticleDetailsPageHeaderProps) => {
        const { t } = useTranslation();
        const navigate = useNavigate();
        const article = useSelector(getArticleDetailsData);

        const canEdit = useSelector(getCanEditArticle);

        const onBackToList = useCallback(() => {
            navigate(getRouteArticles());
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            if (article?.id) {
                navigate(getRouteArticleEdit(article.id));
            }
        }, [article?.id, navigate]);

        return (
            <HStack
                max
                justify="between"
                className={classNames('', {}, [className])}
            >
                <Button onClick={onBackToList}>{t('Back to the list')}</Button>
                {canEdit && (
                    <Button onClick={onEditArticle}>
                        {t('Edit the article')}
                    </Button>
                )}
            </HStack>
        );
    },
);
