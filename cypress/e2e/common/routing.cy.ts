import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('User is not authorized', () => {
        it('Go to the main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('AboutPage')).should('exist');
        });
        it('Go to the user page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Go to a non-existent route', () => {
            cy.visit('/profilenonexist/');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('User is authorized', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Go to the user page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Go to the Articles page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
