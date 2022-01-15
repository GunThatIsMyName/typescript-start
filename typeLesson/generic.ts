// T만 쓰면 any 타입 같은 효과다 별로 안좋다 된다 
// Generic !!!

const addUid = <T extends {name:string}>(obj:T)=>{
    let uid = Math.floor(Math.random()*100);
    return {...obj,uid}
}

let docOne = addUid({name:"gun",age:33});
let docTwo = addUid({name:"minji",age:"33"});

console.log(docOne);
console.log(docOne.name);
console.log(docOne.age);