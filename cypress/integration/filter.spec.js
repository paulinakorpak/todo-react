describe('Filtering items tests', () => {
  beforeEach(() => {
    cy.visit('/');

    const todoTitle = 'Todo example';

    cy.getBySel('add-item-input')
      .type(todoTitle)
      .type('{enter}')
      .type(todoTitle)
      .type('{enter}')
      .type(todoTitle)
      .type('{enter}');
  });

  it('should filter active items', () => {
    cy.getBySel('items-list')
      .getBySel('item')
      .should('have.length', 3);

    cy.getBySel('items-list')
      .getBySel('item')
      .first()
      .getBySel('completed-checkbox')
      .first()
      .click();

    cy.getBySel('filter-active')
      .click();

    cy.getBySel('items-list')
      .getBySel('item')
      .should('have.length', 2);
  });

  it('should filter done items', () => {
    cy.getBySel('items-list')
      .getBySel('item')
      .should('have.length', 3);

    cy.getBySel('items-list')
      .getBySel('item')
      .first()
      .getBySel('completed-checkbox')
      .first()
      .click();

    cy.getBySel('filter-done')
      .click();

    cy.getBySel('items-list')
      .getBySel('item')
      .should('have.length', 1);
  });

  it('should filter all items', () => {
    cy.getBySel('items-list')
      .getBySel('item')
      .should('have.length', 3);

    cy.getBySel('items-list')
      .getBySel('item')
      .first()
      .getBySel('completed-checkbox')
      .first()
      .click();

    cy.getBySel('filter-all')
      .click();

    cy.getBySel('items-list')
      .getBySel('item')
      .should('have.length', 3);
  });
});
