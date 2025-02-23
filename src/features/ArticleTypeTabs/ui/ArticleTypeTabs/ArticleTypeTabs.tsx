import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/redesigned/Tabs';
import { ArticleType } from '@/entities/Article';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo(
    ({ className, value, onChangeType }: ArticleTypeTabsProps) => {
        const { t } = useTranslation();

        const typeTabs = useMemo<TabItem[]>(
            () => [
                {
                    value: ArticleType.ALL,
                    content: t('All articles'),
                },
                {
                    value: ArticleType.IT,
                    content: t('IT'),
                },
                {
                    value: ArticleType.SCIENCE,
                    content: t('Science'),
                },
                {
                    value: ArticleType.ECONOMICS,
                    content: t('Economics'),
                },
                {
                    value: ArticleType.FRONTEND,
                    content: t('Frontend'),
                },
            ],
            [t],
        );

        const onTabClick = useCallback(
            (tab: TabItem) => {
                onChangeType(tab.value as ArticleType);
            },
            [onChangeType],
        );

        return (
            <Tabs
                className={classNames('', {}, [className])}
                tabs={typeTabs}
                value={value}
                direction="column"
                onTabClick={onTabClick}
            />
        );
    },
);
