/// <reference types="cypress"/>
import 'cypress-xpath';

describe('Polaris IBO Bidding Flow', () => {
  it('Logs in and completes IBO Bidding flow', () => {
    cy.viewport(1280, 720);
    cy.visit('https://space.jainam.in/#/?app=Polaris&returnUrl=');
    cy.wait(2000);

    // 1. Login page
    cy.log('Logging in');
    cy.xpath("//input[@placeholder='Enter User Id / Mobile Number']")
      .should('be.visible')
      .type("DK2100433");

    cy.xpath("//button[normalize-space()='Continue']").click();
    cy.xpath("//input[@placeholder='Enter Password']").should('be.visible').type("Jainam@147");
    cy.xpath("//button[normalize-space()='Continue']").click();

    // 2. Enter OTP
    cy.log('Entering OTP');
    cy.xpath("//input[@id='pin1']").type("2");
    cy.xpath("//input[@id='pin2']").type("4");
    cy.xpath("//input[@id='pin3']").type("9");
    cy.xpath("//input[@id='pin4']").type("7");

    // 3. Navigate to IBO Page
    cy.log('Clicking Explore IBO');
    cy.xpath("//a[normalize-space()='Explore IBO']").should('be.visible').click();
    cy.wait(2000);

    // 4. IBO Bidding page
    cy.log('Navigating to IBO Bidding page');
    cy.xpath("//ul/li/a[text()='IBO']").should('be.visible').click();
    cy.wait(3000);

    // 5. Apply for IBO Bid
    cy.log('Applying for IBO Bid');
    cy.xpath("(//a[@title='Apply'][normalize-space()='Apply'])[1]").should('be.visible').click();
    cy.wait(3000);

    // 6. Submit Bid
    cy.log('Submitting the Bid');
    cy.xpath("//label[@for='fruit1']").should('be.visible').click();
    cy.xpath("//button[normalize-space()='Submit']").should('be.visible').click();
  });
});