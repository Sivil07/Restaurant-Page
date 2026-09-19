import NodeCollector from "./nodeCollector.js";
import PageLoader from "./pageLoader.js";
import HomeBuilder from "./homeBuilder.js";
import MenuBuilder from "./menuBuilder.js";

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
                console.log("Menu")
                break;
            case "About":
                console.log("About")
                break;
            case "Contact":
                console.log("Contact")
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
    It swaps the current page for the clicked nav link's page */
    static navListener() {
        const navContainer = document.querySelector("#nav-container");
        navContainer.addEventListener("click", (e) => {
            const element = e.target;
            const cleanedString = this.#trimString(element.textContent);
            const newPage = this.#findNewPage(cleanedString);
            if (newPage !== undefined) {
                this.swapPage(newPage, cleanedString);
            }
        })
    }
}

export default PageWatcher;