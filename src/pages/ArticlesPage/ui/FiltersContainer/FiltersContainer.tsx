import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo(({ className }: FiltersContainerProps) => {
    const {
        sort,
        searchQuery,
        type,
        order,
        onChangeSearchQuery,
        onChangeSort,
        onChangeType,
        onChangeOrder,
    } = useArticleFilters();
    return (
        <ArticlesFilters
            className={className}
            sort={sort}
            searchQuery={searchQuery}
            type={type}
            order={order}
            onChangeType={onChangeType}
            onChangeSort={onChangeSort}
            onChangeOrder={onChangeOrder}
            onChangeSearchQuery={onChangeSearchQuery}
        />
    );
});
