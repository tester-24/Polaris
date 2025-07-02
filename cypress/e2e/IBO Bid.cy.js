/// <reference types="cypress"/>

import 'cypress-xpath';

describe.only('IBO BID', () => {
  it('passes', () => {
    cy.viewport(1280, 720);
    cy.wait(2000);
    cy.visit('https://space.jainam.in/#/?app=Polaris&returnUrl=');
    cy.wait(2000);

  // 1. Login page
  cy.xpath("//input[@placeholder='Enter User Id / Mobile Number']").type("DK2100433");
  cy.xpath("//button[normalize-space()='Continue']").click();
  cy.xpath("//input[@placeholder='Enter Password']").type("Jainam@147");
  cy.xpath("//button[normalize-space()='Continue']").click();

  // Enter OTP
  cy.xpath("//input[@id='pin1']").type("2");
  cy.xpath("//input[@id='pin2']").type("4");
  cy.xpath("//input[@id='pin3']").type("9");
  cy.xpath("//input[@id='pin4']").type("7");

  cy.xpath("//a[normalize-space()='Explore IBO']").should('be.visible').click();

  // 3. IBO Bidding page
  cy.wait(2000);
  cy.xpath("//ul/li/a[text()='IBO']").should('be.visible').click();
  cy.wait(3000);
  cy.xpath("(//a[@title='Apply'][normalize-space()='Apply'])[1]", {timeout:5000}).should('be.visible').click();
  cy.wait(3000);

  // 4. Bid Submit
  cy.xpath("//label[@for='fruit1']").click();
  cy.xpath("//button[normalize-space()='Submit']").click();
});
});
