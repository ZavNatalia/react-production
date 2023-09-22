import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItem } from './ArticleListItem';
import { Article } from '../../model/types/article';
import { Theme } from '@/shared/const/theme';

const article = {
    id: '1',
    title: 'TypeScript news 2023',
    subtitle: 'TypeScript 5.0 и 4.9: оцениваем и сравниваем изменения.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Rufous-collared_sparrow_%28Zonotrichia_capensis_costaricensis%29_2.jpg/500px-Rufous-collared_sparrow_%28Zonotrichia_capensis_costaricensis%29_2.jpg',
    views: '1022',
    createdAt: '12.02.2023',
    user: {
        id: '1',
        username: 'Jane',
        avatar: 'https://t3.ftcdn.net/jpg/01/71/25/36/360_F_171253642_miKXqvj5DeDNKipuJERPQZM1gQWX0C2d.jpg',
    },
    type: ['IT', 'SCIENCE', 'POLITIC'],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Новый оператор satisfies',
            paragraphs: [
                'Позволяет нам проверить соответствие выражения некоторому типу, не меняя сам тип. Это помогает при работе с объектами со смешанными типами данных.',
                'Рассмотрим на примере:',
            ],
        },
        {
            id: '2',
            type: 'CODE',
            code: 'type FormFields = "name" | "surname" | "age";\n\nconst data: Record<FormFields, number | string> = {\n    name: "name",\n    surname: "surname",\n    age: 21,\n}\n\nconst newAge = data.age * 2;\nconst nameUpperCase = data.name.toUpperCase();',
        },
    ],
} as unknown as Article;

export default {
    title: 'entities/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
    <ArticleListItem {...args} />
);

export const NormalList = Template.bind({});
NormalList.args = {
    article,
    view: ArticleView.LIST,
};
export const DarkList = Template.bind({});
DarkList.args = {
    article,
    view: ArticleView.LIST,
};
DarkList.decorators = [ThemeDecorator(Theme.DARK)];

export const NormalPlate = Template.bind({});
NormalPlate.args = {
    article,
    view: ArticleView.PLATE,
};

export const DarkPlate = Template.bind({});
DarkPlate.args = {
    article,
    view: ArticleView.PLATE,
};
DarkPlate.decorators = [ThemeDecorator(Theme.DARK)];
