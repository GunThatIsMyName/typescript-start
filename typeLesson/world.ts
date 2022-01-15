export class World {
    constructor(
        readonly water:boolean,
        private human:string,
        public size:number
    ){
    }
    goToMars(){
        return `Earth has ${this.water} and ${this.size}  amount and ${this.human} human`
    }
}

// tsconfig.json 에서
// module => es2015;
// target => es6