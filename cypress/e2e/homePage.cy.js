/// <reference types="cypress"/>

import HomePage from "../support/pages/home-obj.cy";

describe("E2E - Home Page - Lego ", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.acceptEnterPopups();
  });

  it("Should open home page Lego, accept popups and verify url", () => {
    cy.url().should("eq", "https://www.lego.com/pl-pl");
  });

  it("Should verify visible section of topNav, slider, bestseller, recommended, footer", () => {
    HomePage.topNav.should("be.visible");
    HomePage.mainSlider.should("be.visible");
    HomePage.recommendetSection.should("be.visible");
    HomePage.bestsellerSection.should("be.visible");
    HomePage.footer.should("be.visible");
  });

  it("Should verify subscribe input and social media links is visible", () => {
    HomePage.subscribeInput.should("be.visible");
    HomePage.subscribeInput.should("be.visible");
  });
});
