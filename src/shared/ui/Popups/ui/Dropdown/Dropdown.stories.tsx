import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Dropdown } from './Dropdown';
import { Button } from '../../../Button/Button';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 120 }}><Story /></div>,
    ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const NormalTopLeft = Template.bind({});
NormalTopLeft.args = {
    trigger: <Button>TopLeft</Button>,
    items: [
        {
            content: 'first link',
            href: 'profile/3',
        },
        {
            content: 'second button',
        },
        {
            content: 'third button',
        },
    ],
    direction: 'top left',
};
export const GreenTopRight = Template.bind({});
GreenTopRight.args = {
    trigger: <Button>TopRight</Button>,
    items: [
        {
            content: 'first first',
        },
        {
            content: 'second second',
        },
        {
            content: 'third third',
        },
    ],
    direction: 'top right',
};
GreenTopRight.decorators = [ThemeDecorator(Theme.GREEN)];

export const GreenBottomRight = Template.bind({});
GreenBottomRight.args = {
    trigger: <Button>BottomRight</Button>,
    items: [
        {
            content: 'first 111',
        },
        {
            content: 'second 222',
        },
        {
            content: 'third 333',
        },
        {
            content: 'fourth 444',
        },
    ],
    direction: 'bottom right',
};
GreenBottomRight.decorators = [ThemeDecorator(Theme.GREEN)];

export const DarkBottomLeft = Template.bind({});
DarkBottomLeft.args = {
    trigger: <Button>BottomLeft</Button>,
    items: [
        {
            content: 'first item',
        },
        {
            content: 'second item',
        },
        {
            content: 'third item',
        },
    ],
    direction: 'bottom right',
};
DarkBottomLeft.decorators = [ThemeDecorator(Theme.DARK)];
