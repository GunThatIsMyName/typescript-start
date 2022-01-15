interface IsAnimal{
    numLegs:number;
    cute:boolean;
    breed:string;
    eat(food:string):void;
    hobby(number:number):string;
}

const dog :IsAnimal={
    numLegs:3,
    cute:true,
    breed:"dog",
    eat(text:string):void{
        console.log(`${text}this is my favorite food`)
    },
    hobby(number:number):string{
        return`i do ${number} times hobby a day`
    }
}

dog.eat("beef");

const barkbark=(animal:IsAnimal)=>{
    console.log(animal,"??");
}
barkbark(dog);