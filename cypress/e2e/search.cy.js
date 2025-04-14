/// <reference types="cypress" />

import 'cypress-xpath';
import { login } from './Login Polaris.cy';

describe('IBO Search', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('performs search actions', () => {
    // Call the login function from login.cy.js
    login();

// Search function
    cy.wait(5000);
    cy.xpath("//img[@title='polaris logo']").should('be.visible').click();
    cy.xpath("//i[@class='fa fa-search']").click();
    cy.xpath("//input[@id='txtSearch']").type("small finance");
    cy.xpath("//a[normalize-space()='Search']").click();

  });
  });