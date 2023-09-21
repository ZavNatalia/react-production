import { EditableProfileCard } from '@/features/editableProfileCard';
import { TestProvider } from '@/shared/lib/tests/componentRender/componentRender';

const USER_ID = '1';

describe('User go to the EditableProfileCard', () => {
    it('clear firstname and change lastname, firstname is required field, get error', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestProvider
                options={{
                    initialState: {
                        user: {
                            authData: {
                                id: USER_ID,
                            },
                        },
                    },
                }}
            >
                <EditableProfileCard id={USER_ID} />
            </TestProvider>,
        );
        cy.getByTestId('EditableProfilePageHeader.EditButton').click();
        cy.getByTestId('ProfileCard.firstname').clear();
        cy.getByTestId('ProfileCard.lastname').clear().type('Doe');
        cy.getByTestId('EditableProfilePageHeader.SaveButton').click();
    });
});
