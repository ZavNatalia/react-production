import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { Icon } from '@/shared/ui/deprecated/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
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

    const types = <Text className={cls.types} text={article.type.join(', ')} />;
    const views = (
        <div className={cls.views}>
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} />
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
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user?.avatar} />
                        <Text
                            className={cls.username}
                            text={article.user?.username}
                        />
                        <Text className={cls.date} text={article.createdAt} />
                    </div>
                    <Text
                        className={cls.title}
                        size={TextSize.L}
                        title={article.title}
                    />
                    {types}
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
                        >
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t('Read more')}
                            </Button>
                        </AppLink>

                        {views}
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
            <Card className={cls.card}>
                <div className={cls.imgWrapper}>
                    <AppImage
                        className={cls.img}
                        src={article.img}
                        alt={article.title}
                        fallback={
                            <Skeleton
                                className={cls.img}
                                width="210px"
                                height="210px"
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
