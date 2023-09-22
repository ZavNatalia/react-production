import { ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import cls from './ArticleViewSelector.module.scss';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';

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
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        className={classNames('', {
                            [cls.selected]: viewType.view === view,
                        })}
                        Svg={viewType.icon}
                    />
                </Button>
            ))}
        </div>
    );
};
