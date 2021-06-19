describe('Adding items tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add new item', () => {
    const todoTitle = 'Todo example';

    cy.getBySel('items-list')
      .getBySel('item')
      .should('have.length', 0);

    cy.getBySel('add-item-input')
      .type(todoTitle)
      .type('{enter}');

    cy.getBySel('items-list')
      .getBySel('item')
      .should('have.length', 1)
      .first()
      .contains(todoTitle);
  });

  it('should not add new empty item', () => {
    cy.getBySel('items-list')
      .getBySel('item')
      .should('have.length', 0);

    cy.getBySel('add-item-input')
      .type('{enter}');

    cy.getBySel('items-list')
      .getBySel('item')
      .should('have.length', 0);
  });
});
