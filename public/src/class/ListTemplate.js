export class ListTemplate {
    constructor(element) {
        this.element = element;
    }
    render(item, heading, pos) {
        const container = document.createElement("li");
        const tempItem = `
            <h4>${heading}</h4>
            <p>${item.format()}</p>`;
        container.innerHTML = tempItem;
        if (pos === "start") {
            this.element.prepend(container);
        }
        else {
            this.element.append(container);
        }
    }
}
