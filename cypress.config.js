const { defineConfig } = require('cypress');
const path = require('path')

module.exports = defineConfig({
  e2e: {
    // Outras configurações do Cypress
    reporter: 'mocha-awesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },
    //baseUrl: "http://localhost:80/"
    baseUrl: "http://lojaebac.ebaconline.art.br/"
    //baseUrl: "http://lojaebac.ebaconline.art.br/wp-json"
  },
});


