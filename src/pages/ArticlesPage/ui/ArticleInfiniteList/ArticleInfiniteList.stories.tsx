import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Article, ArticleBlockType, ArticleType } from 'entities/Article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ArticleInfiniteList } from './ArticleInfiniteList';

const articles: Article[] = [
    {
        id: '1',
        title: 'TypeScript news',
        subtitle: 'TypeScript 5.0 и 4.9: оцениваем и сравниваем изменения.',
        img: 'https://img-c.udemycdn.com/course/750x422/3591648_7284_6.jpg',
        views: 1022,
        createdAt: '12.02.2023',
        user: {
            id: '1',
            username: 'Jane',
        },
        type: [
            ArticleType.FRONTEND,
        ],
        blocks: [
            {
                id: '1',
                type: ArticleBlockType.TEXT,
                title: 'Новый оператор satisfies',
                paragraphs: [
                    'Позволяет нам проверить соответствие выражения некоторому типу, не меняя сам тип. Это помогает при работе с объектами со смешанными типами данных.',
                    'Рассмотрим на примере:',
                ],
            },
            {
                id: '2',
                type: ArticleBlockType.CODE,
                code: 'type FormFields = "name" | "surname" | "age";\n\nconst data: Record<FormFields, number | string> = {\n    name: "name",\n    surname: "surname",\n    age: 21,\n}\n\nconst newAge = data.age * 2;\nconst nameUpperCase = data.name.toUpperCase();',
            },
            {
                id: '3',
                type: ArticleBlockType.TEXT,
                title: '',
                paragraphs: [
                    'Объект data имеет как числовые, так и строковые значения, поэтому при работе с этим объектом мы получаем следующие ошибки:',
                ],
            },
            {
                id: '4',
                type: ArticleBlockType.CODE,
                code: "The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type. \n\n\nProperty 'toUpperCase' does not exist on type 'string | number'.\nProperty 'toUpperCase' does not exist on type 'number'.",
            },
            {
                id: '5',
                type: ArticleBlockType.TEXT,
                title: 'Оптимизация TypeScript',
                paragraphs: [
                    'TypeScript версии 5.0 добавляет множество изменений в структуре кода, структуре данных и алгоритмических реализациях. Это позволяет ускорить не только работу TypeScript, но даже и его установку.',
                    'Рассмотрим на примере:',
                ],
            },
            {
                id: '6',
                type: ArticleBlockType.IMAGE,
                src: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/f69/cf0/dd9/f69cf0dd9982290b34166bd88d239d8a.png',
            },
            {
                id: '7',
                type: ArticleBlockType.TEXT,
                title: 'Функции-декораторы',
                paragraphs: [
                    'Это обыкновенные функции, которые позволяют добавить дополнительное поведение классу, методу, свойству.',
                    'Пример класса без декоратора:',
                ],
            },
            {
                id: '8',
                type: ArticleBlockType.CODE,
                code: 'class Person {\n  age: number = 0\n\n  changeAge() {\n    console.log("Logger: Func start")\n    console.log("changing age...")\n    console.log("Logger: Func end")\n  }\n}\n\nconst person = new Person();\nperson.changeAge()',
            },
            {
                id: '9',
                type: ArticleBlockType.TEXT,
                paragraphs: [
                    'Мы видим, что нам необходимо добавить логирование для метода, чтобы отследить его работу. В этом случае к нам на помощь приходят декораторы.',
                    'Пример декоратора:',
                ],
            },
            {
                id: '10',
                type: ArticleBlockType.CODE,
                code: 'function Logger<This, Args extends number[], Return>(\n    target: (this: This, ...args: Args) => Return, \n    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>\n) {\n  return function(this: This, ...args: Args) {\n    console.log("Logger: Func start")\n    const result = target.call(this, ...args)\n    console.log("Logger: Func end")\n\n    return result\n  }\n}',
            },
        ],
    },
    {
        id: '2',
        title: 'Как настроить Node.js Express сервер для React',
        subtitle: 'Руководство поможет вам разработать простое приложение на React и подключить его к серверу, созданному с использованием Node.js.',
        img: 'https://miro.medium.com/v2/resize:fit:365/1*Jr3NFSKTfQWRUyjblBSKeg.png',
        views: 722,
        createdAt: '01.03.2023',
        user: {
            id: '1',
            username: 'Jane',
        },
        type: [
            ArticleType.IT,
        ],
        blocks: [
            {
                id: '1',
                type: ArticleBlockType.TEXT,
                title: 'Необходимые условия',
                paragraphs: [
                    'Для успешного выполнения данного гайда будет полезно иметь следующее:',
                    '1) Предварительный опыт работы с Node.js, Express, npm и React.js.',
                    '2) Установленный Node.js.',
                    '3) Текстовый редактор',
                    '4) Веб-браузер, в данном случае Google Chrome.',
                ],
            },
            {
                id: '2',
                type: ArticleBlockType.IMAGE,
                title: 'Настройка структуры папок',
                src: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/d98/db3/c16/d98db3c1630fbb5f82949e79b75226a2.png',
            },
            {
                id: '3',
                type: ArticleBlockType.TEXT,
                paragraphs: [
                    'Первым шагом будет создание корневой папки для нашего приложения с именем express-react-app, в котором будут содержаться все файлы приложения. Затем мы создадим папку client, которая будет содержать все файлы React приложения.',
                    'Папка node_modules будет содержать все пакеты NPM для файла server.js. Папка node_modules будет автоматически создана при установке пакетов NPM.',
                    'Далее нам потребуется создать файл server.js. В этом файле будет размещен сервер Express, который будет выступать в качестве нашего бэкенда. Файл package.json будет автоматически сгенерирован, когда в терминале будет выполнена команда npm init -y.',
                ],
            },
            {
                id: '4',
                type: ArticleBlockType.TEXT,
                title: 'Создание React приложения',
                paragraphs: [
                    'Из терминала перейдите в корневую директорию с помощью команды cd и выполните следующие команды:',
                ],
            },
            {
                id: '5',
                type: ArticleBlockType.CODE,
                code: '$cd express-react-app\n$npx create-react-app client',
            },
        ],
    },
];

export default {
    title: 'shared/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
