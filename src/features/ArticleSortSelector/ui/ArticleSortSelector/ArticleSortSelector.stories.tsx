import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleSortSelector } from './ArticleSortSelector';
import { ArticleSortField } from '@/entities/Article';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/ArticleSortSelector',
    component: ArticleSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => (
    <ArticleSortSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    sort: ArticleSortField.VIEWS,
    order: 'desc',
};

export const Dark = Template.bind({});
Dark.args = {
    sort: ArticleSortField.CREATED,
    order: 'asc',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Green = Template.bind({});
Green.args = {
    sort: ArticleSortField.TITLE,
    order: 'desc',
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
