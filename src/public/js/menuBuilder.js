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


    /* Assembles the full homepage by building and appending each section */
    static buildMenuPage() {
        const menuPage = ElementBuilder.createElement({ elementTag: "main",  id: "menu-page"});
        const menuHeader = this.#buildMenuHeaderSection();
        const menuOptions = this.#buildMenuOptionsSection();

        // const menuOptions = ElementBuilder.createElement({ elementTag: "section",  id: "menu-options"});
        // const menuCards = ElementBuilder.createElement({ elementTag: "section",  id: "menu-cards"});

        menuPage.append(
            menuHeader,
            menuOptions,
            // menuCards
        );

        return menuPage;
    }
}

export default MenuBuilder;

