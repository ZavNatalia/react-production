export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfilePageHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfilePageHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: '1' },
        body: {
            id: '4',
            firstname: 'test',
            lastname: 'user',
            age: 20,
            currency: 'EUR',
            country: 'Kyrgyzstan',
            city: 'Bishkek',
            username: 'test IX',
            avatar: 'https://www.test-and-go.com/bundles/centraltesttestandgo/images/avatar-7.png?v7',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;

            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
