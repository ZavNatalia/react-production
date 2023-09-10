import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ArticleType } from '@/entities/Article';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: ArticleType.SCIENCE,
};

export const Dark = Template.bind({});
Dark.args = {
    value: ArticleType.ECONOMICS,
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const Green = Template.bind({});
Green.args = {
    value: ArticleType.ALL,
};
Green.decorators = [
    ThemeDecorator(Theme.GREEN),
];
