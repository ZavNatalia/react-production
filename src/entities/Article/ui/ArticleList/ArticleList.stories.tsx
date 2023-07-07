import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleList } from './ArticleList';
import { Article, ArticleView } from '../../model/types/article';

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
    type: [
        'IT',
    ],
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
    title: 'entities/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const isLoadingNormalList = Template.bind({});
isLoadingNormalList.args = {
    isLoading: true,
    articles: [],
    view: ArticleView.LIST,
};

export const NormalList = Template.bind({});
NormalList.args = {
    articles: new Array(9)
        .fill(0)
        .map((item, index) => (
            {
                ...article,
                id: String(index),
            }
        )),
    view: ArticleView.LIST,
};

export const isLoadingDarkList = Template.bind({});
isLoadingDarkList.args = {
    isLoading: true,
    articles: [],
    view: ArticleView.LIST,
};
isLoadingDarkList.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkList = Template.bind({});
DarkList.args = {
    articles: new Array(9)
        .fill(0)
        .map((item, index) => (
            {
                ...article,
                id: String(index),
            }
        )),
    view: ArticleView.LIST,
};
DarkList.decorators = [ThemeDecorator(Theme.DARK)];

export const isLoadingNormalPlate = Template.bind({});
isLoadingNormalPlate.args = {
    isLoading: true,
    articles: [],
    view: ArticleView.PLATE,
};

export const NormalPlate = Template.bind({});
NormalPlate.args = {
    articles: new Array(9)
        .fill(0)
        .map((item, index) => (
            {
                ...article,
                id: String(index),
            }
        )),
    view: ArticleView.PLATE,
};
export const isLoadingDarkPlate = Template.bind({});
isLoadingDarkPlate.args = {
    isLoading: true,
    articles: [],
    view: ArticleView.PLATE,
};
isLoadingDarkPlate.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkPlate = Template.bind({});
DarkPlate.args = {
    articles: new Array(9)
        .fill(0)
        .map((item, index) => (
            {
                ...article,
                id: String(index),
            }
        )),
    view: ArticleView.PLATE,
};
DarkPlate.decorators = [ThemeDecorator(Theme.DARK)];
