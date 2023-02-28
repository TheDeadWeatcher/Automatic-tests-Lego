/// <reference types="cypress"/>
import SearchBar from "../support/pages/search-obj.cy.js";
import HomePage from "../support/pages/home-obj.cy";

describe("E2E - Search Bar - Lego", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.acceptEnterPopups();
  });

  it("should open home page and verify url and verify visible of search icon", () => {
    cy.url().should("eq", "https://www.lego.com/pl-pl");
    SearchBar.loopIcon.click();
  });
  it("Should type search phrase and verify search result title", () => {
    cy.searchPhrase("star wars vader {enter}", 1);
    console.log(SearchBar.searchResultTitle);
    //SearchBar.searchResultTitle().should('have.string', 'star wars vader');
  });
});