import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { NotificationList } from './NotificationList';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Notification 1',
                    description: 'Subscribe!',
                },
                {
                    id: '2',
                    title: 'Notification 2',
                    description: 'Leave the comment!',
                },
                {
                    id: '3',
                    title: 'Notification 3',
                    description: 'Thumbs up!',
                },
            ],
        },
    ],
};
