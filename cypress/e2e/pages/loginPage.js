import { CommonPage } from "./commonPage";

export class LoginPage extends CommonPage{

  // Function non parameterized
  typeStandardUser() {
    cy.get('[data-test="username"]').should('be.empty').type('standard_user').should('have.value', 'standard_user');
  }

  typeLockedOutUser() {
    cy.get('[data-test="username"]').should('be.empty').type('locked_out_user').should('have.value', 'locked_out_user');
  }

  typePerformanceGlitchUser() {
    cy.get('[data-test="username"]').should('be.empty').type('performance_glitch_user').should('have.value', 'performance_glitch_user');
  }

  typeErrorUser() {
    cy.get('[data-test="username"]').should('be.empty').type('error_user').should('have.value', 'error_user');
  }


  typeSecretSaucePassword () {
    cy.get('[data-test="password"]').should('be.empty').type('secret_sauce').should('have.value', 'secret_sauce');
  }

  //-----------------------------------------------------------------------//

  // Functions parameterized
  typeUserName (userName) {
    cy.get('[data-test="username"]', {timeout:8000}).should('be.empty').type(userName).should('have.value', userName);
  }

  typePassword (password) {
    cy.get('[data-test="password"]').should('be.empty').type(password).should('have.value', password);
  }

  typeOnInputByDataTest (dataTest, Text) {
    cy.get('[data-test='+dataTest+']').should('be.empty').type(Text).should('have.value', Text)
  }

  clickLoginButton () {
    cy.get('[data-test="login-button"]').click();
  }

  checkLoginLogo (status) {
    cy.get('.login_logo').should(status);
  }

  loginWithValidCredentials(){
    this.typeStandardUser();
    this.typeSecretSaucePassword();
    this.clickLoginButton();
  }

  betterLoginWithValidCredentials(){
    this.typeOnInputByDataTest('username', 'standard_user');
    this.typeOnInputByDataTest('password', 'secret_sauce');
    this.clickLoginButton();
  }
}
