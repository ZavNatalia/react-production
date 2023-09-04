import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    articleId: '1',
};
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];

Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4,
                },
            ],
        },
    ],
};

export const Green = Template.bind({});
Green.args = {
    articleId: '2',
};
Green.decorators = [ThemeDecorator(Theme.GREEN), StoreDecorator({
    user: {
        authData: { id: '1' },
    },
})];
Green.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=2&articleId=3`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 2,
                },
            ],
        },
    ],
};

export const WithoutRateDark = Template.bind({});
WithoutRateDark.args = {
    articleId: '3',
};
WithoutRateDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {
        authData: { id: '1' },
    },
})];
WithoutRateDark.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=2`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
