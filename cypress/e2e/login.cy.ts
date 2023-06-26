describe("Login", () => {
  it("Load Pages", () => {
    cy.visit("/login");
    cy.get("input#email").should("exist");
    cy.get("button[type=submit]").should("exist");

    cy.get("input#password").should("exist");
    cy.get("input#password").type("123456");
    cy.get("input#password[type=password]").should("exist");
    cy.get("button#showPassword").should("exist");
    cy.get("button#showPassword").click();
    cy.get("input#password[type=text]").should("exist");
  });

  it("Login", () => {
    cy.Login();
  });

  it("Invald Login", () => {
    const email = "john_doe1@gmail.com";
    const password = "123456";

    cy.visit("/login");
    cy.get("input#email").type(email);
    cy.get("input#password").type(password);
    cy.get("button[type=submit]").click();

    cy.get("div.swal2-html-container").should(
      "contain.text",
      "Invalid credentials"
    );
  });

  it("User no active Login", () => {
    const email = "jane_doe@gmail.com";
    const password = "123456";

    cy.visit("/login");
    cy.get("input#email").type(email);
    cy.get("input#password").type(password);
    cy.get("button[type=submit]").click();

    cy.get("div.swal2-html-container").should(
      "contain.text",
      "User is not active"
    );
  });

  it("Required field login", () => {
    cy.visit("/login");
    cy.get("input#email").clear().blur();
    cy.get("input#password").clear().blur();
    cy.get("p#email-error").should(
      "contain.text",
      "Correo electronico requerido"
    );
    cy.get("p#password-error").should("contain.text", "Contraseña requerida");
    cy.get("button[type=submit]").should("be.disabled");
  });

  it("No page login", () => {
    cy.Login();
    cy.visit("/login");
    cy.url().should("include", "/");
    cy.visit("/");
    cy.url().should("include", "/");
  });

  it("Redirect to login", () => {
    cy.visit("/profile");
    cy.url().should("include", "/login");

    cy.visit("/");
    cy.url().should("include", "/login");

    cy.visit("/pokemon/1");
    cy.url().should("include", "/login");
  });
});
