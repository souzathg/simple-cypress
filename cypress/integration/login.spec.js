import LoginPage from "../pages/loginPage";
import Header from "../pages/header";

const login = new LoginPage();
const header = new Header();
const credentials = {
  user: Cypress.env("user"),
  pass: Cypress.env("pass")
};

describe("Open Sign-up page", () => {
  it("Given that I'm at the login page", () => {
    login.go();
  });

  it('When I click in "EXPERIMENTE AGORA"', () => {
    login.clickSignupButton();
  });

  it('Then I see a new page with the message "Pronto para se cadastrar?"', () => {
    login.verifySignupPage();
  });
});

describe("Successful login", () => {
  it("Given that I'm at the login page", () => {
    login.go();
  });

  it("And I click the Login button", () => {
    header.login();
    login.verifyLoginPage();
  });

  it("When I fill the form with valid credentials", () => {
    login.fillForm(credentials);
  });

  it("And click the login button", () => {
    login.clickLoginBtn();
  });

  it("Then I should see the logout button", () => {
    header.verifyLogoutButton();
  });
});
