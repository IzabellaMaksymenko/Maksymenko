describe('Items page E2E test', () => {
  beforeEach(() => {
    cy.intercept('GET', '/products', {
      statusCode: 200,
      body: [
        {
          id: 1,
          title: 'Integration Test',
          description: 'Test Description',
          img: 'img.png',
        },
      ],
    }).as('getItems');

    cy.visit('/');
  });

  it('should load items page and display mocked item', () => {
    cy.wait('@getItems');

    cy.contains('Integration Test').should('exist');
  });
});
