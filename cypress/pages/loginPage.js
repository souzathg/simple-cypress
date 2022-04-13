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
    cy.get(".actions > .button").should("contain", "Cadastrar")
  }

}

export default LoginPage;
