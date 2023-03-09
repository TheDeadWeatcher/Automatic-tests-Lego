class HomePage {



  get topNav() {
    return cy.get(".MainBarstyles__Container-sc-1cg7sjw-1");
  }

  get mainSlider() {
    return cy.get(
      '[data-test="hero-banner-bg-image"] > [data-test="product-leaf-image"] > .Imagestyles__Img-sc-1qqdbhr-0'
    );
  }


  get recommendetSection() {
    return cy.get('[data-test="product-recommended"]');
  }

  get bestsellerSection() {
    return cy.get("#blta591157bda5bb6f0");
  }

  get footer() {
    return cy.get('[data-test="footer"] > :nth-child(1)');
  }

  get subscribeInput() {
    return cy.get('[data-test="input-with-button-input"]');
  }

  get footerSocialLinks() {
    return cy.get('[data-test="footer-social-links"]');
  }


  clickSLiderBtn () {
    const btn = cy.get ('[kind="lightTheme"]');
    btn.should('be.visible');
    btn.click();
  }

}  

export default new HomePage();
