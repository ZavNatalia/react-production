import { ArticleBlockType, ArticleType } from '../consts/consts';
import { ArticleDetailsSchema } from '../../model/types/articleDetailsSchema';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';

const data = {
    id: '1',
    title: 'TypeScript news',
    subtitle: 'TypeScript 5.0 и 4.9: оцениваем и сравниваем изменения.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png',
    views: 1022,
    createdAt: '12.02.2023',
    type: [
        ArticleType.IT,
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
};

describe('articleDetailsSlice.test', () => {
    test('test get article service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            error: undefined,
        };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending,
        )).toEqual(state);
    });
    // test('test get article service fulfilled', () => {
    //     const state: DeepPartial<ArticleDetailsSchema> = {
    //         isLoading: true,
    //     };
    //     expect(articleDetailsReducer(
    //         state as ArticleDetailsSchema,
    //         fetchArticleById.fulfilled('1', ''),
    //     )).toEqual({
    //         isLoading: false,
    //         data,
    //     });
    // });
});
