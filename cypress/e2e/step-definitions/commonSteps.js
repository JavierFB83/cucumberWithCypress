import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { CommonPage } from "../pages/commonPage"

let commonPage = new CommonPage();

Given("I visit {string}", (url) => {
  commonPage.visitLink(url);
});

When("I check that the page should {string} the text {string}", (status, text) => {
  commonPage.checkBodyText(status, text);
  // Status accept the values: contain , not.contain
})

Then("I check that the url value contain the text {string}", (urlValue) => {
  commonPage.checkUrlValue(urlValue);
})

Then("I check that the url value not contain the text {string}", (urlValue) => {
  commonPage.checkUrlNotValue(urlValue);
})

Given("I check that the element with data test {string} should have the status {string}", (elementDataTest, status) => {
  commonPage.checkElementStateByDataTest(elementDataTest, status);
})

Given("I check that the element with class {string} should have the content {string}", (className, content) => {
  commonPage.checkContentByClass(className, content);
})

Given("I check that the element with data test {string} should have the value {string}", (elementDataTest, value) => {
  commonPage.checkElementValueByDataTest(elementDataTest, value);
})

Given ("I visit my url", () => {
  commonPage.visitBaseUrl()
})

Given ("I visit the saucedemo web page", () => {
  commonPage.visitSauceDemo()
})

Given ("If the button {string} exist i click on it", (button) => {
commonPage.clickButtonIfExist(button)
})

Then ('I click on the button named {string} and wait for api call {string}', (buttonName, apiCall) => {
  commonPage.clickButtonByNameWaitCookies(buttonName, apiCall)
})

Then ('I click on the button named {string}', (buttonName) => {
  commonPage.clickButtonByName(buttonName)
})

Then ('I wait {int} seconds', (seconds) => {
  commonPage.waitXSeconds(seconds)
})

Then ('I intercept the api call {string} with the alias {string}', (apiCall, aliasApiCall) => {
  commonPage.interceptApiCallAddAlias(apiCall, aliasApiCall)
})

Then ('I wait {int} miliseconds for the api call with the alias {string}', (time, aliasApiCall) => {
  commonPage.waitApiCallByAlias(time, aliasApiCall)
})


