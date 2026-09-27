import NodeCollector from "./nodeCollector.js";
import PageLoader from "./pageLoader.js";
import HomeBuilder from "./homeBuilder.js";
import MenuBuilder from "./menuBuilder.js";
import AboutBuilder from "./aboutBuilder.js";
import ContactBuilder from "./contactBuilder.js";

/* Handles navigation events and manages page transitions */
class PageWatcher {
    static #title = document.querySelector("title");

    /* Updates <title> element with the given page name */
    static set title(newTitle) {
        this.#title.textContent = `${newTitle} Page`;
    }


    /* Strips whitespace from nav link text so it matches #findNewPage's cases */
    static #trimString(s) {
        const cleanedString = s.replace(/\s+/g, '')
        return cleanedString;
    }

    /* Maps a nav link's text to the page it should build
    It returns undefined if it's unable to find the page */
    static #findNewPage(page) {
        let newPage;
        switch (page) {
            case "Home":
                newPage = HomeBuilder.buildHomePage();
                break;
            case "Menu":
                newPage = MenuBuilder.buildMenuPage();
                break;
            case "About":
                newPage = AboutBuilder.buildAboutPage();
                break;
            case "Contact":
                newPage = ContactBuilder.buildContactPage();
                break;
            default:
        }
        return newPage;
    }

    /* Swaps the current page for a new one and updates the document title */
    static swapPage(newPage, pageTitle) {
        PageLoader.removePage(NodeCollector.activePage);
        NodeCollector.clearActivePageNode()
        PageLoader.loadPage(newPage);
        NodeCollector.setActivePageNode(newPage)
        this.title = pageTitle;
    }

    /* Listens for nav clicks.
    It swaps the current page for the clicked nav link's page.
    If the nav menu is open and the user clicks outside the nav 
    toggle or menu input, the menu will be closed */
    static navListeners() {
        const navContainer = document.querySelector("#nav-container");
        navContainer.addEventListener("click", (e) => {
            const element = e.target;
            const cleanedString = this.#trimString(element.textContent);
            const newPage = this.#findNewPage(cleanedString);
            if (newPage !== undefined) {
                this.swapPage(newPage, cleanedString);
            }
        })

        document.body.addEventListener("click", (e) => {
            const element = e.target;
            const navInput = document.querySelector("#small-menu");
            const shouldCloseMenu = element.id !== "nav-toggle" && element.id !== "small-menu";
            if (navInput.checked && shouldCloseMenu) {
                navInput.checked = false;
            }
        })
    }
}

export default PageWatcher;