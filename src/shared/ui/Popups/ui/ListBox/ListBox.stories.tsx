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
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const people: ListBoxItem[] = [
    { value: 'Durward', content: <div>Durward Reynolds</div> },
    { value: 'Kenton', content: <div>Kenton Towne</div> },
    { value: 'Therese', content: <div>Therese Wunsch</div> },
    { value: 'Benedict', content: <div>Benedict Kessler</div>, disabled: true },
    { value: 'Katelyn', content: <div>Katelyn Rohan</div> },
];

const Template: ComponentStory<typeof ListBox > = (args) => <ListBox {...args} />;

export const NormalTopLeft = Template.bind({});
NormalTopLeft.args = {
    items: people,
    defaultValue: 'Select the option',
    label: 'TopLeft',
    direction: 'top left',
};

export const NormalTopRight = Template.bind({});
NormalTopRight.args = {
    items: people,
    value: people[2].value,
    label: 'TopRight',
    direction: 'top right',
};

export const NormalBottomRight = Template.bind({});
NormalBottomRight.args = {
    items: people,
    value: people[2].value,
    label: 'BottomRight',
    direction: 'bottom right',
};

export const NormalBottomLeft = Template.bind({});
NormalBottomLeft.args = {
    items: people,
    value: people[1].value,
    label: 'BottomLeft',
    direction: 'bottom left',
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
