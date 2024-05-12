import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { MainPage } from "../pages/mainPage"

let mainPage = new MainPage();

Given("I click on the shopping cart button", () => {
  mainPage.clickOnShoppigCart();
});

Given("I click on the title name for the product named {string}", (productName) => {
  mainPage.clickOnProductName(productName);
});

Given("I click on the image for the product named {string}", (productName) => {
  mainPage.clickOnProductImage(productName);
});

Given("I click on the add to cart button for the product named {string}", (productName) => {
  mainPage.clickOnAddToCart(productName);
});

Given("I check that the price for the product {string} is {string}", (productName, productPrice) => {
  mainPage.checkPrice(productName, productPrice);
});

Given("I verify footers text", () => {
  mainPage.checkFooter();
});

Given("I check linkedin url", () => {
  mainPage.checkLinkedin();
});

Given("I check facebook url", () => {
  mainPage.checkFacebook();
});

Given("I check twitter url", () => {
  mainPage.checkTwitter();
});


Given("I check that the active sorts option is {string}", (activeSortingOption) => {
  mainPage.checkActiveSortingOption(activeSortingOption);
});

Given("I check that the first product of the list contain {string}", (productContent) => {
  mainPage.checkFirstProductContent(productContent);
});

Given("I select the option {string} from the sorting dropdown", (productContent) => {
  mainPage.selectSortingOption(productContent);
});

