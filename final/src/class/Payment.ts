import {HasFormatter} from "../interfaces/HasFormatter.js"

export class Payment implements HasFormatter {
  constructor(
    readonly reciever: string,
    private details: string,
    public amount: number
  ) {}

  format(): string {
    return `${this.reciever} is owed $${this.amount} for ${this.details}`;
  }
}