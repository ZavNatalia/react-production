import { ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/burger.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';
import cls from './ArticleViewSelector.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleViewSelectorProps {
    className?: string;
    view?: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

export const viewTypes = [
    {
        view: ArticleView.PLATE,
        icon: TiledIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = ({
    className,
    view,
    onViewClick,
}: ArticleViewSelectorProps) => {
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <Card
            className={classNames(cls.ArticleViewSelector, {}, [className])}
            border="roundBorder"
            variant="dark"
        >
            <VStack gap="8">
                {viewTypes.map((viewType) => (
                    <Icon
                        className={classNames('', {
                            [cls.notSelected]: viewType.view !== view,
                        })}
                        key={viewType.view}
                        Svg={viewType.icon}
                        clickable
                        onClick={onClick(viewType.view)}
                    />
                ))}
            </VStack>
        </Card>
    );
};
