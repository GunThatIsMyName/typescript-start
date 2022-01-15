"use strict";
//⭐️ 1.explict Type
let stockName;
let stockPrice;
let stockOpen;
// stockName=10;
stockName = "AAPL";
stockName = 1111;
// stockPrice="1000";
stockPrice = 10000;
//⭐️ 2.Array Type
// let noPushList:string[]; => undefined
// console.log(noPushList,"1")
let stockList = [];
console.log(stockList, "2");
// stockList.push(11,true,"BAC");
stockList.push("AAPL", "MSFT", "BAC");
// ⭐️ 3. Union Type
let unionList = [];
unionList.push("hello");
unionList.push(3);
// ⭐️ 4. Object Type
let oneOBJ = {};
oneOBJ = {
    name: "gunny",
    awesome: true,
};
let twoOBJ = { name: "minji", age: 0, awesome: true };
twoOBJ.name = "minji";
twoOBJ.age = 1;
twoOBJ.awesome = true;
console.log(twoOBJ);
