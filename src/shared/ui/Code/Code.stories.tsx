import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    text: 'export default {\n'
        + '    title: \'shared/Code\',\n'
        + '    component: Code,\n'
        + '    argTypes: {\n'
        + '        backgroundColor: { control: \'color\' },\n'
        + '    },\n'
        + '} as ComponentMeta<typeof Code>;\n'
        + '\n'
        + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n'
        + '\n'
        + 'export const Normal = Template.bind({});',
};

export const Dark = Template.bind({});
Dark.args = {
    text: 'export default {\n'
        + '    title: \'shared/Code\',\n'
        + '    component: Code,\n'
        + '    argTypes: {\n'
        + '        backgroundColor: { control: \'color\' },\n'
        + '    },\n'
        + '} as ComponentMeta<typeof Code>;\n'
        + '\n'
        + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n'
        + '\n'
        + 'export const Normal = Template.bind({});',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
    text: 'export default {\n'
        + '    title: \'shared/Code\',\n'
        + '    component: Code,\n'
        + '    argTypes: {\n'
        + '        backgroundColor: { control: \'color\' },\n'
        + '    },\n'
        + '} as ComponentMeta<typeof Code>;\n'
        + '\n'
        + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n'
        + '\n'
        + 'export const Normal = Template.bind({});',
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
