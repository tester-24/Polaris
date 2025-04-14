/// <reference types="cypress" />

import 'cypress-xpath';
import { login } from './Login Polaris.cy';

describe('Download IBO', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('performs Download IBO actions', () => {
    // Call the login function from login.cy.js
    login();

    cy.wait(5000);
    // Download Form
    cy.xpath("//img[@title='polaris logo']").should('be.visible').click();
    cy.xpath("//div[@class='bond_box_btn_wrap']//a[@class='btn_bond_main'][normalize-space()='Find Bonds']").click();
    cy.xpath("//a[normalize-space()='IBO']").click();
    cy.xpath("(//a[@title='Apply'])[1]").click({ force: true });
    cy.wait(3000);
    cy.xpath("//a[@class='btn popup-button'][normalize-space()='Print']", { timeout: 3000 }).click();
    cy.xpath("//a[@class='btn popup-button'][normalize-space()='Cancel']").click();
    cy.xpath("//a[normalize-space()='Capital Gain 54EC']").click();
    cy.xpath("//a[normalize-space()='RBI Bonds']").click();

  });
});