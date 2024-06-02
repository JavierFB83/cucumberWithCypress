const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { defineConfig } = require('cypress');
const cypressOnFix = require('cypress-on-fix');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  projectId: 'ncsghx',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    failOnStatusCode: false,
   // baseUrl: 'https://jsonplaceholder.typicode.com',
    chromeWebSecurity: false,
    specPattern: ['**/*.feature', '**/apiTests/*/*.js'],
    defaultCommandTimeout: 10000,
    numTestsKeptInMemory: 10,
    env: {
      snapshotOnly: true,
      requestMode: true
    },
    async setupNodeEvents(on, config) {
       // "cypress-on-fix" is required because "cypress-mochawesome-reporter" and "cypress-cucumber-preprocessor" use the same hooks
       on = cypressOnFix(on);
       require('cypress-mochawesome-reporter/plugin')(on);
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({ plugins: [createEsbuildPlugin(config)] })
      );
      return config;
    },
  },
})