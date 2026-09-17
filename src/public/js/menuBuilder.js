import { menuPageContent } from "./content.js";
import ElementBuilder from "./elementBuilder.js";

class MenuBuilder {

    static #navName = "Menu"

    static get name() {
        return this.#navName;
    }

    /* Builders for Menu Header Component */

    static #buildMenuHeaderSection() {
        const menuHeader = ElementBuilder.createElement({ elementTag: "section", id: "menu-header" });
        const menuSubheading = ElementBuilder.createElement({ elementTag: "p", classNames: ["subheading"], textContent: menuPageContent.menuHeader.subheading });
        const menuHeading = ElementBuilder.createElement({ elementTag: "p", classNames: ["heading"], textContent: menuPageContent.menuHeader.heading });
        menuHeader.append(menuSubheading, menuHeading)
        
        return menuHeader;
    }

    /* Builders for Menu Options Component */

    static #buildMenuOptions() {
        let menuOptions = []
        const dataName = menuPageContent.menuOptions.dataName;
        for (const option of menuPageContent.menuOptions.options) {
            const { textName, dataValue } = option
            const newOption = ElementBuilder.createElement({ elementTag: "button", classNames: ["menu-option"], textContent: textName, datasetName: dataName, datasetValue: dataValue, type: "button" });
            menuOptions.push(newOption)
        }
        return menuOptions;
    }

    static #buildMenuOptionsSection() {
        const menuOptions = ElementBuilder.createElement({ elementTag: "section",  id: "menu-options"});
        menuOptions.append(...this.#buildMenuOptions());
        return menuOptions
    }

    /* Builders for Menu Cards Section */

    static #buildMenuCardMedia(icon, label) {
        const menuCardMedia = ElementBuilder.createElement({ elementTag: "div", classNames: ["menu-item-media"] });
        const menuIcon = ElementBuilder.createElement({ elementTag: "p", classNames: ["menu-icon"], textContent: icon });
        const menuLabel = ElementBuilder.createElement({ elementTag: "p", classNames: ["menu-label"], textContent: label });
        
        menuCardMedia.append(menuIcon, menuLabel);
        return menuCardMedia;
    }

    static #buildMenuCardDetails(title, description) {
        const menuCardDetails = ElementBuilder.createElement({ elementTag: "div", classNames: ["menu-item-details"] });
        const menuName = ElementBuilder.createElement({ elementTag: "p", classNames: ["menu-item-name"], textContent: title });
        const menuDesc = ElementBuilder.createElement({ elementTag: "p", classNames: ["menu-item-desc"], textContent: description });

        menuCardDetails.append(menuName, menuDesc);
        return menuCardDetails;
    }

    static #buildMenuCards(option = menuPageContent.menuCards.classics) {
        const menuCards = []
        
        for (const optionDetails of option) {
            const menuCard = ElementBuilder.createElement({ elementTag: "div", classNames: ["menu-card"] });
            const menuCardMedia = this.#buildMenuCardMedia(optionDetails.icon, optionDetails.label);
            const menuItemDetails = this.#buildMenuCardDetails(optionDetails.title, optionDetails.description)
            menuCard.append(menuCardMedia, menuItemDetails)
            menuCards.push(menuCard)
        }
        return menuCards;
    }

    static #buildMenuCardsSection() {
        const menuCardsSection = ElementBuilder.createElement({ elementTag: "section",  id: "menu-cards"});
        menuCardsSection.append(...this.#buildMenuCards());
        return menuCardsSection;
    }


    /* Assembles the full homepage by building and appending each section */
    static buildMenuPage() {
        const menuPage = ElementBuilder.createElement({ elementTag: "main",  id: "menu-page"});
        const menuHeaderSection = this.#buildMenuHeaderSection();
        const menuOptionsSection = this.#buildMenuOptionsSection();
        const menuCardsSection = this.#buildMenuCardsSection();

        menuPage.append(
            menuHeaderSection,
            menuOptionsSection,
            menuCardsSection
        );

        return menuPage;
    }
}

export default MenuBuilder;

