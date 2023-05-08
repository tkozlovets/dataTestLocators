/// <reference types="cypress"/>

it.skip('Quering elements', () => {
  cy.visit('http://localhost:8080/commands/querying')

  cy.get('#query-btn').should('contain', 'Button')

  cy.get('li:contains("bananas")').should('contain', 'bananas')
  cy.contains('bananas').should('contain', 'bananas')
  cy.contains('li.third', 'bananas').should('contain', 'bananas')
  cy.get('#querying').contains('bananas').should('have.class', 'third')

  cy.get('.query-form').within(() => {
    cy.get('#inputEmail').should('have.attr', 'placeholder', 'Email')
    cy.get('#inputPassword').should('have.attr', 'placeholder', 'Password')

    // should be unreachable
    // cy.get('#inputName').should('have.attr', 'placeholder', 'Password');
  })

  cy.root().should('contain', 'bananas')

  cy.get('div.col-xs-5 form').within(() => {
    cy.root().should('have.class', 'query-form')
  })
})

it('Допоміжні команди для пошуку елементів', () => {
  cy.visit('http://localhost:8080/commands/traversal')

  cy.get('.traversal-breadcrumb.breadcrumb')
    .children('li')
    .eq(0)
    .should('contain', 'Home')

  cy.get('.traversal-breadcrumb.breadcrumb')
    .children('.active')
    .eq(0)
    .should('contain', 'Data')

  cy.get('.traversal-badge')
    .closest('ul')
    .should('have.class', 'list-group')

  cy.contains('John')
    .closest('table')
    .should('have.class', 'traversal-table')
    .and('contain', 'Doe')

  cy.get('.traversal-table td')
    .first()
    .should('contain', '1')

  cy.get('.traversal-table td')
    .last()
    .should('contain', 'Doe')

  cy.get('.traversal-disabled button')
    .first()
    .should('have.attr', 'disabled')
    .and('eq', 'disabled')

  cy.get('.traversal-ul')
    .contains('li', 'apples')
    .next()
    .should('contain', 'oranges')
    .next()
    .should('contain', 'bananas')

  cy.get('.traversal-table td')
    .first()
    .should('contain', '1')
    .next()
    .should('contain', 'Jane')
    .next()
    .should('contain', 'Lane')
  // .next() //should fail
  // .should('contain', '2')

  cy.get('.traversal-next-all')
    .contains('bananas')
    .nextAll()
    .should('have.length', '2')

  cy.get('#veggies')
    .nextUntil('#nuts')
    .should('have.length', '3')
    .and('contain', 'corn')
    .and('contain', 'carrots')
    .and('contain', 'cucumbers')

  cy.get('.traversal-disabled .btn.btn-default')
    .not('[disabled]')
    .should('be.enabled')

  cy.get('.traversal-mark')
    .parent()
    .should('contain', 'Morbi leo risus, porta ac consectetur ac, ')

  cy.contains('.active', 'About')
    .parent()
    .should('contain', 'Services')

  cy.get('.traversal-cite')
    .parents()
    .should('contain', 'To get parents DOM element ')

  cy.get('.traversal-cite')
    .parents('blockquote')
    .should('contain', 'Lorem ipsum dolor sit ame')

  cy.get('.pagination.traversal-pagination')
    .find('span')
    .last()
    .should('contain', '»')

  cy.get('.foods-list')
    .find('#nuts')
    .should('contain', 'Nuts')
})
