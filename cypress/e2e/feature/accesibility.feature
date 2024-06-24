@accesibility
Feature: Accesibility tests

  Background: visit the BBVA page and decline the cookies
      Given I visit "https://www.bbva.es/personas.html"
      When I click on the button named "Declinar"
    
    Scenario: Test the accesibility in all the screen
      Then I test the accesibility in all the screen

    Scenario: Test the accesibility on the element "Acceso"
      Then I test the accesibility on the element with locator "[title='Desplegar acceso']"
