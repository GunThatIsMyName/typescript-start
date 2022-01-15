"use strict";
class World {
    constructor(water, human, size) {
        this.water = water;
        this.human = human;
        this.size = size;
    }
    goToMars() {
        return `Earth has ${this.water} and ${this.size}  amount and ${this.human} human`;
    }
}
const worldOne = new World(true, "gunny", 111);
const worldTwo = new World(false, "minji", 999);
let worlds = [];
worlds.push(worldOne, worldTwo);
console.log(worldTwo.goToMars());
