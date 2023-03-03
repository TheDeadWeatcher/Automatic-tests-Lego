
class SearchBar {

  clickLoopIcon () {
    const loop = cy.get('[data-test="search-input-button"]');
    loop.click();
  }


  get searchResultProducts() {
    return cy.get('[data-test="product-leaf-title"]');
  }

  get searchResultTitle() {
    return cy.xpath('//span[text()="star wars vader"]');
    
  }

  get firstProductResult (){
    return cy.get('[data-test="product-item"]');
  }
}

export default new SearchBar();
