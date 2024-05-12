///Locators on Main Page

const shopingCartButton = '[data-test="shopping-cart-link"]';
const productCard = '[data-test="inventory-item"]';
const image = '.inventory_item_img';
const titleProductName = '.inventory_item_label';
const price = '[data-test="inventory-item-price"]';
const productDescription = '[data-test="inventory-item-description"]';
const productList = '[data-test="inventory-list"]';
const sortContainner = '[data-test="product-sort-container"]';
const footer = '[data-test="footer"]';
const linkedin = '[data-test="social-linkedin"]';
const facebook = '[data-test="social-facebook"]';
const twitter = '[data-test="social-twitter"]';

export class MainPage {

  clickOnShoppigCart() {
    cy.get(shopingCartButton).should('have.class', 'shopping_cart_link').click();
  }

  clickOnProductName(productName) {
    cy.get(productCard).contains(titleProductName, productName).click();
  }

  clickOnProductImage(productName) {
    cy.get(productCard).contains(image, productName).click();
  }

  clickOnAddToCart(productName) {
    cy.get(productCard).contains('.btn btn_primary btn_small btn_inventory ', productName).click();
  }

  checkPrice(productName, productPrice) {
    cy.get(productCard).contains(productDescription, productName).find(price).should('contain', productPrice);
  }

  checkFooter() {
    cy.get(footer).should('be.visible').and('contain', '© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
  }

  checkLinkedin() {
    cy.get(linkedin).should('have.attr', 'href').and('include', 'linkedin.com/company/sauce-labs');
  }

  checkFacebook() {
    cy.get(facebook).should('have.attr', 'href').and('include', 'facebook.com/saucelabs');
  }

  checkTwitter() {
    cy.get(twitter).should('have.attr', 'href').and('include', 'twitter.com/saucelabs');
  }

  getFirstProductFromProductList() {
    return cy.get(productList).children().first();
  }

  checkFirstProductContent(productContent) {
    this.getFirstProductFromProductList().should('contain', productContent);
  }

  getActiveSortingOption() {
    return cy.get('.select_container').find('[data-test="active-option"]');
  }

  checkActiveSortingOption(activeSortingOption) {
    this.getActiveSortingOption().should('have.text', activeSortingOption)
  }

  selectSortingOption(sortOption) {
    this.checkActiveSortingOption('Name (A to Z)');
    cy.get(sortContainner).select(sortOption);
    this.checkActiveSortingOption(sortOption);
    };
    
}