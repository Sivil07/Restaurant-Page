import { menuPageContent } from "./content.js";
import ElementBuilder from "./elementBuilder.js";

class MenuBuilder {

    static #navName = "Menu"

    static get name() {
        return this.#navName;
    }

    /* Builders for Menu Header Component */
    
    static #buildMenuHeader() {
        const menuHeader = ElementBuilder.createElement({ elementTag: "section", id: "menu-header" });
        const menuSubheading = ElementBuilder.createElement({ elementTag: "p", classNames: ["subheading"], textContent: menuPageContent.menuHeader.subheading });
        const menuHeading = ElementBuilder.createElement({ elementTag: "p", classNames: ["heading"], textContent: menuPageContent.menuHeader.heading });
        menuHeader.append(menuSubheading, menuHeading)
        
        return menuHeader;
    }


    /* Assembles the full homepage by building and appending each section */
    static buildMenuPage() {
        const menuPage = ElementBuilder.createElement({ elementTag: "main",  id: "menu-page"});
        const menuHeader = this.#buildMenuHeader();
        // const menuHeader = ElementBuilder.createElement({ elementTag: "section", id: "menu-header" });
        // const menuOptions = ElementBuilder.createElement({ elementTag: "section",  id: "menu-options"});
        // const menuCards = ElementBuilder.createElement({ elementTag: "section",  id: "menu-cards"});

        menuPage.append(
            menuHeader,
            // menuOptions,
            // menuCards
        );

        return menuPage;
    }
}

export default MenuBuilder;

