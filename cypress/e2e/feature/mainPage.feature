@regression @mainPage
Feature: Main test good practices

  Background: Visit and login with valid credencials
    Given I visit the saucedemo web page
    When I login better with valid credentials for the standar_user
    Then I check that the page should "contain" the text "Products"

    @smoke
    Scenario: Verify Main page content
      Given I check that the element with data test "shopping-cart-link" should have the status "be.visible"
      When I check that the element with data test "inventory-list" should have the status "be.visible"
      And I check that the element with data test "product-sort-container" should have the status "be.visible"
      And I verify footers text
      And I check linkedin url
      And I check facebook url
      Then I check twitter url

    Scenario: Verify sorting by price
      Given I check that the price for the product "Sauce Labs Onesie" is "7.99"
      And I check that the price for the product "Sauce Labs Fleece Jacket" is "49.99"
      And I check that the active sorts option is "Name (A to Z)"
      And I check that the first product of the list contain "Sauce Labs Backpack"
      And I check that the first product of the list contain "29.99"
      When I select the option "Price (low to high)" from the sorting dropdown
      And I check that the first product of the list contain "Sauce Labs Onesie"
      And I check that the first product of the list contain "7.99"
      When I select the option "Price (high to low)" from the sorting dropdown
      And I check that the first product of the list contain "Sauce Labs Fleece Jacket"
      And I check that the first product of the list contain "49.99"
      And I check that the first product of the list contain "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office."
