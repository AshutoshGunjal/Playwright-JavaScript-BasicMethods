// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests', 

   /* Maximum Time one test can run for*/
   timeout: 30 * 1000,
   expect: {
    timeout: 5000
   },
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    browserName: 'webkit',
    // baseURL: 'http://127.0.0.1:3000',
    headless: false
  },
});

