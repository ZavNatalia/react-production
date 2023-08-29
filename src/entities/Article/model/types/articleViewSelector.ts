import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import { ArticleView } from '../consts/consts';

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
