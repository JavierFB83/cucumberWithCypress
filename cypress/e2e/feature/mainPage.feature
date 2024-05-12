Feature: Main test good practices

  Background: Visit and login with valid credencials
    Given I visit "https://www.saucedemo.com/"
    When I login with valid credentials for the standar_user
    Then I check that the page should "contain" the text "Products"

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
