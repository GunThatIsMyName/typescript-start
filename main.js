var character = "gan";
var age = 20;
var isMan = true;
// Type 'number' is not assignable to type 'string'.
// character=20;
character = "gunny";
// Type 'string' is not assignable to type 'number'.
// age = "27세";
age = 27;
var doubleNumber = function (num) {
    console.log(num * 2);
};
// Argument of type 'string' is not assignable to parameter of type 'number'.
// doubleNumber("2")
doubleNumber(12);
