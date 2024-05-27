describe('Testing POST and PUT on Typicode', () => {

  it('Send first POST', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts/',
      {
        userID: 1, 
        title: 'API testing with cypress', 
        body: 'First POST'
      }
    )
  });

  it('check log with cy.log on first POST', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts/',
      {
        userID: 1, 
        title: 'API testing with cypress', 
        body: 'First POST'
      }
    ).then((response) => {
      cy.log(JSON.stringify(response.body));
    })
  });

  it('check response on first POST', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts/',
      {
        userID: 1, 
        title: 'API testing with cypress', 
        body: null
      }
    ).then((response) => {
      const postBody = response.body
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(201);
      expect(postBody.title).to.be.a('string');
      expect(postBody).to.have.property('title', 'API testing with cypress');
      expect(postBody).to.have.property('body', null);
    })
  });

  it('check deep contain on POST', () => {
    const postData = {
      userID: 1, 
      body: 'Send body in a constant',
      title: 'API testing with cypress', 
    }
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts/', postData,
      ).then((response) => {
      const postBody = response.body
      expect(response.status).to.eq(201);
      expect(response.body).to.deep.include(postData);
    })
  });
 
  it('Send first PUT', () => {
    cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/10', 
    {
      "userId": 1,
      "id": 10,
      "title": "Update by PUT method",
      "body": "Changes for my body"
    }
    )
  })

   
  it('Check response after PUT', () => {
    cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/2', 
    {
      "userId": 5,
      "title": "Update by PUT method",
      "body": "Changes for my body"
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('title', 'Update by PUT method');
      expect(response.body.body).to.eq('Changes for my body');
      expect(response.body.userId).to.eq(5);
      expect(response.body.id).to.eq(2);
    })
  })

  it('Send "POST" and check all the values from the the response', () => {
    const putBody =  {
      userId:5 ,
      id: 5,
      title: 'news', 
      body: 'first post'
    }
    cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/5',  putBody).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.deep.eq(putBody);
      });
   });

   it('Send first PATCH and check the response', () => {
    cy.request('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', 
      {
       userId:1 ,
       id: 5,
       title: 'news', 
       body: 'first post',
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('title', 'news');
        expect(response.body.body).to.eq('first post');
        expect(response.body.userId).to.eq(1);
        expect(response.body.id).to.eq(5);
      });
   });

   it('Send first DELETE method', () => {
    cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
   });

   it('Add the body in a const and check all the response body with to.deep.include', () => {
    cy.request('https://api.restful-api.dev/objects')
   })

   it('Add the body in a const and check all the response body with to.deep.include', () => {
    const postData = {
      "name": "Objeto creado por Javier Flores",
      "data": {
        "year": 2024,
        "price": 10,
        "CPU model": "Api testing with Cypress",
        "Hard disk size": "1 TB"
      }
    };
    cy.request('POST', 'https://api.restful-api.dev/objects', postData)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.deep.include(postData);
        cy.wrap(response.body.id).as('objectID');
      });
    cy.get('@objectID').then((objectID) => {
      cy.log(objectID);
      cy.request('GET', `https://api.restful-api.dev/objects/${objectID}`)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.deep.include(postData);
      });
    });
   });

   it('PUT in our created object', () => {
    const postData = {
      "name": "PUT change",
      "data": {
        "year": 2050,
        "price": 5,
        "CPU model": "Api testing with Cypress",
        "Hard disk size": "1 TB"
      }
    };
    cy.request('PUT', `https://api.restful-api.dev/objects/ff8081818fb998eb018fbb5ca1e40601`, postData)
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.include(postData);
    });
   });

   it('PATCH in our created object', () => {
    const postData = {
      "name": "PATCH change",
      "data": {
        "CPU model": "Happy API testing with Cypress",
      }
    };
    cy.request(`https://api.restful-api.dev/objects/ff8081818fb998eb018fbb5ca1e40601`)
    cy.request('PATCH', `https://api.restful-api.dev/objects/ff8081818fb998eb018fbb5ca1e40601`, postData)
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.include(postData);
    });
   });

   it('Add the body in a const and check all the response body with to.deep.include', () => {
    //Declaramos las variables a usar en los metodos POST, PUT y PATCH
    const postData = {
      "name": "Objeto creado por Javier Flores",
      "data": {
        "year": 2024,
        "price": 10,
        "CPU model": "Api testing with Cypress",
        "Hard disk size": "1 TB"
      }
    }
    const putData = {
      "name": "PUT update",
      "data": {
        "year": 2024,
        "price": 10,
        "CPU model": "PUT with Cypress",
        "Hard disk size": "1 TB"
      }
    }
    const patchData = {
      "name": "PATCH change",
      "data": {
        "CPU model": "Happy API testing with Cypress",
      }
    }
// Aqui hacemos un POST para crear un Objeto
    cy.request('POST', 'https://api.restful-api.dev/objects', postData)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.deep.include(postData);
// Con cy.wrap guardamos el valor de la ID para usarlo más adelante
        cy.wrap(response.body.id).as('objectID');
      });
    cy.get('@objectID').then((objectID) => {
      cy.log(objectID);
      cy.request('GET', `https://api.restful-api.dev/objects/${objectID}`)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.deep.include(postData);
      });
// Aquí hacemos un PUT para comprobar que los datos se sobreescriben
    cy.request('PUT', `https://api.restful-api.dev/objects/${objectID}`, putData)
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.include(putData);
    });
    cy.wait(1000);
// Aquí hacemos un PATCH para comprobar que podemos modificar solo algunos datos, (pero en esta API actúa como un PUT)
    cy.request('PATCH', `https://api.restful-api.dev/objects/${objectID}`, patchData)
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.include(patchData);
    cy.request(`https://api.restful-api.dev/objects/${objectID}`)
    });
// Aquí hacemos un DELETE para borrar el objeto creado
    cy.request('DELETE', `https://api.restful-api.dev/objects/${objectID}`) .then((response) => {
      expect(response.body.message).to.eq(`Object with id = ${objectID} has been deleted.`);
    })
   });
  });
});