import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { getRouteArticleDetails } from '@/shared/const/router';
import cls from './ArticleListItem.module.scss';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation();

    const types = (
        <Text
            className={cls.types}
            text={article.type.join(', ')}
            size="s"
            variant="hint"
        />
    );
    const views = (
        <div className={cls.views}>
            <Icon
                Svg={EyeIcon}
                clickable={false}
                width="20px"
                height="20px"
                variant="hint"
            />
            <Text text={String(article.views)} size="s" variant="hint" />
        </div>
    );
    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
                data-testid="ArticleListItem"
            >
                <Card variant="light" border="roundBorder" padding="24">
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user?.avatar} />
                        <Text
                            className={cls.username}
                            title={article.user?.username}
                            size="s"
                        />
                        <Text
                            className={cls.date}
                            text={article.createdAt}
                            size="s"
                        />
                    </div>

                    <Text
                        className={cls.title}
                        size="l"
                        title={article.title}
                    />
                    <div className={cls.infoWrapper}>
                        {views}
                        {types}
                    </div>

                    <div className={cls.imgWrapper}>
                        <AppImage
                            className={cls.img}
                            src={article.img}
                            alt={article.title}
                            fallback={
                                <Skeleton
                                    className={cls.img}
                                    width="100%"
                                    height="200px"
                                />
                            }
                        />
                    </div>
                    {textBlock && (
                        <ArticleTextBlockComponent
                            className={cls.textBlock}
                            block={textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            to={getRouteArticleDetails(article.id)}
                            target={target}
                            variant="filledBtn"
                        >
                            {t('Read more')}
                        </AppLink>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
            to={getRouteArticleDetails(article.id)}
            target={target}
            data-testid="ArticleListItem"
        >
            <Card
                className={cls.card}
                padding="16"
                border="roundBorder"
                variant="light"
            >
                <div className={cls.imgWrapper}>
                    <AppImage
                        className={cls.img}
                        src={article.img}
                        alt={article.title}
                        fallback={
                            <Skeleton
                                className={cls.img}
                                width="200px"
                                height="200px"
                                border="12px"
                            />
                        }
                    />
                </div>
                <Text className={cls.date} text={article.createdAt} />
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text className={cls.title} text={article.title} />
            </Card>
        </AppLink>
    );
});
