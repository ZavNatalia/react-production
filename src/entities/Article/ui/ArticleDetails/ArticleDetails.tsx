import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleCodeBlockComponent } from '../../ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../../ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlock } from '../../model/types/article';
import cls from './ArticleDetails.module.scss';
import { AppImage } from '@/shared/ui/redesigned/AppImage';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation('article-details');

    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent key={block.id} block={block} />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent key={block.id} block={block} />
                );
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent key={block.id} block={block} />
                );
            default:
                return null;
        }
    }, []);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    let content;

    if (isLoading) {
        content = (
            <VStack gap="16" max>
                <HStack className={cls.headerImgWrapper}>
                    <Skeleton
                        className={cls.headerImg}
                        width={500}
                        height={300}
                        border="12px"
                    />
                </HStack>
                <VStack gap="8">
                    <Skeleton width={400} height={32} />
                    <Skeleton width={600} height={24} />
                    <Skeleton width={150} height={24} />
                    <Skeleton width={200} height={24} />
                </VStack>
                <Skeleton width="100%" height={200} />
                <Skeleton width="100%" height={200} />
            </VStack>
        );
    } else if (error) {
        content = (
            <Text
                variant="error"
                align="center"
                title={t('An error occurred while loading the article')}
            />
        );
    } else if (article) {
        content = (
            <>
                <div className={cls.headerImgWrapper}>
                    <AppImage
                        className={cls.headerImg}
                        src={article?.img}
                        alt={article?.title}
                        fallback={
                            <Skeleton
                                className={cls.img}
                                width="500px"
                                height="300px"
                                border="12px"
                            />
                        }
                    />
                </div>
                <VStack gap="4" max data-testid="ArticleDetails.Info">
                    <Text
                        className={cls.title}
                        title={article?.title}
                        text={article?.subtitle}
                        size="l"
                    />
                    <HStack gap="8" align="end">
                        <Icon Svg={EyeIcon} width={26} height={26} />
                        <Text
                            text={t('views', {
                                count: Number(article?.views),
                            })}
                            size="s"
                        />
                    </HStack>
                    <HStack gap="8" align="end">
                        <Icon Svg={CalendarIcon} width={26} height={26} />
                        <Text text={article?.createdAt} size="s" />
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </>
        );
    } else {
        content = null;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack
                gap="16"
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
