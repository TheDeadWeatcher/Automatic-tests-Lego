/// <reference types="cypress"/>

import HomePage from "../support/pages/home-obj.cy";
import FooterSection from "../support/pages/footer-obj.cy";

describe("E2E - Home Page - Lego ", () => {
  before(function(){
    cy.fixture('pagesUrl').then(function(url){
      globalThis.url = url;
    });
  });
  beforeEach(() => {
    cy.visit("/");
    cy.acceptEnterPopups();
  });

  it("Should open home page Lego, accept popups and verify url", () => {
    cy.url().should("eq", url.homeUrl);
   
  });

  it("Should verify visible sections of topNav, slider, bestseller, recommended, footer", () => {
    HomePage.topNav.should("be.visible");
    HomePage.mainSlider.should("be.visible");
    HomePage.recommendetSection.should("be.visible");
    HomePage.bestsellerSection.should("be.visible");
    HomePage.footer.should("be.visible");
  });

  it("Should verify subscribe input and social media links is visible", () => {
    HomePage.subscribeInput.should("be.visible");
    HomePage.footerSocialLinks.should("be.visible");
  });
  it('Should scroll to footer section and click on about', () => {
    FooterSection.aboutGroupLego.should("be.visible");
    HomePage.footer.scrollIntoView();
    FooterSection.aboutGroupLego.click();
  });

  it('Should verify slider is visible btn and link direction(verify url)', () => {
    HomePage.clickSLiderBtn();
    cy.url().should("eq", url.sliderBtnUrl);
  });
  it('Should verify visiblity and number of links in section special category', () => {
     HomePage.specialCatBaner.should("be.visible");
     HomePage.specialCatBaner.then(($link) =>{
      const count =$link.length
      HomePage.specialCatBaner.should('have.length', (count));
    });
  });

  it.only('Should verify direction, url and title in special category of Star Wars link', () => {
    cy.get('[data-test="quicklink-link"]:nth-child(4)').click();
    cy.url('eq', url.starWarsPageUrl);
    cy.get("h1").then(($title) =>{
      const title = $title.text();
      cy.get("h1").should('have.text', (title));
    });
  });

});
