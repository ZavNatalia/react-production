import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppLogo } from './AppLogo';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'shared/AppLogo',
    component: AppLogo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppLogo>;

const Template: ComponentStory<typeof AppLogo> = (args) => (
    <AppLogo {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        scrollRestoration: { scroll: { articles: 0 } },
    }),
];
