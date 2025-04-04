import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Button } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: 'clear',
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    variant: 'outline',
};
export const OutlineSuccess = Template.bind({});
OutlineSuccess.args = {
    children: 'Success',
    variant: 'outline',
    color: 'success',
};
export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    variant: 'outline',
    size: 'l',
};

export const OutlineDarkSuccess = Template.bind({});
OutlineDarkSuccess.args = {
    children: 'Success',
    variant: 'outline',
    color: 'success',
};
OutlineDarkSuccess.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDarkError = Template.bind({});
OutlineDarkError.args = {
    children: 'Error',
    variant: 'outline',
    color: 'error',
};
OutlineDarkError.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled = Template.bind({});
Disabled.args = {
    children: '>',
    variant: 'clear',
    disabled: true,
};
