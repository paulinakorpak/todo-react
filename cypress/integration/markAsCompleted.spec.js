describe('Marking items as completed tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should mark item as completed/uncompleted', () => {
    cy.getBySel('add-item-input')
      .type('Todo example')
      .type('{enter}');

    cy.getBySel('items-list')
      .getBySel('item')
      .first()
      .getBySel('completed-checkbox')
      .click()
      .parent()
      .should('have.class', 'checked text-decoration-line-through');

    cy.getBySel('items-list')
      .getBySel('item')
      .first()
      .getBySel('completed-checkbox')
      .click()
      .parent()
      .should('not.have.class', 'checked text-decoration-line-through');
  });
});
