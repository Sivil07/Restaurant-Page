import { landingPageContent } from "./content.js";
import ElementBuilder from "./elementBuilder.js";

class HomeBuilder {

    /* Shared builders for sections that follow the layout 
    with an image paired with a text block (only hero and about-us sections)
    */
    static #buildSectionTextBlock(textOptions) {
        const sectionTextBlock = ElementBuilder.createElement({ elementTag: "div", classNames: ["section-text-block"] });
        const sectionSubHeading = ElementBuilder.createElement({ elementTag: "p", classNames: ["section-subheading"], textContent: textOptions.subheading });
        const sectionHeading = ElementBuilder.createElement({ elementTag: "p", classNames: ["section-heading"], textContent: textOptions.heading });
        const sectionText = ElementBuilder.createElement({ elementTag: "p", classNames: ["section-text"], textContent: textOptions.text });

        sectionTextBlock.append(sectionSubHeading, sectionHeading, sectionText)

        if (textOptions.action) {
            const sectionAction = ElementBuilder.createElement({ elementTag: "button", classNames: ["section-action"], textContent: textOptions.action });
            sectionTextBlock.appendChild(sectionAction);
        } else if (textOptions.link) {
            const sectionLink = ElementBuilder.createElement({ elementTag: "a", id: "about-link", href: "#", textContent: textOptions.link });
            sectionTextBlock.appendChild(sectionLink);
        }
        return sectionTextBlock;
    }

    static #buildSectionContent(textOptions, imageOptions, imageFirst = false) {
        const sectionContent = ElementBuilder.createElement({ elementTag: "div", classNames: ["section-content"] },);
        const sectionImage = ElementBuilder.createElement(imageOptions);
        const sectionTextBlock = this.#buildSectionTextBlock(textOptions);

        if (imageFirst) {
            sectionContent.append(sectionImage, sectionTextBlock);
        } else {
            sectionContent.append(sectionTextBlock, sectionImage);
        }

        return sectionContent;
    }

    /* Builders for craftHighlights component */
    static #buildCraftItems() {
        const craftItems = [];
        for (const craftParts of landingPageContent.craftHighlights) {
            const craftItem = ElementBuilder.createElement({ elementTag: "div", classNames: ["craft-item"]});
            const { icon, title, description } = craftParts;
            const craftIcon = ElementBuilder.createElement({ elementTag: "p", classNames: ["craft-icon"], textContent: icon});
            const craftTitle = ElementBuilder.createElement({ elementTag: "p", classNames: ["craft-title"], textContent: title});
            const craftDescription = ElementBuilder.createElement({ elementTag: "p", classNames: ["craft-description"], textContent: description});
            craftItem.append(craftIcon, craftTitle, craftDescription);
            craftItems.push(craftItem);
        }
        return craftItems;
    }

    /* Builders for each individual homepage section */ 
    static #buildHeroSection() {
        const heroSection = ElementBuilder.createElement({ elementTag: "section", id: "hero", classNames: ["section-layout"] })
        const sectionContent = this.#buildSectionContent({ subheading: landingPageContent.hero.subheading, heading: landingPageContent.hero.heading, text: landingPageContent.hero.text, action: landingPageContent.hero.action }, { elementTag: "img", classNames: ["photo"], ...landingPageContent.hero.imageContents })
        heroSection.appendChild(sectionContent);
        return heroSection;
    }

    static #buildAboutUsSection() {
        const aboutUsSection = ElementBuilder.createElement({ elementTag: "section", id: "about-us", classNames: ["section-layout"] });
        const sectionContent = this.#buildSectionContent({ subheading: landingPageContent.aboutUs.subheading, heading: landingPageContent.aboutUs.heading, text: landingPageContent.aboutUs.text, link: landingPageContent.aboutUs.aboutLink }, { elementTag: "img", classNames: ["photo"], ...landingPageContent.aboutUs.imageContents }, true);
        aboutUsSection.appendChild(sectionContent)
        return aboutUsSection;
    }

    static #buildCraftHighlightsSection() {
        const craftHighlightsSection = ElementBuilder.createElement({ elementTag: "section", id: "craft-highlights" });
        craftHighlightsSection.append(...this.#buildCraftItems());
        return craftHighlightsSection;
    }

    /* Assembles the full homepage by building and appending each section */
    static buildHomePage() {
        const homePage = ElementBuilder.createElement({ elementTag: "main", id: "home-page" });
        const heroSection = this.#buildHeroSection();
        const aboutUsSection = this.#buildAboutUsSection();
        const craftHighlightSection = this.#buildCraftHighlightsSection();
        // const aboutUsSection = this.#createElement({elementTag: "section", id: "about-us", classNames: ["section-layout"]})
        // const menuPreviewSection = this.#createElement({elementTag: "section", id: "menu-preview"});
        // const orderAheadSection = this.#createElement({elementTag: "section", id: "order-ahead"});
        // const siteInfoSection = this.#createElement({elementTag: "section", id: "site-info"});

        homePage.append(
            heroSection,
            craftHighlightSection,
            aboutUsSection,
            // menuPreviewSection,
            // orderAheadSection,
            // siteInfoSection,
        )

        return homePage;
    }

}

export default HomeBuilder;