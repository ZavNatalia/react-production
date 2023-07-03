import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation('article-details');
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img className={cls.img} src={block.src} alt="" />
            {block.title && (
                <Text text={block.src} align={TextAlign.CENTER} />
            )}
        </div>
    );
});
