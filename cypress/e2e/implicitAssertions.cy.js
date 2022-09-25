///<reference types="cypress"/>

  it('passes', () => {
    cy.visit('http://localhost:8080/commands/assertions');

    cy.get('.table.table-bordered.assertion-table tr').eq(3)
    .should('have.class', 'success');

    cy.get('.table.table-bordered.assertion-table tr').eq(3)
    .should('have.attr', 'class');

    cy.get('.table.table-bordered.assertion-table tr td').eq(3)
    .should('have.text', 'Column content');

    cy.get('.table.table-bordered.assertion-table tr td').eq(3)
    .should('have.html', 'Column content');

    cy.get('.table.table-bordered.assertion-table tr td').eq(3)
    .should('contain', ' content'); // або Column content

    cy.get('.table.table-bordered.assertion-table tr td').eq(3)
    .should('include.text', 'Column content');// або ' content'

    cy.get('.table.table-bordered.assertion-table tr td').eq(3)
    .should('not.contain', '1eqwer123r');

    cy.get('.table.table-bordered.assertion-table tr th').eq(5)
    .should('contain', '3');

    cy.get('.table.table-bordered.assertion-table tr th').eq(5)
    .invoke('text')
    .then(parseFloat)
    .should('be.greaterThan', 2)

    cy.get('.table.table-bordered.assertion-table tr th').eq(5)
    .invoke('text')
    .then(parseFloat)
    .should('eq', 3);

    cy.visit('http://localhost:8080/commands/querying');
    cy.get('#inputName').type('Hello').should('have.value', 'Hello');

    cy.visit('http://localhost:8080/commands/assertions');
    cy.get('.table.table-bordered.assertion-table tr td').eq(5)
    .should('have.css', 'background-color')
    .and('eq', 'rgb(223, 240, 216)');

    cy.get('.table.table-bordered.assertion-table tr td').eq(5)
    .should('be.visible');
  })
