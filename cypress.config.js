const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.lego.com/pl-pl",
    includeShadowDom: true,
    chromeWebSecurity: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false
  },
});
