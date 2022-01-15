export class World {
    constructor(water, human, size) {
        this.water = water;
        this.human = human;
        this.size = size;
    }
    goToMars() {
        return `Earth has ${this.water} and ${this.size}  amount and ${this.human} human`;
    }
}
// tsconfig.json 에서
// module => es2015;
// target => es6
