import 'cypress-xpath';

export const login = () => {
    cy.viewport(1280, 720);
    cy.wait(2000);
    cy.visit('https://space.jainam.in/#/?app=Polaris&returnUrl=');
    cy.wait(2000);

  // Login page
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

};