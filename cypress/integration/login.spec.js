import LoginPage from "../pages/loginPage";

const login = new LoginPage();

describe("Login correto", () => {
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
