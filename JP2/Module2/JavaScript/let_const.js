//let keyword
// 1. redeclare - not allowed
// 2. reassign - allowed
// let b = "hello";
// console.log(b);
// console.log(a);
// let a;
// console.log(a);
// a =10;
// console.log(a);
// a = 20;
// console.log(a);
// a = "hello"
// console.log(a);

//const keyword 
// 1. redeclaration not allowed
// 2. reassignment not allowed

// const c =20;
// console.log(c);
// // c =20;
// console.log(c);

var num1 = 10;
let num2 = 10;

console.log("num1", num1, "num2", num2);

{
    var num1 = 20;
    let num2 = 20;
    console.log("num1", num1, "num2", num2);
}

console.log("num1", num1, "num2", num2);
