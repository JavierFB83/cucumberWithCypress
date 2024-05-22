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

    checkElementStateByDataTest (elementName, status) {
      cy.get(`[data-test="${elementName}"]`).should(status);
    }

    checkContentByClass (className, content) {
      cy.get(className).should('contain', content);
    }

    checkElementValueByDataTest (elementName, value) {
      cy.get(`[data-test="${elementName}"]`).should('have.value', value);
    }  
  }
  
  
  
  
  
  
  
  
  
  