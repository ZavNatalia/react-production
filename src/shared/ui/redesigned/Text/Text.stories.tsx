import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Text } from './Text';
import { Theme } from '@/shared/const/theme';

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
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ipsa laudantium numquam perspiciatis quas, sequi voluptates?',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Doloremque dolorum ducimus earum exercitationem explicabo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cum eveniet magni tenetur.',
    variant: 'error',
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Doloremque dolorum ducimus earum exercitationem explicabo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cum eveniet magni tenetur.',
    size: 's',
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Doloremque dolorum ducimus earum exercitationem explicabo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cum eveniet magni tenetur.',
    size: 'm',
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Doloremque dolorum ducimus earum exercitationem explicabo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cum eveniet magni tenetur.',
    size: 'l',
};
