import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { ArticleDetails } from './ArticleDetails';

export default {
    title: 'shared/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    articleDetails: {
        data: {
            id: '1',
            title: 'Title',
            subtitle: 'subtitle',
            views: 100,
            createdAt: '12.12.12',
            type: [ArticleType.SCIENCE],
            blocks: [
                {
                    type: ArticleBlockType.CODE,
                    code: '<div>123</div>',
                },
            ],
        },
    },
})];
