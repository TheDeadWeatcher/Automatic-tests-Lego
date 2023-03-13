// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })


  Cypress.Commands.add("acceptEnterPopups", () => {
    cy.get('[data-test="age-gate-grown-up-cta"]').click();
    cy.get('[data-test="cookie-accept-all"]').click();
    // cy.clearAllCookies();
  });

  Cypress.Commands.add("typePhrase", (text, delayValue) => {
    cy.get('[data-test="search-input-button"]').type(text, {
      delay: delayValue});
  });

  Cypress.Commands.add("selectProduct", productName => {
    cy.get('[data-test="product-leaf-title"] > span').each(($el, index, $list) =>{
        if($el.text().includes(productName)) {
          cy.wrap($el).click();
     }
    });
  });

  // Cypress.Commands.add("clickBtn", (selector) => {
  //   const sel = typeof selector;
  //   sel.click(); 
  // }); pomysl jak zrobic comandsa pod clikanie w jaki kolwiek selector 


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })