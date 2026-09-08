
/* Tracks the page node currently rendered, so it can be removed during navigation */
class NodeCollector {
    static #collector = [];

    static addNode(newNode) {
        this.#collector.push(newNode);
    } 

    static removeNode() {
        this.#collector.pop();
    }

    static get node() {
        return this.#collector[0];
    }
}

export default NodeCollector;