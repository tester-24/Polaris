/// <reference types="cypress"/>

import 'cypress-xpath';

describe.only('template spec', () => {
  it('passes', () => {
    cy.viewport(1280, 720);
    cy.wait(2000);
    cy.visit('https://space.jainam.in/#/?app=Polaris&returnUrl=');
    cy.wait(2000);

  // 1. Login page
  cy.xpath("//input[@placeholder='Enter User Id / Mobile Number']").type("1056");
  cy.xpath("//button[normalize-space()='Continue']").click();
  cy.xpath("//input[@placeholder='Enter Password']").type("Nifty@16000");
  cy.xpath("//button[normalize-space()='Continue']").click();

  // Enter OTP
  cy.xpath("//input[@id='pin1']").type("1");
  cy.xpath("//input[@id='pin2']").type("2");
  cy.xpath("//input[@id='pin3']").type("3");
  cy.xpath("//input[@id='pin4']").type("4");
  cy.wait(5000);

    // 2. Search Client
    cy.xpath('//input[@id="txtSearch"]').type("j33");
    cy.xpath('//div[@class="search-broker-icon"]').click();

    // 5. Polaris click
    cy.xpath("//img[@title='polaris logo']").should('be.visible').click();

    // 6. Find Bond
    cy.xpath("//div[@class='bond_box_btn_wrap']//a[@class='btn_bond_main'][normalize-space()='Find Bonds']").should('be.visible').click();

    cy.xpath("//img[@title='polaris logo']").should('be.visible').click();

    // 7. Explore IBO
    cy.xpath("//a[normalize-space()='Explore IBO']").should('be.visible').click();

    // 8. Homepage all category click
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

    // 9. Search function
    cy.xpath("//img[@title='polaris logo']").should('be.visible').click();
    cy.xpath("//i[@class='fa fa-search']").click();
    cy.xpath("//input[@id='txtSearch']").type("small finance");
    cy.xpath("//a[normalize-space()='Search']").click();


    // 11. Click on the "My Transaction" submenu item
    cy.wait(1000);
    cy.get('#navbarDropdownMenuLink').click();
    cy.get('a[href="/myTransaction"]').click();
    cy.wait(8000);

  // 12. Modify Bid
  cy.xpath("//a[normalize-space()='NCD']").click();
 // cy.xpath("//a[contains(@class, 'filter-button') and contains(text(), 'Modify Bid')]")
 // .click()
 // .should('be.visible');

  cy.xpath("//img[@title='polaris logo']").should('be.visible').click();

  cy.xpath("//div[@class='bond_box_btn_wrap']//a[@class='btn_bond_main'][normalize-space()='Find Bonds']").should('be.visible').click();

    // 13. Gov. Securities click
    cy.xpath("//a[normalize-space()='Govt. Securities']").should('be.visible').click();

    // 14. t-bill, gsec and sdl click
    cy.xpath("//a[normalize-space()='Govt. Securities']").trigger('mouseover');
    cy.wait(1000);
    cy.xpath("//a[normalize-space()='T-Bills']").click({ force: true });
    cy.xpath("//a[normalize-space()='G-Sec']").click({force: true});
    cy.xpath("//a[normalize-space()='SDL']").click({force: true});

    // 16. Download Form
    cy.xpath("//img[@title='polaris logo']").should('be.visible').click();
    cy.xpath("//div[@class='bond_box_btn_wrap']//a[@class='btn_bond_main'][normalize-space()='Find Bonds']").click();
    cy.xpath("//a[normalize-space()='IBO']").click();
    cy.xpath("(//a[@title='Apply'])[1]").click({ force: true });
    cy.wait(3000);
    cy.xpath("//a[@class='btn popup-button'][normalize-space()='Print']", { timeout: 3000 }).click();
    cy.xpath("//a[@class='btn popup-button'][normalize-space()='Cancel']").click();
    cy.xpath("//a[normalize-space()='Capital Gain 54EC']").click();
    cy.xpath("//a[normalize-space()='RBI Bonds']").click();

    /*
    // Verify menu functionality
        cy.xpath("//ul/li/a[text()='Bonds']").should('be.visible').click();
        cy.xpath('//div[@class="search-term-flex ng-star-inserted"]', { timeout: 10000 }).should('be.visible');
          
        cy.xpath("//ul/li/a[text()='All']").should('be.visible').click();
        cy.xpath('//div[@class="search-term-flex ng-star-inserted"]', { timeout: 10000 }).should('be.visible');

        cy.xpath("//ul/li/a[text()='IBO']").should('be.visible').click();
        cy.xpath('//div[@class="search-term-flex ng-star-inserted"]', { timeout: 10000 }).should('be.visible');

        cy.xpath("//ul/li/a[text()='Govt. Securities']").should('be.visible').click();
        cy.xpath('//div[@class="search-term-flex ng-star-inserted"]', { timeout: 10000 }).should('be.visible');

        cy.xpath("//ul/li/a[text()='Capital Gain 54EC']").should('be.visible').click();
        cy.xpath('//div[@class="search-term-flex ng-star-inserted"]', { timeout: 10000 }).should('be.visible');

        cy.xpath("//ul/li/a[text()='RBI Bonds']").should('be.visible').click();
        cy.xpath('//div[@class="search-term-flex ng-star-inserted"]', { timeout: 10000 }).should('be.visible');


  cy.wait(1000);
      cy.get('#navbarDropdownMenuLink').click();

    // Click on the "My Transaction" submenu item
    cy.get('a[href="/myTransaction"]').click();

    cy.get('.filter-button').each(($el, index, $list) => {
      cy.wrap($el).click();  // Click the current menu item
      cy.wait(1000)   
    
     });  

     cy.xpath('//img[@title="polaris logo"]').click()

     const tabs = [
      '#ibo-tab',
      '#return-tab',
      '#saving-tab',
      '#banks-tab',
      '#sector-tab',
      '#gains-tab',
      '#bills-tab',
      '#fds-tab',
      '#nri-tab',
      '#nbfc-tab'
    ];

    // Iterate through each tab and click
    tabs.forEach((tabSelector) => {
      cy.get(tabSelector)
      .scrollIntoView()
        .should('be.visible') // Ensure the tab is visible
        .click(); // Click the tab

      // Optionally verify the tab's corresponding content is displayed
      //cy.get(`${tabSelector}-pane`).should('be.visible');
    })
    cy.wait(1000);
      cy.get('#navbarDropdownMenuLink').click();
      cy.get('a[href="/holding"]').click();

      cy.xpath('//li[@class="nav-item dropdown user ml-md-3 ng-star-inserted"]').click();
cy.xpath('//label[normalize-space()="My Profile"]').click();

cy.xpath('//div[@class="info_wrap"]').within(() => {
  // Extract the name
  cy.get('h4.main_profile_name_wrap').invoke('text').then((name) => {
    cy.log('Name:', name); // Log the name
  });
cy.wait(5000);
  // Extract the ID
  cy.xpath("//h6[normalize-space()='1126 | Individual']")
  .should('be.visible') // Ensure the element is visible
  .invoke('text') // Extract the text content
  .then((text) => {
    cy.log('Extracted Text:', text); // Log the text to Cypress logs
    console.log('Extracted Text:', text); // Log the text to the browser console
  });
});
*/
  });
});