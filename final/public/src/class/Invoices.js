// readonly π₯  class μ/λ°κΉ₯ λλ€ μ½κΈ°λ§ κ°λ₯ π₯ client:string;
// private π₯ class μμμλ§ μ½κ³ ,λ³κ²½ κ°λ₯ , λ°μμλ μ½κΈ°λ λΆκ°λ₯π₯ details:string;
// public π₯  class μμμ/λ°κΉ₯μμ λλ€ μ½κ³ ,λ³κ²½ κ°λ₯ π₯ amount:number;
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
