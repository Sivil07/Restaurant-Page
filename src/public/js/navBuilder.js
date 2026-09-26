import ElementBuilder from "./elementBuilder.js";
import HomeBuilder from "./homeBuilder.js";
import MenuBuilder from "./menuBuilder.js";
import AboutBuilder from "./aboutBuilder.js";

class NavBuilder {
    static #root = document.querySelector("#nav-container");
    static #navItems = [
        HomeBuilder.name,
        MenuBuilder.name,
        AboutBuilder.name,
        "Contact"
    ]
    
    static #buildNavItems() {
        const navItems = ElementBuilder.createElement({ elementTag: "nav", id: "nav-links" })
        for (const itemName of this.#navItems) {
            const navItem = ElementBuilder.createElement({ elementTag: "button", classNames: ["nav-link"], textContent: itemName })
            navItems.appendChild(navItem)
        }
        return navItems;
    }

    static initialize() {
        const navItems = this.#buildNavItems();
        const navAction = ElementBuilder.createElement({ elementTag: "button", id: "nav-action", textContent: "Order Online" })
        this.#root.append(navItems, navAction);
    }
}

export default NavBuilder