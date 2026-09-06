import heroImage from "../../assets/img/signature-meal.jpg"

class HomeBuilder {
    static #heroImageContent = { src: heroImage, alt: "Signature Meal" }

    static #createElement({ elementTag, id, classNames, src, alt }) {
        const element = document.createElement(elementTag);
        if (id) element.id = id;
        if (classNames) element.classList.add(...classNames);
        if (src) element.src = src;
        if (alt) element.alt = alt;
        return element;
    }

    static #buildSectionTextBlock() {
        const sectionTextBlock = this.#createElement({ elementTag: "div", classNames: ["section-text-block"] });
        const sectionSubHeading = this.#createElement({elementTag: "p" ,classNames: ["section-subheading"]});
        const sectionHeading = this.#createElement({elementTag: "p", classNames: ["section-heading"]});
        const sectionText = this.#createElement({elementTag: "p", classNames: ["section-text"]});
        const sectionAction = this.#createElement({elementTag: "button", classNames: ["section-action"]});

        sectionTextBlock.append(
            sectionSubHeading,
            sectionHeading,
            sectionText,
            sectionAction,
        )
        return sectionTextBlock;
    }

    static #buildSectionContent() {
        const sectionContent = this.#createElement({ elementTag: "div", classNames: ["section-content"] });
        const heroImage = this.#createElement({ elementTag: "img", classNames: ["photo"], ...this.#heroImageContent });
        const sectionTextBlock = this.#buildSectionTextBlock();
        sectionContent.append(
            sectionTextBlock,
            heroImage,
        );
        return sectionContent;
    }

    static #buildHeroSection() {
        const heroSection = this.#createElement({ elementTag: "section", id: "hero", classNames: ["section-layout"] });
        const sectionContent = this.#buildSectionContent()
        heroSection.append(
            sectionContent,
        );
        return heroSection;

    }

    static buildHomePage() {
        ;
        const homePage = this.#createElement({ elementTag: "main", id: "home-page" });
        const heroSection = this.#buildHeroSection();
        // const craftHighlightSection = this.#createElement({elementTag: "section", id: "craft-highlights"});
        // const aboutUsSection = this.#createElement({elementTag: "section", id: "about-us", classNames: ["section-layout"]})
        // const menuPreviewSection = this.#createElement({elementTag: "section", id: "menu-preview"});
        // const orderAheadSection = this.#createElement({elementTag: "section", id: "order-ahead"});
        // const siteInfoSection = this.#createElement({elementTag: "section", id: "site-info"});

        homePage.append(
            heroSection,
            // craftHighlightSection,
            // aboutUsSection,
            // menuPreviewSection,
            // orderAheadSection,
            // siteInfoSection,
        )

        return homePage;
    }

}

export default HomeBuilder;