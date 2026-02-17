import { getGreeting } from '../support/app.po';

describe('store-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Welcome/);
  });
});


describe('store', () => {
  beforeEach(() => cy.visit('/'));

  it('should have 3 games', () => {
    cy.contains('Settlers in the Can');
    cy.contains('Chess Pie');
    cy.contains('Purrfection');
  });
});
