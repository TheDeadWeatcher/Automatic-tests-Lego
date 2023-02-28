class SearchBar {
  get loopIcon() {
    return cy.get('[data-test="search-input-button"]');
  }

  get searchResultTitle() {
    return cy.get(".TransformedMessagestyles__SearchResultsText-sc-1pp5hbb-0 > span");
  }
}

export default new SearchBar();
