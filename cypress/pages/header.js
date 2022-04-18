class Header {
  login() {
    cy.get(".column > .button").click();
  }

  verifyLogoutButton() {
    cy.get(".icon > .fas").should("be.visible");
  }
}

export default Header;
