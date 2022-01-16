// readonly 🔥  class 안/바깥 둘다 읽기만 가능 🔥 client:string;
// private 🔥 class 안에서만 읽고,변경 가능 , 밖에서는 읽기도 불가능🔥 details:string;
// public 🔥  class 안에서/바깥에서 둘다 읽고,변경 가능 🔥 amount:number;
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
