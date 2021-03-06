// readonly π₯  class μ/λ°κΉ₯ λλ€ μ½κΈ°λ§ κ°λ₯ π₯ client:string;
// private π₯ class μμμλ§ μ½κ³ ,λ³κ²½ κ°λ₯ , λ°μμλ μ½κΈ°λ λΆκ°λ₯π₯ details:string;
// public π₯  class μμμ/λ°κΉ₯μμ λλ€ μ½κ³ ,λ³κ²½ κ°λ₯ π₯ amount:number;

// β­οΈ constructor μμ νλ²μ μ λ¦¬κ°λ₯

// readonly client: string;
// private details: string;
// public amount: number;
// constructor(c: string, d: string, a: number) {
//   this.client = c;
//   this.details = d;
//   this.amount = a;
// }

import {HasFormatter} from "../interfaces/HasFormatter.js"


export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format(): string {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
