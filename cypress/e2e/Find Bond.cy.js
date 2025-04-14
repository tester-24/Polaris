/// <reference types="cypress" />

import 'cypress-xpath';
import { login } from './Login Polaris.cy';

describe('Find Bond', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('performs Find Bond actions', () => {
    // Call the login function from login.cy.js
    login();

    cy.wait(5000);
    // Polaris click
    cy.xpath("//img[@title='polaris logo']").should('be.visible').click();

    // Find Bond
    cy.xpath("//div[@class='bond_box_btn_wrap']//a[@class='btn_bond_main'][normalize-space()='Find Bonds']").should('be.visible').click();

});
});