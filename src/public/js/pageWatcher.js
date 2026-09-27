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
    Returns an object containing the fully built page and the page title. 
    Both can be undefined if the page is not found */
    static #findNewPage(page) {
        let newPageContent;
        switch (page) {
            case "Home":
                newPageContent = { newPage: HomeBuilder.buildHomePage(), pageTitle: HomeBuilder.name }
                break;
            case "Menu":
                newPageContent = { newPage: MenuBuilder.buildMenuPage(), pageTitle: MenuBuilder.name }
                break;
            case "About":
                newPageContent = { newPage: AboutBuilder.buildAboutPage(), pageTitle: AboutBuilder.name }
                break;
            case "Contact":
            case "OrderOnline":
                newPageContent = { newPage: ContactBuilder.buildContactPage(), pageTitle: ContactBuilder.name }
                break;
            default:
        }
        return newPageContent;
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
            const newPageContent = this.#findNewPage(cleanedString);
            if (newPageContent.newPage !== undefined && newPageContent.pageTitle !== undefined) {
                this.swapPage(newPageContent.newPage, newPageContent.pageTitle);
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