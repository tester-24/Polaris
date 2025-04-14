/// <reference types="cypress" />

import 'cypress-xpath';
import { login } from './Login Polaris.cy';

describe('IBO Transaction', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('performs IBO Transaction actions', () => {
    // Call the login function from login.cy.js
    login();

    cy.wait(5000);
    cy.get('#navbarDropdownMenuLink').click();
    cy.get('a[href="/myTransaction"]').click();
    cy.wait(8000);

  // Modify Bid
  cy.xpath("//a[normalize-space()='NCD']").click();
// cy.xpath("//a[contains(@class, 'filter-button') and contains(text(), 'Modify Bid')]")
 // .click()
 // .should('be.visible');
  });
});