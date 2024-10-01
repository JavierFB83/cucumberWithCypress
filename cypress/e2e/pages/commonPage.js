export class CommonPage {
    /*
    En los archivos de "Pages" Creamos nuestras funciones para que sean usadas en los steps-definitions
    En la Clase CommonPage vamos a tener ubicadas todas las funciones que se puedan usar en más de una página de la web a testear
  */
    visitLink(url) {
      cy.visit(url);
    }

    visitBaseUrl() {
      cy.visit(Cypress.config('baseUrl'));
    }

    visitSauceDemo() {
      cy.visit("https://www.saucedemo.com/");
    }
    
    checkBodyText(status, text) {
      cy.get('body').should(status, text);
    }

    clickButtonIfExist(button) {
      let buttonByDataTest = `[data-test="${button}"]`
      cy.get('body').then((body) => {
        if (body.find("buttonByDataTest")) {
          cy.get(buttonByDataTest).click();
        }
      });
    } 

    /*
Aqui he dejado 2 funciones sin parametrizar (checkUrlValue y checkUrlNotValue)
que comprueban si una url contiene un texto o no, esto se podría parametrizar
pero así tambien estaría bien
*/
    checkUrlValue(urlValue) {
      cy.url().should('include', urlValue);
    }

    checkUrlNotValue(urlValue) {
      cy.url().should('not.include', urlValue);
    }

    checkUrlValueStatus(status, urlValue) {
      cy.url().should(status, urlValue)
    }

    checkElementStateByDataTest (elementName, status) {
      cy.get(`[data-test="${elementName}"]`).should(status);
    }

    checkContentByClass (className, content) {
      cy.get(className).should('contain', content);
    }

    checkElementValueByDataTest (elementName, value) {
      cy.get(`[data-test="${elementName}"]`).should('have.value', value);
    }  

    clickButtonByNameWaitCookies (buttonName, apiCall) {
      cy.intercept(apiCall).as('cookiesLoad');
      cy.wait('@cookiesLoad', {timeout: 2000});
      cy.contains(buttonName).click();
    }

    clickButtonByName (buttonName) {
      cy.contains('button', buttonName).click();
    }

    clickButtonByNameWithTimeout (buttonName, timeoutParameter) {
      cy.contains('button', buttonName, {timeout:timeoutParameter}).click();
    }

    waitXSeconds (seconds) {
      cy.wait(seconds);
    }

    /// Función para testear accesibilidad
    testAccesibilityInScreen () {
      cy.injectAxe();
      cy.checkA11y();
    }

    testAccesibilityOnElement (elementLocator) {
      cy.injectAxe();
      cy.checkA11y(elementLocator)
    }

    // API test
    interceptApiCallAddAlias (apiCall, alias) {
      cy.intercept(apiCall).as(alias);
    }

    waitApiCallByAlias(time, aliasApiCall) {
      cy.wait('@'+ aliasApiCall, {timeout: time});
    }
  }
  
  
  
  
  
  
  
  
  
  