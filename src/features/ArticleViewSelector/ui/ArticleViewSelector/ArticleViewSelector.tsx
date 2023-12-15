import { ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import TiledIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import ListIcon from '@/shared/assets/icons/burger.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';
import cls from './ArticleViewSelector.module.scss';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleViewSelectorProps {
    className?: string;
    view?: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

export const viewTypes = [
    {
        view: ArticleView.PLATE,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            off: () => TiledIconDeprecated,
            on: () => TiledIcon,
        }),
    },
    {
        view: ArticleView.LIST,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            off: () => ListIconDeprecated,
            on: () => ListIcon,
        }),
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
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <div
                    className={classNames(cls.ArticleViewSelector, {}, [
                        className,
                    ])}
                >
                    {viewTypes.map((viewType) => (
                        <ButtonDeprecated
                            key={viewType.view}
                            theme={ButtonTheme.CLEAR}
                            onClick={onClick(viewType.view)}
                        >
                            <IconDeprecated
                                width={24}
                                height={24}
                                className={classNames('', {
                                    [cls.selected]: viewType.view === view,
                                })}
                                Svg={viewType.icon}
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            }
            on={
                <Card
                    className={classNames(cls.ArticleViewSelectorV2, {}, [
                        className,
                    ])}
                    border="roundBorder"
                >
                    <HStack gap="8">
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
                    </HStack>
                </Card>
            }
        />
    );
};
