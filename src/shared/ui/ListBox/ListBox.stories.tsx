import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ListBox, ListBoxItem } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const people: ListBoxItem[] = [
    { value: 'Durward', content: <div>Durward Reynolds</div> },
    { value: 'Kenton', content: <div>Kenton Towne</div> },
    { value: 'Therese', content: <div>Therese Wunsch</div> },
    { value: 'Benedict', content: <div>Benedict Kessler</div>, disabled: true },
    { value: 'Katelyn', content: <div>Katelyn Rohan</div> },
];

const Template: ComponentStory<typeof ListBox > = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    items: people,
    defaultValue: 'Select the option',
    label: 'Person',
};

export const Green = Template.bind({});
Green.args = {
    items: people,
    value: people[1].value,
    label: 'Person',
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];

export const Dark = Template.bind({});
Dark.args = {
    items: people,
    value: people[2].value,
    label: 'Person',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
