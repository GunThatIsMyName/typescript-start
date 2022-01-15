import { World } from "./class/world.js";

const worldOne = new World(true,"gunny",111);
const worldTwo = new World(false,"minji",999);

let worlds:World[]=[];

worlds.push(worldOne,worldTwo);
console.log(worldTwo.goToMars());