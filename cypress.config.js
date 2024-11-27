const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://mcstaging.novey.com.pa/novey_panama/',
    setupNodeEvents(on, config) {
      // configuración adicional si es necesaria
    },

    testIsolation: false,
  },
})
