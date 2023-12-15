import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ArticlesPageFilters } from './ArticlesPageFilters';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'page/ArticlesPage/ArticlesPageFilters',
    component: ArticlesPageFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => (
    <ArticlesPageFilters {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        scrollRestoration: { scroll: { articles: 0 } },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        scrollRestoration: { scroll: { articles: 0 } },
    }),
];
export const Green = Template.bind({});
Green.args = {};
Green.decorators = [
    ThemeDecorator(Theme.GREEN),
    StoreDecorator({
        scrollRestoration: { scroll: { articles: 0 } },
    }),
];
