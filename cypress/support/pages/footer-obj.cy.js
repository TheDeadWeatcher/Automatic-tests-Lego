class FooterSection {

    get aboutGroupLego () {
        //return cy.xpath('//a[text()="O Grupie LEGO"]'); nie posiada dostepu do komend typu scrollInToview
        return cy.get(':nth-child(1) > ul > :nth-child(1) > [data-test="footer-links-list-item"]');
    }

}

export default new FooterSection();