class ElementBuilder {
    static createElement({ elementTag, id, classNames, src, alt, textContent, href, type, datasetName, datasetValue, forAttr, requiredAttr }) {
        const element = document.createElement(elementTag);
        if (id) element.id = id;
        if (classNames) element.classList.add(...classNames);
        if (textContent) element.innerHTML = textContent;
        if (src) element.src = src;
        if (alt) element.alt = alt;
        if (href) element.href = href;
        if (type) element.type = type
        if (datasetName && datasetValue) element.dataset[datasetName] = datasetValue
        if (forAttr) element.htmlFor = forAttr;
        if (requiredAttr) element.required = true;
        return element;
    }
}

export default ElementBuilder;