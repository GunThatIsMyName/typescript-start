// ARRAY; ❌  ✅
let list = ["one","two"];

list.push("three"); // OK HERE  ✅

// NOT OK HERE  ❌
// list.push(4); 
// NOT OK HERE  ❌

let mixedList = [1,"two"];

mixedList.push(3); // OK HERE  ✅
mixedList.push("four"); // OK HERE  ✅

// OBJECT

let apple ={
    type:"company",
    stock:9999,
    good:true,
}
// NOT OK HERE  ❌
// apple.good = "yes"
// apple.type=ture;
// apple.stock="99999"
 // NOT OK HERE  ❌

 // OK HERE  ✅
apple.type="fruit";
apple.stock=0;
apple.good=false;

apple={
    type:"fruit",
    stock:1,
    good:false,
}


delete apple.good;
 // OK HERE  ✅



