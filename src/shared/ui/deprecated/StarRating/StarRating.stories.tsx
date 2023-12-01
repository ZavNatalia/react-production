import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StarRating } from './StarRating';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => (
    <StarRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    selectedStars: 2,
    size: 40,
};

export const Dark = Template.bind({});
Dark.args = {
    selectedStars: 3,
    size: 50,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
