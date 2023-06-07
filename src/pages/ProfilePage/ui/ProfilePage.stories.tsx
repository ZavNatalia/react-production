import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from './storybook.png';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 35,
            firstname: 'Vasya',
            lastname: 'Petrov',
            city: 'Astana',
            currency: Currency.KZT,
            country: Country.Kazakhstan,
            avatar,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 35,
            firstname: 'Vasya',
            lastname: 'Petrov',
            city: 'Astana',
            currency: Currency.KZT,
            country: Country.Kazakhstan,
            avatar,
        },
    },
})];

export const Green = Template.bind({});
Green.args = {};
Green.decorators = [ThemeDecorator(Theme.GREEN), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 35,
            firstname: 'Vasya',
            lastname: 'Petrov',
            city: 'Astana',
            currency: Currency.KZT,
            country: Country.Kazakhstan,
            avatar,
        },
    },
})];
