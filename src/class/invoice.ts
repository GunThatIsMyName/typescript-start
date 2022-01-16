class Invoice {
    client:string;
    details:string;
    amount:number;
    constructor(c:string,d:string,a:number){
        this.client = c;
        this.details=d;
        this.amount=a;
    }

    format():string{
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOne=new Invoice("minji","바보",200)
const invTwo=new Invoice("gun","천재",600);

let invoices :Invoice[]=[];

invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices)