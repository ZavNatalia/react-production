import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';
import { Button } from '../Button';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
    direction?: FlexDirection;
}

export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, value, onTabClick, direction = 'row' } = props;

    const onClickHandle = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );
    return (
        <Flex
            className={classNames('', {}, [className])}
            direction={direction}
            align="start"
            gap="8"
        >
            {tabs.map((tab) => {
                const isSelected = tab.value === value;
                return (
                    <Button
                        style={{ fontWeight: 'normal' }}
                        key={tab.value}
                        size="s"
                        variant={isSelected ? 'filled' : 'outline'}
                        onClick={onClickHandle(tab)}
                    >
                        {tab.content}
                    </Button>
                );
            })}
        </Flex>
    );
});
