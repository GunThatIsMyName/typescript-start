"use strict";
const dog = {
    numLegs: 3,
    cute: true,
    breed: "dog",
    eat(text) {
        console.log(`${text}this is my favorite food`);
    },
    hobby(number) {
        return `i do ${number} times hobby a day`;
    }
};
dog.eat("beef");
const barkbark = (animal) => {
    console.log(animal, "??");
};
barkbark(dog);
