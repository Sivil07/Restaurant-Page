class HomeBuilder {

    static #createElement({elementTag, id, classNames}) {
        const element = document.createElement(elementTag);
        if (id) element.id = id;
        if (classNames) element.classList.add(...classNames);
        return element;
    }

    static buildHomePage() {;
        const homePage = this.#createElement({elementTag: "main", id: "home-page"});
        const heroSection = this.#createElement({elementTag: "section", id: "hero", classNames: ["section-layout"]});
        const craftHighlightSection = this.#createElement({elementTag: "section", id: "craft-highlights"});
        const aboutUsSection = this.#createElement({elementTag: "section", id: "about-us", classNames: ["section-layout"]})
        const menuPreviewSection = this.#createElement({elementTag: "section", id: "menu-preview"});
        const orderAheadSection = this.#createElement({elementTag: "section", id: "order-ahead"});
        const siteInfoSection = this.#createElement({elementTag: "section", id: "site-info"});

        homePage.append(
            heroSection,
            craftHighlightSection,
            aboutUsSection,
            menuPreviewSection,
            orderAheadSection,
            siteInfoSection,
        )

        return homePage;
    }

}

export default HomeBuilder