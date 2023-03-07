/// <reference types="cypress" />

import SearchBar from "../support/pages/search-obj.cy.js";


describe("E2E - Search Bar - Lego", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.acceptEnterPopups();
  });

  it("should open home page and verify url also verify visible of search icon", () => {
    cy.url().should("eq", "https://www.lego.com/pl-pl");
    SearchBar.clickLoopIcon();
  });
  it("Should type search phrase and verify search result title also verify number of product", () => {
    cy.typePhrase("star wars vader{enter}", 1);
    cy.url().should("eq", "https://www.lego.com/pl-pl/search?q=star+wars+vader");
    SearchBar.searchResultTitle.should("be.visible");
    SearchBar.searchResultTitle.should("have.text", "star wars vader");
    SearchBar.firstProductResult.its("length").should("eq", 24);
    SearchBar.firstProductResult.should('have.length', 24);
    SearchBar.firstProductResult.then(($iteam) =>{
      const count =$iteam.length
      SearchBar.firstProductResult.should('have.length', (count));
    });
 
   });

   it('Should verify number of product also verify title of first product, verify title and number of add to cart', () => {
    cy.typePhrase("star wars vader{enter}", 1);
    SearchBar.firstProductResult.eq(0).invoke("text").as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Pluszowy Darth Vader™");
    SearchBar.firstProductResult.as("productCount");
    cy.get("@productCount").should("have.length", 24);
    

   });

  

});
