describe('Base tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should show header, form and filters', () => {
    cy.getBySel('header').should('be.visible');
    cy.getBySel('add-item-input').should('be.visible');
    cy.getBySel('filter-all').should('be.visible');
    cy.getBySel('filter-active').should('be.visible');
    cy.getBySel('filter-done').should('be.visible');
  });
});
