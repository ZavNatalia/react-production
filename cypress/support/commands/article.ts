import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Testing Article',
    subtitle: 'TypeScript 5.0 и 4.9: оцениваем и сравниваем изменения.',
    img: 'https://blog.logrocket.com/wp-content/uploads/2020/08/8-ways-deploy-react-app-free.png',
    views: 1022,
    createdAt: '12.02.2023',
    userId: '1',
    type: [
        'FRONTEND',
    ],
    blocks: [],
};
export const createArticle = (article?: Article) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { Authorization: 'asfgh' },
        body: article ?? defaultArticle,
    }).then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'asfgh' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;

            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
