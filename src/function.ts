// functions 은 선언하면 타입을 안먹는것 같다....
// function 은 그냥 const (a:number):number=>{}
// 이런식으로 써주는것 밖에 모르겠다.

let sayHello:Function=()=>{
    console.log("SAY HI");
}

sayHello();

let sayHi=(a:string,b:number):void=>{
    console.log("hi"+a+b)
}

sayHi("minji",2);

let oneFunction:Function=(a:number,b:number)=>{
    console.log(a,b);
}
oneFunction("minji","hoho")

let plusNumber=(a:number,b:number):number=>{
    return a+b;
}

plusNumber(1,4);