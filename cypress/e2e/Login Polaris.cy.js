import 'cypress-xpath';

export const login = () => {
    cy.viewport(1280, 720);
    cy.wait(2000);
    cy.visit('https://space.jainam.in/#/?app=Polaris&returnUrl=');
    cy.wait(2000);

  // Login page
  cy.xpath("//input[@placeholder='Enter User Id / Mobile Number']").type("1126");
  cy.xpath("//button[normalize-space()='Continue']").click();
  cy.xpath("//input[@placeholder='Enter Password']").type("J@inam$789");
  cy.xpath("//button[normalize-space()='Continue']").click();

  // Enter OTP
  cy.xpath("//input[@id='pin1']").type("8");
  cy.xpath("//input[@id='pin2']").type("5");
  cy.xpath("//input[@id='pin3']").type("2");
  cy.xpath("//input[@id='pin4']").type("0");
  cy.wait(5000);

    // 2. Search Client
    cy.xpath('//input[@id="txtSearch"]').type("j33");
    cy.xpath('//div[@class="search-broker-icon"]').click();

};

