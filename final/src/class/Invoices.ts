// readonly 🔥  class 안/바깥 둘다 읽기만 가능 🔥 client:string;
// private 🔥 class 안에서만 읽고,변경 가능 , 밖에서는 읽기도 불가능🔥 details:string;
// public 🔥  class 안에서/바깥에서 둘다 읽고,변경 가능 🔥 amount:number;

// ⭐️ constructor 안에 한번에 정리가능

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
