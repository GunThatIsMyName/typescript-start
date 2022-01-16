import { HasFormatter } from './interfaces/HasFormatter.js';
import { Invoice } from "./class/Invoices.js";
import { Payment } from "./class/Payment.js";
import { ListTemplate } from './class/ListTemplate.js';



// More secures
let paymentDoc:HasFormatter;
let invoiceDoc:HasFormatter;

paymentDoc = new Payment("minji","일한값",200);
invoiceDoc = new Invoice("gun","번돈",200);

let scrureList :HasFormatter[]=[];
scrureList.push(paymentDoc,invoiceDoc);
console.log(scrureList,"scrureList");


// invoice Class⭐️
const invOne = new Invoice("minji", "inv", 200);
const invTwo = new Invoice("gun", "inv", 600);

const payOne = new Payment("minji", "pay", 200);
const payTwo = new Payment("gun", "pay", 600);

let invoices: Invoice[] = [];
let payments: Payment[] = [];

invoices.push(invOne,invTwo);
payments.push(payOne,payTwo);

console.log(invoices);
console.log(payments);


// DOM Element ⭐️
const form = document.querySelector(".new-item-form") as HTMLFormElement;

const selectTypeDOM = form.querySelector("#type") as HTMLSelectElement;
const tofromDOM = form.querySelector("#tofrom") as HTMLInputElement;
const detailsDOM = form.querySelector("#details") as HTMLInputElement;
const amountDOM = form.querySelector("#amount") as HTMLInputElement;


// Item list DOM
const ItemListDOM = document.querySelector(".item-list") as HTMLUListElement;
const list = new ListTemplate(ItemListDOM);
const handleSubmit = (e: Event) => {
  e.preventDefault();

  let newDoc:HasFormatter;
  if(selectTypeDOM.value === "invoice"){
      newDoc = new Invoice(tofromDOM.value,detailsDOM.value,amountDOM.valueAsNumber);
      list.render(newDoc,selectTypeDOM.value,"end");
    }else{
        newDoc = new Payment(tofromDOM.value,detailsDOM.value,amountDOM.valueAsNumber);
        list.render(newDoc,selectTypeDOM.value,"start");
    }
    

  form.reset();
};

form.addEventListener("submit", handleSubmit);
