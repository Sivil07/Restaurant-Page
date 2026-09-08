import NodeCollector from "./nodeCollector.js";
import PageLoader from "./pageLoader.js";
import HomeBuilder from "./homeBuilder.js";

/* Handles navigation events and manages page transitions */
class PageWatcher {

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

    /* Listens for nav clicks.
    It swaps the current page for the clicked nav link's page */
    static navListener() {
        const navContainer = document.querySelector("#nav-container");
        navContainer.addEventListener("click", (e) => {
            const element = e.target;
            const cleanedString = this.#trimString(element.textContent);
            const newPage = this.#findNewPage(cleanedString);
            if (newPage !== undefined) {
                PageLoader.removePage(NodeCollector.node);
                NodeCollector.removeNode();
                PageLoader.loadPage(newPage);
                NodeCollector.addNode(newPage);
            }
        })
    }
}

export default PageWatcher;