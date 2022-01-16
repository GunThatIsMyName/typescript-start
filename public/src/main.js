import "./class/invoice.js";
const form = document.querySelector(".new-item-form");
const selectTypeDOM = form.querySelector("#type");
const tofromDOM = form.querySelector("#tofrom");
const detailsDOM = form.querySelector("#details");
const amountDOM = form.querySelector("#amount");
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectTypeDOM.value, tofromDOM.value, detailsDOM.value, amountDOM.valueAsNumber);
};
form.addEventListener("submit", handleSubmit);
