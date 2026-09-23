import { menuPageContent } from "./content.js";
import ElementBuilder from "./elementBuilder.js";

class MenuBuilder {

    static #activeOption = null
    static activeMenuDisplay = null

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

    static #setActiveMenuDisplay(cards) {
        this.activeMenuDisplay = cards
    }

    static #clearActiveMenuDisplay() {
        this.activeMenuDisplay = null
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

    // Builders for Menu Display Component
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
        const menuOptions = ElementBuilder.createElement({ elementTag: "section", id: "menu-options" });
        menuOptions.append(...this.#buildMenuOptions());
        return menuOptions
    }

    // Menu Cards Section Builders
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
        const menuCardsSection = ElementBuilder.createElement({ elementTag: "section", id: "menu-cards" });
        menuCardsSection.append(...this.#buildMenuCards(option));
        return menuCardsSection;
    }

    // Menu Row Section Builders
    static #buildRowDescription(title, details) {
        const rowDescription = ElementBuilder.createElement({ elementTag: "div", classNames: ["row-desc"] });
        const rowTitle = ElementBuilder.createElement({ elementTag: "p", classNames: ["row-title"], textContent: title });
        const rowDetails = ElementBuilder.createElement({ elementTag: "p", classNames: ["row-details"], textContent: details });

        rowDescription.append(rowTitle, rowDetails);
        return rowDescription;
    }

    static #buildMenuRows(option) {
        const menuRows = [];

        for (const rowDetails of option) {
            const menuRow = ElementBuilder.createElement({ elementTag: "button", type: "button", classNames: ["menu-row"] });
            const rowDescription = this.#buildRowDescription(rowDetails.title, rowDetails.description);
            const rowCost = ElementBuilder.createElement({ elementTag: "p", classNames: ["row-cost"], textContent: rowDetails.cost });

            menuRow.append(rowDescription, rowCost)
            menuRows.push(menuRow);
        }
        return menuRows;
    }

    static #buildMenuRowsSection(option = menuPageContent.menuCards.sides) {
        const menuRowsSection = ElementBuilder.createElement({ elementTag: "section", id: "menu-rows" });
        const rowHeader = ElementBuilder.createElement({ elementTag: "p", classNames: ["row-header"], textContent: "Sides and Drinks" })

        menuRowsSection.append(rowHeader, ...this.#buildMenuRows(option));
        return menuRowsSection;
    }



    /* Option Selection: lookup menuCards for option, update 
    the highlight state, rebuild the menu cards section using the new option */

    /* Selects the correct menu data for the chosen option and identifies
   whether it should be displayed as cards or rows. */
    static #newActiveOption(option) {
        let newOption;
        let sectionType;
        switch (option) {
            case "classics":
                newOption = menuPageContent.menuCards.classics
                sectionType = "cards"
                break;
            case "grilled":
                newOption = menuPageContent.menuCards.grilled;
                sectionType = "cards"
                break;
            case "cold":
                newOption = menuPageContent.menuCards.coldPress;
                sectionType = "cards"
                break;
            case "sides":
                newOption = menuPageContent.menuCards.sides;
                sectionType = "rows"
                break;
            case "drinks":
                newOption = menuPageContent.menuCards.drinks;
                sectionType = "rows"
                break;
            default:
        }
        return { newOption, sectionType };
    }

    /* Builds the appropriate menu section based on the option’s layout type
    Either card or row style. */
    static #buildMenuDisplaySection(result) {
        if (result.sectionType === "cards") {
            return this.#buildMenuCardsSection(result.newOption);
        }
        return this.#buildMenuRowsSection(result.newOption);
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
    static #updateMenuDisplaySection(result) {
        if (result.newOption !== undefined) {
            const root = document.querySelector("#menu-page");
            const previousCards = this.activeMenuDisplay;
            previousCards.remove();
            this.#clearActiveMenuDisplay();
            const newCardSection = this.#buildMenuDisplaySection(result)
            root.appendChild(newCardSection);
            this.#setActiveMenuDisplay(newCardSection);
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

            const result = this.#newActiveOption(element.dataset.option)
            this.#updateMenuDisplaySection(result)
        });
    }

    /* Initialization */

    // Set the initial active menuCards section on page load 
    static #initializeActiveMenuCards(menuCardSection) {
        this.#setActiveMenuDisplay(menuCardSection)
    }

    // Set the initial active menuOption on page load
    static #initializeActiveOption(classicsOption) {
        classicsOption.classList.toggle("hover");
        this.#selectNewOption(classicsOption);
    }

    /* Final Page Assembly */

    // Assembles the full homepage by building and appending each section 
    static buildMenuPage() {
        const menuPage = ElementBuilder.createElement({ elementTag: "main", id: "menu-page" });
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

