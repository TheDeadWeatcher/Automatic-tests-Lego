
class SearchBar {

  // get loopIcon() {
  //   return cy.get('[data-test="search-input-button"]');
  // }

  clickLoopIcon () {
    const loop = cy.get('[data-test="search-input-button"]');
    loop.click();
  }

    
  

  get searchResultTitle() {
    return cy.xpath('//span[text()="star wars vader"]');
    
  }

  get firstProductResult (){
    return cy.get('[data-test="product-item"]');
  }
}

export default new SearchBar();
