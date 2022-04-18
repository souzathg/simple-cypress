class LoginPage {
  go() {
    cy.visit("");
    cy.get("h1").should("contain", "Se estiver no trem ou onibus");
  }

  clickSignupButton() {
    cy.get(".button").contains("EXPERIMENTE AGORA").click();
  }

  verifySignupPage() {
    cy.url().should("include", "/users/sign_up");
    cy.get(".actions > .button").should("contain", "Cadastrar");
  }

  verifyLoginPage() {
    cy.url().should("include", "users/sign_in");
    cy.get(".actions > .button").should("contain", "Log in");
  }

  fillForm(credentials) {
    cy.get("#user_email").type(credentials.user);
    cy.get("#user_password").type(credentials.pass);
  }

  clickLoginBtn() {
    cy.get(".actions > .button").click();
  }
}

export default LoginPage;
