import { menuPageContent } from "./content.js";
import ElementBuilder from "./elementBuilder.js";

class MenuBuilder {

    static #activeOption = null
    static #activeMenuCards = null

    static #navName = "Menu"

    static get name() {
        return this.#navName;
    }

    /* Manage active option and active menuCards state */ 
    
    static #selectNewOption(option) {
        this.#activeOption = option
    }

    static #clearActiveOption() {
        this.#activeOption = null
    }

    static #setActiveMenuCards(cards) {
        this.#activeMenuCards = cards
    }

    static #clearActiveMenuCards() {
        this.#activeMenuCards = null
    }

    /* Build all UI components for Menu page: header, options, cards */

    // Builders for Menu Header Component 
    static #buildMenuHeaderSection() {
        const menuHeader = ElementBuilder.createElement({ elementTag: "section", id: "menu-header" });
        const menuSubheading = ElementBuilder.createElement({ elementTag: "p", classNames: ["subheading"], textContent: menuPageContent.menuHeader.subheading });
        const menuHeading = ElementBuilder.createElement({ elementTag: "p", classNames: ["heading"], textContent: menuPageContent.menuHeader.heading });
        menuHeader.append(menuSubheading, menuHeading)
        
        return menuHeader;
    }

    // Builders for Menu Options Component 
    static #buildMenuOptions() {
        let menuOptions = []
        const dataName = menuPageContent.menuOptions.dataName;
        for (const option of menuPageContent.menuOptions.options) {
            const { textName, dataValue } = option
            const newOption = ElementBuilder.createElement({ 
                elementTag: "button", 
                classNames: ["menu-option"], 
                textContent: textName, 
                datasetName: dataName, 
                datasetValue: dataValue, 
                type: "button" 
            });
            menuOptions.push(newOption);
        }
        return menuOptions;
    }

    static #buildMenuOptionsSection() {
        const menuOptions = ElementBuilder.createElement({ elementTag: "section",  id: "menu-options"});
        menuOptions.append(...this.#buildMenuOptions());
        return menuOptions
    }

    // Builders for Menu Cards Section 
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

    static #buildMenuCards(option) {
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

    static #buildMenuCardsSection(option = menuPageContent.menuCards.classics) {
        const menuCardsSection = ElementBuilder.createElement({ elementTag: "section",  id: "menu-cards"});
        menuCardsSection.append(...this.#buildMenuCards(option));
        return menuCardsSection;
    }

    /* Option Selection: lookup menuCards for option, update 
    the highlight state, rebuild the menu cards section using the new option */

    /* Maps a menu option's name to the menuCards data it should use.
    It returns undefined if the option cannot be found */
    static #newActiveOption(option) {
        let newOption;
        switch(option) {
            case "classics":
                newOption = menuPageContent.menuCards.classics
                break;
            case "grilled":
                newOption = menuPageContent.menuCards.grilled;
                break;
            case "cold":
                newOption = menuPageContent.menuCards.coldPress;
            default: 
        }
        return newOption;
    }

    // Remove hover state and clear previously active option 
    static #unselectActiveOption() {
        if (this.#activeOption !== null) {
            const previousElement = this.#activeOption;
            previousElement.classList.toggle("hover");
            this.#clearActiveOption();
        }
    }

    // Checks to see if the given elements is a data option 
    static #isMenuOption(element) {
        return element.hasAttribute("data-option");
    }

    // Replace the current menuCards section with a new one 
    static #updateMenuCardsSection(newOption) {
            if (newOption !== undefined) {
                const root = document.querySelector("#menu-page");
                const previousCards = this.#activeMenuCards;
                previousCards.remove();
                this.#clearActiveMenuCards();
                const newCardSection =  this.#buildMenuCardsSection(newOption);
                root.appendChild(newCardSection);
                this.#setActiveMenuCards(newCardSection);
            }

    }
    
    /* Event Listeners */

    // Listeners for menuPage: manages selection highlight and swap menu cards based on selection 
    static #menuOptionsListeners(menuOptionsSection) {
        menuOptionsSection.addEventListener("click", (e) => {
            const element = e.target;

            if (!this.#isMenuOption(element)) {
                return;
            }

            this.#unselectActiveOption()
    
            element.classList.toggle("hover");
            this.#selectNewOption(element)

            const newOption = this.#newActiveOption(element.dataset.option)
            this.#updateMenuCardsSection(newOption)     
        });
    }

    /* Initialization */

    // Set the initial active menuCards section on page load 
    static #initializeActiveMenuCards(menuCardSection) {
        this.#setActiveMenuCards(menuCardSection)
    }

    // Set the initial active menuOption on page load
    static #initializeActiveOption(classicsOption) {
        classicsOption.classList.toggle("hover");
        this.#selectNewOption(classicsOption);
    }

    /* Final Page Assembly */

    // Assembles the full homepage by building and appending each section 
    static buildMenuPage() {
        const menuPage = ElementBuilder.createElement({ elementTag: "main",  id: "menu-page"});
        const menuHeaderSection = this.#buildMenuHeaderSection();
        const menuOptionsSection = this.#buildMenuOptionsSection();
        const menuCardsSection = this.#buildMenuCardsSection();

        const classicsOption = menuOptionsSection.querySelector('[data-option="classics"]')

        this.#menuOptionsListeners(menuOptionsSection);
        this.#initializeActiveMenuCards(menuCardsSection);
        this.#initializeActiveOption(classicsOption);

        menuPage.append(
            menuHeaderSection,
            menuOptionsSection,
            menuCardsSection
        );

        return menuPage;
    }
}

export default MenuBuilder;

