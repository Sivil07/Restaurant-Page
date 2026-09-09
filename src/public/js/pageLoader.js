import HomeBuilder from "./homeBuilder.js";
import NodeCollector from "./nodeCollector.js";
import PageWatcher from "./pageWatcher.js";

/* Handles adding, removing, and initializing the page currently shown in #content */
class PageLoader {
    static #root = document.querySelector("#content");

    static loadPage(newPage) {
        this.#root.appendChild(newPage);
    }

    static removePage(page) {
        this.#root.removeChild(page);
    }

    static initialize() {
        const homePage = HomeBuilder.buildHomePage();
        NodeCollector.addNode(homePage);
        PageWatcher.title = HomeBuilder.name;
        this.loadPage(homePage);
    }
}

export default PageLoader;