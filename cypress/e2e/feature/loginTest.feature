@regression @loginTest
Feature: Login succesfull

Scenario: Login Standard user and valid password
  Given I visit "https://www.saucedemo.com/"
  When I type standard_user on the Username credential input
  And I type secret_sauce on the password credential input
  Then I click on the login button

Scenario: Login Locked Out User and valid password
  Given I visit "https://www.saucedemo.com/"
  When I type Locked_Out_User on the Username credential input
  And I type secret_sauce on the password credential input
  Then I click on the login button


Scenario: Login with parameterized User and valid password
  Given I visit "https://www.saucedemo.com/"
  When I type "Galicia" on the Username credential input
  And I type "1234" on the password credential input
  Then I click on the login button


Scenario: Login with parameterized inputs and text values
  Given I visit "https://www.saucedemo.com/"
  When I type on the credential input "username" the text value "Alfredo"
  When I type on the credential input "password" the text value "claroquesi"
  Then I click on the login button




