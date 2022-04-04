// var keyword
// 1. redeclare 
//2. reassign.

// var a =10;
// console.log(a);  //10
// a =30;
// console.log(a);  //30
// var a = 20;
// // console.log(a);  //20
// var a = "Hello";
// console.log(a);  //Hello

// function fn(){
//     console.log(a); //undefined
//     var a = 40;
//     console.log(a);  //40
// }
// fn();
// console.log("Hey I am outside function", a);  //hello

//scope
// function fn1(){
//     console.log(a);
// }
// fn1();
var a = 40;
console.log(a);
function b() {
    console.log("Hey I am inside b", a);
}

console.log("I am line 33: ", a);
function fn3(){
    var a = 30;
    b();
    console.log("I am line 37:", a);
}
fn3();