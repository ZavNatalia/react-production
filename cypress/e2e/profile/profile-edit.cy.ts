let profileId: string;
describe('User go to the profile page', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            cy.visit(`profile/${data.id}`);
            profileId = data?.id;
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('and the profile page loads successfully', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });
    it('and edit the profile data', () => {
        const newFirstname = 'Vasya';
        const newLastname = 'Petrov';

        cy.updateProfile(newFirstname, newLastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newFirstname);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
    });
});
