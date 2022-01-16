import "./class/invoice.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const selectTypeDOM = form.querySelector("#type") as HTMLSelectElement;
const tofromDOM = form.querySelector("#tofrom") as HTMLInputElement;
const detailsDOM = form.querySelector("#details") as HTMLInputElement;
const amountDOM = form.querySelector("#amount") as HTMLInputElement;

const handleSubmit = (e: Event) => {
  e.preventDefault();

  console.log(
    selectTypeDOM.value,
    tofromDOM.value,
    detailsDOM.value,
    amountDOM.valueAsNumber
  );
};

form.addEventListener("submit", handleSubmit);
