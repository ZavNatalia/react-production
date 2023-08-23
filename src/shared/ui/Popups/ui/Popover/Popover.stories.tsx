import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Popover } from './Popover';
import { Button } from '../../../Button/Button';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 170 }}><Story /></div>,
    ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const NormalBottomRight = Template.bind({});
NormalBottomRight.args = {
    trigger: <Button>open</Button>,
    children: (
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cumque cupiditate.</div>
    ),
    direction: 'bottom right',
};

export const GreenBottomLeft = Template.bind({});
GreenBottomLeft.args = {
    trigger: <Button>open</Button>,
    children: (
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cumque cupiditate.</div>
    ),
    direction: 'bottom left',
};
GreenBottomLeft.decorators = [ThemeDecorator(Theme.GREEN)];

export const DarkTopLeft = Template.bind({});
DarkTopLeft.args = {
    trigger: <Button>open</Button>,
    children: (
        <div>Lorem ipsum dolor sit amet, consectetur.</div>
    ),
    direction: 'top left',
};
DarkTopLeft.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkTopRight = Template.bind({});
DarkTopRight.args = {
    trigger: <Button>open</Button>,
    children: (
        <div>Lorem ipsum dolor sit amet, consectetur.</div>
    ),
    direction: 'top right',
};
DarkTopRight.decorators = [ThemeDecorator(Theme.DARK)];
