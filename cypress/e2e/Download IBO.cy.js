/// <reference types="cypress" />

import 'cypress-xpath';
import { login } from './Login Polaris.cy';

describe('Download IBO', () => {
  before(() => {
    Cypress.on('uncaught:exception', () => false);
  });

  it('performs Download IBO actions', () => {
    login();
    cy.wait(5000);

    // Navigation
    cy.xpath("//img[@title='polaris logo']").should('be.visible').click();
    cy.xpath("//div[@class='bond_box_btn_wrap']//a[@class='btn_bond_main'][normalize-space()='Find Bonds']").click();
    cy.xpath("//a[normalize-space()='IBO']").click();

    // Either Apply button or No IBO message
    cy.get("div[class='item mt-5 pt-5 ng-star-inserted'] h4")
      .should('exist')
      .then(($element) => {
        const text = $element.text().trim();

        if (text === 'Apply') {
          cy.wrap($element).click({ force: true });
          cy.wait(3000);
          cy.xpath("//a[@class='btn popup-button'][normalize-space()='Print']").click();
          cy.xpath("//a[@class='btn popup-button'][normalize-space()='Cancel']").click();
        } else if (text === 'NO IBO Available !!') {
          cy.log('No IBO Available!');
        }
      });

    // Continue the rest of the test
    cy.xpath("//a[normalize-space()='Capital Gain 54EC']").click();
    cy.xpath("//a[normalize-space()='RBI Bonds']").click();
  });
});
