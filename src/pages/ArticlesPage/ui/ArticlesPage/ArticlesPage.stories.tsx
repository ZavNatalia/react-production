import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ArticleView } from 'entities/Article';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    articlesPage: {
        view: ArticleView.PLATE,
        isLoading: false,
        _inited: true,
    },
    scrollRestoration: { scroll: { articles: 0 } },
})];
export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    articlesPage: {
        view: ArticleView.PLATE,
        isLoading: true,
        _inited: false,
    },
    scrollRestoration: { scroll: { articles: 0 } },
})];
