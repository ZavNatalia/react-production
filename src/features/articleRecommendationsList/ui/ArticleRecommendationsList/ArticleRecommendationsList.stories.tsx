import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Article } from '@/entities/Article';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

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
        'SCIENCE',
        'POLITIC',
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

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = [
    StoreDecorator({
        scrollRestoration: { scroll: { about: 0 } },
    }),
];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' },
            ],
        },
    ],
};
