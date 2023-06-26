describe("Home", () => {
  it("Load Home", () => {
    cy.Login();
    cy.get("h2").should("contain.text", "Bulbasaur");
  });

  it("Verify button Pagination", () => {
    cy.Login();
    cy.get("button").should("contain.text", "Anterior");
    cy.get("button").should("contain.text", "Siguiente");

    cy.getByCy("paginator-next").first().click();
    cy.get("h2").should("contain.text", "Metapod");

    cy.getByCy("paginator-previus").first().click();
    cy.get("h2").should("contain.text", "Bulbasaur");
  });

  it("Click card", () => {
    cy.Login();
    cy.get("h2").should("contain.text", "Bulbasaur");

    cy.get('a[href="/pokemon/1"]').click();
    cy.get("h1").should("contain.text", "Bulbasaur");
  });

  it("Click button back", () => {
    cy.Login();
    cy.get("h2").should("contain.text", "Bulbasaur");

    cy.get('a[href="/pokemon/1"]').click();
    cy.get("h1").should("contain.text", "Bulbasaur");

    cy.get('a[href="/"]').click();
    cy.get("h2").should("contain.text", "Ivysaur");
  });

  it("Show Menu", () => {
    cy.Login();
    cy.get("button#profile-menu").should("exist");
    cy.get("button#profile-menu").click();

    // redirect to profile
    cy.get('a[href="/profile"]').should("exist");
    cy.get('a[href="/profile"]').click();
    cy.url().should("include", "/profile");

    // redirect home
    cy.get('a[href="/"]').click();
    cy.url().should("include", "/");

    // logout
    cy.get("button#profile-menu").click();
    cy.get("button#logout").click();
    cy.url().should("include", "/login");
  });

  it("Redirect to login", () => {
    cy.visit("/");
    cy.url().should("include", "/login");
  });
});
