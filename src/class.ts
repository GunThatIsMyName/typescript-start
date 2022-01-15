class World {
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

const worldOne = new World(true,"gunny",111);
const worldTwo = new World(false,"minji",999);

let worlds:World[]=[];

worlds.push(worldOne,worldTwo);
console.log(worldTwo.goToMars());