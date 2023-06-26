declare namespace Cypress {
  interface Chainable {
    // Global
    getByCy(value: string): Chainable<JQuery<HTMLElement>>;
    // SignIn page
    Login(): Chainable<void>;
  }
}
