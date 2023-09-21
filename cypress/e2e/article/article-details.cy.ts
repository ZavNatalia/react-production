let currentArticleId = '';
describe('User go to the article details page', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            if (article) {
                currentArticleId = article.id;
                cy.visit(`articles/${article.id}`);
            }
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('and see article details', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('and see article recommendations list', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('and leave the comment', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('new comment');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('and rate the article', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback test text');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
    it('and rate the article (example with fixtures)', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback test text');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
