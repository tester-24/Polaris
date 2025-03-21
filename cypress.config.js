const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  projectId: "u18ku8",
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    enableCode:false,
    embeddedvideos: true,
    video: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      specPattern: 'cypress/e2e/**/*.cy.js';
      excludeSpecPattern: ["**/examples/*", "**/templates/*"];
      supportFile: 'cypress/support/commands.js';
    },
  },
});