# Buenas prácticas para casos de prueba
@regression @betterLogin
Feature: Login test good practices

  Background: visit the login sauce demo page
      Given I visit "https://www.saucedemo.com/"

    @smoke
    Scenario: Login with valid credentials
      Given I type on the credential input "username" the text value "standard_user"
      When I type on the credential input "password" the text value "secret_sauce"
      And I check that the element with data test "login-button" should have the status "be.visible"
      And I check that the page should "not.contain" the text "Products" 
      And I check that the page should "not.contain" the text "Sauce Labs Backpack"   
      And I check that the page should "not.contain" the text "Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy"  
      And I check the status for the login logo is 'be.visible'
      And I check that the element with class ".login_logo" should have the content "Swag Labs"
      Then I check that the url value not contain the text "inventory.html"
      And I click on the login button
      And I check the status for the login logo is 'not.exist'
      And I check that the element with data test "username" should have the status "not.exist"
      And I check that the element with data test "password" should have the status "not.exist"
      And I check that the page should "contain" the text "Products" 
      And I check that the page should "contain" the text "Sauce Labs Backpack"   
      And I check that the page should "contain" the text "Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy"   
      Then I check that the url value contain the text "inventory.html"

    @smoke
    Scenario: Login with wrong username credential
      Given I type on the credential input "username" the text value "user not exist"
      When I type on the credential input "password" the text value "secret_sauce"
      And I check that the element with data test "login-button" should have the status "be.visible"
      And I check that the page should "not.contain" the text "Epic sadface: Username and password do not match any user in this service" 
      And I check the status for the login logo is 'be.visible'
      And I check that the element with class ".login_logo" should have the content "Swag Labs"
      And I check that the element with data test "error" should have the status "not.exist"
      And I click on the login button
      And I check that the element with data test "error" should have the status "be.visible"
      And I check that the page should "contain" the text "Epic sadface: Username and password do not match any user in this service"   
      And I check that the page should "not.contain" the text "Products" 
      And I check that the page should "not.contain" the text "Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy"   
      Then I check that the url value not contain the text "inventory.html"

    Scenario: Login with empty username credential
      Given I type on the credential input "password" the text value "secret_sauce"
      And I check that the element with data test "username" should have the value ""
      And I check that the element with data test "login-button" should have the status "be.visible"
      And I check that the page should "not.contain" the text "Epic sadface: Username is required" 
      And I check the status for the login logo is 'be.visible'
      And I check that the element with class ".login_logo" should have the content "Swag Labs"
      And I check that the element with data test "error" should have the status "not.exist"
      And I click on the login button
      And I check that the element with data test "error" should have the status "be.visible"
      And I check that the page should "contain" the text "Epic sadface: Username is required" 
      And I check that the page should "not.contain" the text "Products" 
      And I check that the page should "not.contain" the text "Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy"   
      Then I check that the url value not contain the text "inventory.html"

    Scenario: Login with empty password credential
      Given I type on the credential input "username" the text value "standard_user"
      And I check that the element with data test "password" should have the value ""
      And I check that the element with data test "login-button" should have the status "be.visible"
      And I check that the page should "not.contain" the text "Epic sadface: Password is required" 
      And I check the status for the login logo is 'be.visible'
      And I check that the element with class ".login_logo" should have the content "Swag Labs"
      And I check that the element with data test "error" should have the status "not.exist"
      And I click on the login button
      And I check that the element with data test "error" should have the status "be.visible"
      And I check that the page should "contain" the text "Epic sadface: Password is required" 
      And I check that the page should "not.contain" the text "Products" 
      And I check that the page should "not.contain" the text "Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy"   
      Then I check that the url value not contain the text "inventory.html"

    Scenario: Login with empty username and password credentials
      And I check that the element with data test "username" should have the value ""
      And I check that the element with data test "password" should have the value ""
      And I check that the element with data test "login-button" should have the status "be.visible"
      And I check that the page should "not.contain" the text "Epic sadface: Password is required" 
      And I check the status for the login logo is 'be.visible'
      And I check that the element with class ".login_logo" should have the content "Swag Labs"
      And I check that the element with data test "error" should have the status "not.exist"
      And I click on the login button
      And I check that the element with data test "error" should have the status "be.visible"
      And I check that the page should "contain" the text "Epic sadface: Username is required" 
      And I check that the page should "not.contain" the text "Products" 
      And I check that the page should "not.contain" the text "Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy"   
      Then I check that the url value not contain the text "inventory.html"
         