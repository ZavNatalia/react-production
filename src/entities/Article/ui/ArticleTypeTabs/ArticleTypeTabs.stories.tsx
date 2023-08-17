import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleType } from '../../model/consts/consts';
import { ArticleTypeTabs } from './ArticleTypeTabs';

export default {
    title: 'entities/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: ArticleType.SCIENCE,
};
