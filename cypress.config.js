const { defineConfig } = require('cypress');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
//const { pa11y } = require("@cypress-audit/pa11y");


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
  charts: true,
  reportPageTitle: 'custom-title',
  embeddedScreenshots: true,
  inlineAssets: true,
  saveAllAttempts: false,
  },


  chromeWebSecurity : false,
  experimentalSourceRewriting: true,

  e2e: {
   async setupNodeEvents(on, config) {
    on("before:browser:launch", (browser = {}, launchOptions) => {
      prepareAudit(launchOptions);
    });

    on("task", {
      lighthouse: lighthouse(),
     // pa11y: pa11y(console.log.bind(console)),
    });


  require('cypress-mochawesome-reporter/plugin')(on);
  allureWriter(on, config);
      
      return config
    
    },

    env: {
      allureReuseAfterSpec: true
  },

 // specPattern: "cypress/e2e/features/*.feature"

 baseUrl: "https://www.saucedemo.com/"

  },
});
