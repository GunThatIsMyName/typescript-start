"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("minji", "바보", 200);
const invTwo = new Invoice("gun", "천재", 600);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
