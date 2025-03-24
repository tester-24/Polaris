/// <reference types="cypress"/>

import 'cypress-xpath';

describe.only('Polaris Report', () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
      cy.visit('https://space.jainam.in/#/?app=Polaris&returnUrl=');
      cy.wait(2000);
  
      // 1. Login
      cy.xpath("//input[@placeholder='Enter User Id / Mobile Number']").type("DK2100433");
      cy.xpath("//button[normalize-space()='Continue']").click();
      cy.xpath("//input[@placeholder='Enter Password']").type("Jainam@147");
      cy.xpath("//button[normalize-space()='Continue']").click();
  
      // Enter OTP (Note: Hardcoding OTP is generally not recommended for production tests)
      cy.xpath("//input[@id='pin1']").type("2");
      cy.xpath("//input[@id='pin2']").type("4");
      cy.xpath("//input[@id='pin3']").type("9");
      cy.xpath("//input[@id='pin4']").type("7");
    });
  
    
      it('IBO Explore - Navigate to Explore Page', () => {
        cy.xpath("//a[normalize-space()='Explore IBO']").should('be.visible').click();
      });
    
      it('IBO Bidding Page - Access Bidding Section', () => {
        cy.xpath("//ul/li/a[text()='IBO']").should('be.visible').click();
        cy.wait(3000);
        cy.xpath("(//a[@title='Apply'][normalize-space()='Apply'])[1]", { timeout: 5000 }).should('be.visible').click();
      });
    
      it('Bid Submit - Submit a Bid Successfully', () => {
        cy.xpath("//label[@for='fruit1']").click();
        cy.xpath("//button[normalize-space()='Submit']").click();
      });
    });
