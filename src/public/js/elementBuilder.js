class ElementBuilder {
    static createElement({ elementTag, id, classNames, src, alt, textContent, href, type, datasetName, datasetValue }) {
        const element = document.createElement(elementTag);
        if (id) element.id = id;
        if (classNames) element.classList.add(...classNames);
        if (textContent) element.innerHTML = textContent;
        if (src) element.src = src;
        if (alt) element.alt = alt;
        if (href) element.href = href;
        if (type) element.type = type
        if (datasetName && datasetValue) element.dataset[datasetName] = datasetValue
        return element;
    }
}

export default ElementBuilder;