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

interface IsType<T extends {} > {
    name:string;
    numb:number;
    data:T
}

enum hiho{
    Zero,One,Two
}
const me:IsType<object>={
    name:"string",
    numb:hiho.Zero,
    data:{name:"hello"}
}

console.log(me)