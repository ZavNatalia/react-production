import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title Title Title Title',
    text: 'Description Description Description Description',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Only Title Title Title Title',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Only Description Description Description Description',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title Title Title Title',
    text: 'Description Description Description Description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Only Title Title Title Title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Only Description Description Description Description',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Title Title Title Title',
    text: 'Description Description Description Description',
    theme: TextTheme.ERROR,
};
