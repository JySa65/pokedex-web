/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("Login", () => {
  const email = "john_doe@gmail.com";
  const password = "123456";

  cy.visit("/login");
  cy.get("input#email").type(email);
  cy.get("input#password").type(password);
  cy.get("button[type=submit]").click();

  cy.url().should("include", "/");
});

Cypress.Commands.add("getByCy", (value) => {
  return cy.get(`[data-cy=${value}]`);
});
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
