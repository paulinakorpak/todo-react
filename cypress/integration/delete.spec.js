describe('Removing items tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should remove item', () => {
    cy.getBySel('items-list')
      .getBySel('item')
      .should('have.length', 0);

    cy.getBySel('add-item-input')
      .type('Todo example')
      .type('{enter}');

    cy.getBySel('items-list')
      .getBySel('item')
      .should('have.length', 1)
      .first()
      .getBySel('remove-item')
      .click();

    cy.getBySel('items-list')
      .getBySel('item')
      .should('have.length', 0);
  });
});
