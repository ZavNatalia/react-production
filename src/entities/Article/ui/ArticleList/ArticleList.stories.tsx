import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Article, ArticleBlockType, ArticleView } from '../../model/types/article';
import { ArticleList } from './ArticleList';

const articles = [
    {
        id: '1',
        title: 'TypeScript news 2023',
        subtitle: 'TypeScript 5.0 и 4.9: оцениваем и сравниваем изменения.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Rufous-collared_sparrow_%28Zonotrichia_capensis_costaricensis%29_2.jpg/500px-Rufous-collared_sparrow_%28Zonotrichia_capensis_costaricensis%29_2.jpg',
        views: '1022',
        createdAt: '12.02.2023',
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
    },
    {
        id: '2',
        title: 'JavaScript news 2023',
        subtitle: 'Оцениваем и сравниваем изменения.',
        img: 'https://www.bethowen.ru/upload/medialibrary/a60/a609e3d12043827f66a8c1d5fba60e66.jpg',
        views: '1022',
        createdAt: '12.02.2024',
        type: [
            'IT',
            'SCIENCE',
        ],
        blocks: [
            {
                id: '1',
                type: ArticleBlockType.TEXT,
                title: 'Функции-декораторы',
                paragraphs: [
                    'Это обыкновенные функции, которые позволяют добавить дополнительное поведение классу, методу, свойству.',
                    'Пример класса без декоратора:',
                ],
            },
            {
                id: '2',
                type: ArticleBlockType.CODE,
                code: 'class Person {\n  age: number = 0\n\n  changeAge() {\n    console.log("Logger: Func start")\n    console.log("changing age...")\n    console.log("Logger: Func end")\n  }\n}\n\nconst person = new Person();\nperson.changeAge()',
            },
            {
                id: '3',
                type: ArticleBlockType.TEXT,
                paragraphs: [
                    'Мы видим, что нам необходимо добавить логирование для метода, чтобы отследить его работу. В этом случае к нам на помощь приходят декораторы.',
                    'Пример декоратора:',
                ],
            },
            {
                id: '4',
                type: ArticleBlockType.CODE,
                code: 'function Logger<This, Args extends number[], Return>(\n    target: (this: This, ...args: Args) => Return, \n    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>\n) {\n  return function(this: This, ...args: Args) {\n    console.log("Logger: Func start")\n    const result = target.call(this, ...args)\n    console.log("Logger: Func end")\n\n    return result\n  }\n}',
            },
        ],
    },
] as unknown as Article[];

export default {
    title: 'shared/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    articles,
    view: ArticleView.PLATE,
};
