import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda debitis delectus dolorem fugiat in nesciunt quidem sequi. Beatae deserunt dolorum earum itaque iusto maiores nihil quaerat tempora. Minima repellendus, tempore!',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda debitis delectus dolorem fugiat in nesciunt quidem sequi. Beatae deserunt dolorum earum itaque iusto maiores nihil quaerat tempora. Minima repellendus, tempore!',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda debitis delectus dolorem fugiat in nesciunt quidem sequi. Beatae deserunt dolorum earum itaque iusto maiores nihil quaerat tempora. Minima repellendus, tempore!',
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
