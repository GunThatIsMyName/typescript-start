"use strict";
// functions 은 선언하면 타입을 안먹는것 같다....
// function 은 그냥 const (a:number):number=>{}
// 이런식으로 써주는것 밖에 모르겠다.
let sayHello = () => {
    console.log("SAY HI");
};
sayHello();
let sayHi = (a, b) => {
    console.log("hi" + a + b);
};
sayHi("minji", 2);
let oneFunction = (a, b) => {
    console.log(a, b);
};
oneFunction("minji", "hoho");
let plusNumber = (a, b) => {
    return a + b;
};
plusNumber(1, 4);
