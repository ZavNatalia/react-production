import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { AppLink } from '@/shared/ui/redesigned/AppLink';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    ({ className, block }: ArticleImageBlockComponentProps) => {
        return (
            <VStack
                className={classNames('', {}, [className])}
                max
                align="center"
                gap="8"
            >
                <div className={cls.imgWrapper}>
                    <AppImage
                        className={cls.img}
                        src={block.src}
                        alt={block.src}
                    />
                </div>
                {block.title && (
                    <AppLink to={block.src} target="_blank">
                        <Text
                            text={`${block.src.slice(0, 50)}...`}
                            size="s"
                            variant="hint"
                        />
                    </AppLink>
                )}
            </VStack>
        );
    },
);
