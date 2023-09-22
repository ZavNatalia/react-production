import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from '@/entities/Article';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => (
    <ArticleViewSelector {...args} />
);

export const NormalPlate = Template.bind({});
NormalPlate.args = {
    view: ArticleView.PLATE,
};

export const DarkList = Template.bind({});
DarkList.args = {
    view: ArticleView.LIST,
};
DarkList.decorators = [ThemeDecorator(Theme.DARK)];
