export const setRate = (
    startCount: number = 5,
    feedback: string = 'feedback',
) => {
    cy.getByTestId(`StarRating.${startCount}`).click();
    cy.getByTestId('RatingCard.Input').type(feedback);
    cy.getByTestId('RatingCard.Send').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(startCount: number, feedback: string): Chainable<void>;
        }
    }
}
