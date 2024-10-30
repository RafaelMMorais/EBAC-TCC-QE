const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl: "http://localhost:80/"
    //baseUrl: "http://lojaebac.ebaconline.art.br/"
    baseUrl: "http://lojaebac.ebaconline.art.br/wp-json"
  },
});
