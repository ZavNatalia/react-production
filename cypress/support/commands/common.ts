import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';
import { User } from '../../../src/entities/User';
import { selectByTestId } from '../../helpers/selectByTestId';

const apiUrl = Cypress.env('apiUrl') || 'http://localhost:8000';

export const login = (
    username: string = 'testuser',
    password: string = 'gfhjkm',
) => {
    return cy
        .request({
            method: 'POST',
            url: `${apiUrl}/login`,
            body: {
                username,
                password,
            },
        })
        .then(({ body }) => {
            window.localStorage.setItem(USER_LOCALSTORAGE_KEY, body.id);
            return body;
        });
};

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId));
};

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<User>;
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}
