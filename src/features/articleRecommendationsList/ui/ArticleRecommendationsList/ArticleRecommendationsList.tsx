import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useArticlesRecommendationsList } from '../../api/articleRecommendationsApi';
import cls from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation('articles-page');
        const {
            isLoading,
            data: articles,
            error,
        } = useArticlesRecommendationsList(6);

        if (isLoading || error || !articles) {
            return null;
        }

        return (
            <VStack
                data-testid="ArticleRecommendationsList"
                gap="16"
                max
                className={classNames('', {}, [className])}
            >
                <Text
                    className={cls.title}
                    size={TextSize.L}
                    title={t('Recommendations')}
                />
                <ArticleList
                    className={cls.list}
                    articles={articles}
                    target="_blank"
                />
            </VStack>
        );
    },
);
