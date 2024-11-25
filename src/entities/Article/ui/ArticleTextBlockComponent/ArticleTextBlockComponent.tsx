import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './ArticleTextBlockComponent.module.scss';

import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    ({ className, block }: ArticleTextBlockComponentProps) => (
        <div
            className={classNames(cls.ArticleTextBlockComponent, {}, [
                className,
            ])}
        >
            {block.title && <Text className={cls.title} title={block.title} />}
            {block.paragraphs?.map((paragraph) => (
                <Text
                    className={cls.paragraph}
                    key={paragraph}
                    text={paragraph}
                    size="m"
                />
            ))}
        </div>
    ),
);
