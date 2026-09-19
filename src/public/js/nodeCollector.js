
/* Tracks the page node currently rendered, so it can be removed during navigation */
class NodeCollector {
    static #activePageNode = null

    static setActivePageNode(pageNode) {
        this.#activePageNode = pageNode
    }

    static clearActivePageNode() {
        this.#activePageNode = null
    }

    static get activePage() {
        return this.#activePageNode
    }
}

export default NodeCollector;