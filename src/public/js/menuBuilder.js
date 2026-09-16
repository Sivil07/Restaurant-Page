import { menuPageContent } from "./content.js";
import ElementBuilder from "./elementBuilder.js";

class MenuBuilder {

    static #navName = "Menu"

    static get name() {
        return this.#navName;
    }

    /* Assembles the full homepage by building and appending each section */
    static buildMenuPage() {
        const menuPage = ElementBuilder.createElement({ elementTag: "main",  id: "menu-page"});
        const menuHeader = ElementBuilder.createElement({ elementTag: "section", id: "menu-header" });
        const menuOptions = ElementBuilder.createElement({ elementTag: "section",  id: "menu-options"});
        const menuCards = ElementBuilder.createElement({ elementTag: "section",  id: "menu-cards"});

        menuPage.append(
            menuHeader,
            menuOptions,
            menuCards
        );
    }
}

export default MenuBuilder

