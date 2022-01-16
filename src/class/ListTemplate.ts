import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
  constructor(private element: HTMLUListElement) {}

  render(item: HasFormatter, heading: string, pos: "start" | "end") {
    const container = document.createElement("li");
    const tempItem = `
            <h4>${heading}</h4>
            <p>${item.format()}</p>`;
    container.innerHTML = tempItem;

    if (pos === "start") {
      this.element.prepend(container);
    } else {
      this.element.append(container);
    }
  }
  
}
