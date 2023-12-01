import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/deprecated/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    ({ className, block }: ArticleImageBlockComponentProps) => {
        return (
            <div
                className={classNames(cls.ArticleImageBlockComponent, {}, [
                    className,
                ])}
            >
                <img className={cls.img} src={block.src} alt="" />
                {block.title && (
                    <Text text={block.src} align={TextAlign.CENTER} />
                )}
            </div>
        );
    },
);
