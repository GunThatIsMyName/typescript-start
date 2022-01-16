export class Payment {
    constructor(reciever, details, amount) {
        this.reciever = reciever;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.reciever} is owed $${this.amount} for ${this.details}`;
    }
}
