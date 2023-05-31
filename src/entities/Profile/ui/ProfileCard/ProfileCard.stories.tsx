import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.png';
import { Country } from 'entities/Country';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 40,
        firstname: 'Ivan',
        lastname: 'Ivanov',
        city: 'Tashkent',
        currency: Currency.USD,
        country: Country.Uzbekistan,
        avatar,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
