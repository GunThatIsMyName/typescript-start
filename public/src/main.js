import { Invoice } from "./class/Invoices.js";
import { Payment } from "./class/Payment.js";
import { ListTemplate } from "./class/ListTemplate.js";
// More secures
let paymentDoc;
let invoiceDoc;
paymentDoc = new Payment("minji", "일한값", 200);
invoiceDoc = new Invoice("gun", "번돈", 200);
let scrureList = [];
scrureList.push(paymentDoc, invoiceDoc);
console.log(scrureList, "scrureList");
// invoice Class⭐️
const invOne = new Invoice("minji", "inv", 200);
const invTwo = new Invoice("gun", "inv", 600);
const payOne = new Payment("minji", "pay", 200);
const payTwo = new Payment("gun", "pay", 600);
let invoices = [];
let payments = [];
invoices.push(invOne, invTwo);
payments.push(payOne, payTwo);
console.log(invoices);
console.log(payments);
// DOM Element ⭐️
const form = document.querySelector(".new-item-form");
const selectTypeDOM = form.querySelector("#type");
const tofromDOM = form.querySelector("#tofrom");
const detailsDOM = form.querySelector("#details");
const amountDOM = form.querySelector("#amount");
// Item list DOM
const ItemListDOM = document.querySelector(".item-list");
const list = new ListTemplate(ItemListDOM);
const handleSubmit = (e) => {
    e.preventDefault();
    //   this is tuples ⭐️
    let values = [tofromDOM.value, detailsDOM.value, amountDOM.valueAsNumber];
    let newDoc;
    if (selectTypeDOM.value === "invoice") {
        newDoc = new Invoice(...values);
        list.render(newDoc, selectTypeDOM.value, "end");
    }
    else {
        newDoc = new Payment(...values);
        list.render(newDoc, selectTypeDOM.value, "start");
    }
    form.reset();
};
form.addEventListener("submit", handleSubmit);
