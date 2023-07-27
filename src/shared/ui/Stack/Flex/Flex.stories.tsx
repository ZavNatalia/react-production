import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>123</div>
            <div>456</div>
            <div>789</div>
        </>
    ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    gap: '4',
    children: (
        <>
            <div>123 Gap4.</div>
            <div>456 Gap4.</div>
            <div>789 Gap4.</div>
        </>
    ),
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    gap: '8',
    children: (
        <>
            <div>123 Gap8?</div>
            <div>456 Gap8?</div>
            <div>789 Gap8?</div>
        </>
    ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
    gap: '16',
    children: (
        <>
            <div>(123 Gap16)</div>
            <div>(456 Gap16)</div>
            <div>(789 Gap16)</div>
        </>
    ),
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    gap: '32',
    children: (
        <>
            <div>123 Gap32.</div>
            <div>456 Gap32.</div>
            <div>789 Gap32.</div>
        </>
    ),
};

export const RowBetween = Template.bind({});
RowBetween.args = {
    justify: 'between',
    children: (
        <>
            <div>1, 23 between.</div>
            <div>45, 6 between.</div>
            <div>7, 8, 9, between.</div>
        </>
    ),
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: (
        <>
            <div>123</div>
            <div>456</div>
            <div>789</div>
        </>
    ),
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    direction: 'column',
    gap: '16',
    children: (
        <>
            <div>1 2 3 Gap16!</div>
            <div>4 5 6 Gap16!</div>
            <div>7 8 9 Gap16!</div>
        </>
    ),
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    align: 'end',
    direction: 'column',
    children: (
        <>
            <div>(12 3 AlignEnd)</div>
            <div>(4 56 AlignEnd)</div>
            <div>(78 9 AlignEnd)</div>
        </>
    ),
};
