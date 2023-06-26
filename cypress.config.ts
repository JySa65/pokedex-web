import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: process.env.NEXTAUTH_URL || "http://localhost:3000",
  },
});
