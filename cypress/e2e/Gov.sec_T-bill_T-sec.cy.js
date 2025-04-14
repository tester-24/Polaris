/// <reference types="cypress" />

import 'cypress-xpath';
import { login } from './Login Polaris.cy';

describe('GOV. Sec, T-Bill, T-Sec', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('performs Various actions', () => {
    // Call the login function from login.cy.js
    login();
    cy.wait(5000);
    cy.xpath("//img[@title='polaris logo']").should('be.visible').click();

    cy.xpath("//div[@class='bond_box_btn_wrap']//a[@class='btn_bond_main'][normalize-space()='Find Bonds']").should('be.visible').click();

    // Gov. Securities click
    cy.xpath("//a[normalize-space()='Govt. Securities']").should('be.visible').click();

    // t-bill, gsec and sdl click
    cy.xpath("//a[normalize-space()='Govt. Securities']").trigger('mouseover');
    cy.wait(1000);
    cy.xpath("//a[normalize-space()='T-Bills']").click({ force: true });
    cy.xpath("//a[normalize-space()='G-Sec']").click({force: true});
    cy.xpath("//a[normalize-space()='SDL']").click({force: true});

});
});