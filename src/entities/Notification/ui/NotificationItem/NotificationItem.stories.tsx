import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationItem } from './NotificationItem';
import { Notification } from '../../modal/types/notification';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

const item: Notification = {
    id: '1',
    title: 'Notification 1',
    description: 'Event 123',
};

export const Normal = Template.bind({});
Normal.args = {
    item,
};
