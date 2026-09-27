import { landingPageContent } from "./content.js";
import ElementBuilder from "./elementBuilder.js";
import PageWatcher from "./pageWatcher.js";
import AboutBuilder from "./aboutBuilder.js";
import ContactBuilder from "./contactBuilder.js";

class HomeBuilder {

    static #navName = "Home";

    static get name() {
        return this.#navName;
    }

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

    /* Builders for menuPreview component */

    static #buildMenuItems() {
        const menuItems = [];
        for (const itemParts of landingPageContent.menuPreview.menuItems) {
            const menuItem = ElementBuilder.createElement({ elementTag: "div", classNames: [ "menu-item"] });
            const menuItemInfo = ElementBuilder.createElement({ elementTag: "div", classNames: ["menu-item-info"] });
            const { title, description, src, alt } = itemParts;
            const menuTitle = ElementBuilder.createElement({ elementTag: "p", classNames: ["menu-item-title"], textContent: title });
            const menuDescription = ElementBuilder.createElement({ elementTag: "p", classNames: ["menu-item-description"], textContent: description });
            const menuImage = ElementBuilder.createElement({ elementTag: "img", classNames: ["food-image"], src: src, alt: alt});
            menuItemInfo.append(menuTitle, menuDescription)
            menuItem.append(menuImage, menuItemInfo)
            menuItems.push(menuItem);
        }

        return menuItems;
    }

    static #buildMenuCollection() {
        const menuItems = ElementBuilder.createElement({ elementTag: "div", id: "menu-items" });
        menuItems.append(...this.#buildMenuItems());
        return menuItems;
    }

    static #buildMenuPreviewHeader() {
        const menuPreviewHeader = ElementBuilder.createElement({elementTag: "div", id: "menu-preview-header"});
        const menuSubHeading = ElementBuilder.createElement({ elementTag: "p", id: "menu-subheading", classNames: ["section-subheading"], textContent: landingPageContent.menuPreview.subheading });
        const menuHeading = ElementBuilder.createElement({ elementTag: "p", classNames: ["section-heading"], textContent: landingPageContent.menuPreview.heading });
        menuPreviewHeader.append(menuSubHeading, menuHeading);
        return menuPreviewHeader;
    }

    static #buildMenuPreviewContent() {
        const menuPreviewContent = ElementBuilder.createElement({ elementTag: "div", id: "menu-preview-content"});
        const menuPreviewHeader = this.#buildMenuPreviewHeader();
        const menuPreviewItems = this.#buildMenuCollection();
        menuPreviewContent.append(menuPreviewHeader, menuPreviewItems);
        return menuPreviewContent;
    }

    /* Builders for orderAhead component  */

    static #orderAheadTextBlock() {
        const orderAheadTextBlock = ElementBuilder.createElement({ elementTag: "div", id: "order-ahead-match" });
        const orderSubHeading = ElementBuilder.createElement({ elementTag: "p", classNames: ["section-subheading"], textContent: landingPageContent.orderAhead.subheading });
        const orderHeading = ElementBuilder.createElement({ elementTag: "p", id: "order-heading", classNames: ["section-heading"], textContent: landingPageContent.orderAhead.heading });
        const orderAction = ElementBuilder.createElement({ elementTag: "button", classNames: ["section-action"], textContent: landingPageContent.orderAhead.action });
        orderAheadTextBlock.append(orderSubHeading, orderHeading, orderAction);
        return orderAheadTextBlock;
    }

    /* Builders for siteInfo component */

    static #buildInfoColumns() {
        const infoColumns = [];
        for (const column of landingPageContent.siteInfo) {
            const infoColumn = ElementBuilder.createElement({ elementTag: "div", classNames: ["info-column"] });
            const { title, textArray } = column;
            const infoTitle = ElementBuilder.createElement({ elementTag: "p", classNames: ["info-title"], textContent: title });
            if (textArray.length > 1) {
                const infoDetails = ElementBuilder.createElement({ elementTag: "div", classNames: ["info-details"] });
                const [ textOne, textTwo ] = textArray;
                const infoTextOne = ElementBuilder.createElement({ elementTag: "p", classNames: ["info-text"], textContent: textOne });
                const infoTextTwo = ElementBuilder.createElement({ elementTag: "p", classNames: ["info-text"], textContent: textTwo });
                infoDetails.append(infoTextOne, infoTextTwo);
                infoColumn.append(infoTitle, infoDetails);
                infoColumns.push(infoColumn);
            } else {
                const [ textContent ] = textArray;
                const infoText = ElementBuilder.createElement({ elementTag: "p", classNames: ["info-text"], textContent: textContent });
                infoColumn.append(infoTitle, infoText);
                infoColumns.push(infoColumn);
            }
        }
        return infoColumns;
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

    static #builderMenuPreviewSection() {
        const menuPreviewSection = ElementBuilder.createElement({ elementTag: "section", id: "menu-preview" });
        const menuPreviewContent = this.#buildMenuPreviewContent();
        menuPreviewSection.appendChild(menuPreviewContent);
        return menuPreviewSection;
    }

    static #buildOrderAheadSection() {
        const orderAheadSection = ElementBuilder.createElement({ elementTag: "section", id: "order-ahead" });
        const orderAheadTextBlock = this.#orderAheadTextBlock();
        const orderAheadImage = ElementBuilder.createElement({ elementTag: "img", id: "counter-photo", src: landingPageContent.orderAhead.src, alt: landingPageContent.orderAhead.alt });
        orderAheadSection.append(orderAheadImage, orderAheadTextBlock)
        return orderAheadSection;
    }

    static #buildSiteInfoSection() {
        const siteInfoSection = ElementBuilder.createElement({ elementTag: "section", id: "site-info" });
        siteInfoSection.append(...this.#buildInfoColumns());
        return siteInfoSection;
    }

    /* Listeners for homePage (Two listeners for transition to new page) */
    static homePageListeners(homePage) {
        homePage.addEventListener("click", (e) => {
            const element = e.target;
            if (element.id === "about-link") {
                const newPage = AboutBuilder.buildAboutPage();
                PageWatcher.swapPage(newPage, AboutBuilder.name)
                return;
            }
            
            const classList = [...element.classList]
            
            if (classList.includes("section-action")) {
                const newPage = ContactBuilder.buildContactPage();
                PageWatcher.swapPage(newPage, ContactBuilder.name);
                return;
            }
        })
    }


    /* Assembles the full homepage by building and appending each section */
    static buildHomePage() {
        const homePage = ElementBuilder.createElement({ elementTag: "main", id: "home-page" });
        const heroSection = this.#buildHeroSection();
        const aboutUsSection = this.#buildAboutUsSection();
        const craftHighlightSection = this.#buildCraftHighlightsSection();
        const menuPreviewSection = this.#builderMenuPreviewSection();
        const orderAheadSection = this.#buildOrderAheadSection();
        const siteInfoSection = this.#buildSiteInfoSection();

        homePage.append(
            heroSection,
            craftHighlightSection,
            aboutUsSection,
            menuPreviewSection,
            orderAheadSection,
            siteInfoSection,
        )

        this.homePageListeners(homePage);

        return homePage;
    }
}

export default HomeBuilder;