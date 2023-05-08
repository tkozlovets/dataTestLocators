/// <reference types="cypress"/>

import * as errorMessage from '../../fixtures/example.json'

it('Quering elements', () => {
  cy.visit('http://localhost:8080/commands/actions')

  cy.get('#email1')
    .type('test@test.com')
    .should('have.value', 'test@test.com')
    .clear()
    .type('S{leftArrow}E{leftArrow}T{rightArrow}{rightArrow}{rightArrow}T' /* {delay: 500} */)
    .type('{selectall}{backspace}')
    .should('have.value', '')

  cy.get('textarea.action-disabled')
    .type('qweqwe', { force: true })

  cy.get('#password1')
    .focus()
    .should('have.class', 'focus')
    .prev()
    .should('have.attr', 'style', 'color: orange;')

  cy.get('#fullName1')
    .focus()
    .should('not.have.class', 'error')
    .blur()
    .should('have.class', 'error')
    .prev()
    .should('have.attr', 'style', 'color: red;')

  cy.get('#couponCode1')
    .type('Text')
    .closest('form')
    .submit()
    .siblings()
    .should('contain', 'Your form has been submitted!')

  cy.get('#couponCode1')
    .type('Text')
    .closest('form')
    .submit()
    .next()
    .should('contain', 'Your form has been submitted!')

  // cy.get('#action-canvas')
  // .click()
  // .click('topLeft')
  // .click('top')
  // .click('topRight')
  // .click('left')
  // .click('bottomLeft')
  // .click('bottom')
  // .click('bottomRight')
  // .click('right');

  cy.get('#action-canvas')
    .click(10, 10)

  cy.get('.btn.btn-lg.btn-primary')
    .click({ force: true })

  cy.get('.action-div')
    .dblclick()
    .next()
    .should('not.have.class', 'hidden')
    .clear()
    .type(errorMessage.email)

  cy.get('[data-placement="bottom"]')
    .click({ multiple: true })

  cy.get('.action-multiple-checkboxes [type="checkbox"]')
    .check()

  cy.get('.action-radios .radio input')
    .check({ force: true })

  cy.get('.form-control.action-select')
    .select('oranges')
    .should('have.value', 'fr-oranges')

  cy.get('#scroll-horizontal button')
    .should('not.be.visible')
    .scrollIntoView()
    .should('be.visible')

  cy.get('#scroll-horizontal')
    .scrollTo('right')

  // cy.get('.trigger-input-range')
  // .invoke('val', 100)
  // .trigger('change')
  // .next()
  // .should('have.text', '100')

  cy.get('.trigger-input-range')
    .click()
})
