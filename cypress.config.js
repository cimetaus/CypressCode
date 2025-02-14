const { defineConfig } = require("cypress");
 
module.exports = defineConfig({
  projectId: '4adpqm',
  e2e: {
    supportFile: false,
    specPattern: 'cypress/e2e/**/*.spec.js',
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});