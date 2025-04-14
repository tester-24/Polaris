/// <reference types="cypress" />

import 'cypress-xpath';
import { login } from './Login Polaris.cy';

describe('Explore IBO and Category', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('performs Explore actions', () => {
    // Call the login function from login.cy.js
    login();

    cy.wait(5000);
    cy.xpath("//img[@title='polaris logo']").should('be.visible').click();

    // Explore IBO
    cy.xpath("//a[normalize-space()='Explore IBO']").should('be.visible').click();

    // Homepage all category click
    cy.xpath("//img[@title='polaris logo']").should('be.visible').click();
    cy.wait(1000);
    cy.xpath("//a[@id='return-tab']").click();
    cy.xpath("//a[@id='ibo-tab']").click();
    cy.xpath("//a[@id='saving-tab']").click();
    cy.xpath("//a[@id='banks-tab']").click();
    cy.xpath("//a[@id='sector-tab']").click();
    cy.xpath("//a[@id='gains-tab']").click();
    cy.xpath("//a[@id='bills-tab']").click();
    cy.xpath("//a[@id='fds-tab']").click();
    cy.xpath("//a[@id='nri-tab']").click();
    cy.xpath("//a[@id='nbfc-tab']").click();

  });
});