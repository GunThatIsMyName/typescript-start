"use strict";
// type Aliases 타입 앨리아스
let aliasType = (a, b) => {
    console.log(a, b);
};
let aliasTypeTwo = (a, b) => {
    console.log(a, b);
};
let personName = (user) => {
    console.log(user);
};
let minjiObj = (user) => {
    console.log(user);
    return user.id;
};
personName({ name: 1, age: 32 });
minjiObj({ id: 1, title: "hoho", path: "yes" });
const ganJob = (it) => {
    return it;
};
ganJob({ company: "apple", where: "포항", easy: false });
