import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'asdahkj hkjhe',
            user: { id: '2', username: 'Vasya' },
        },
        {
            id: '2',
            text: 'WEnnf,m hkjhe',
            user: { id: '3', username: 'Petya' },
        },
    ],
};
Normal.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
Loading.decorators = [StoreDecorator({})];
