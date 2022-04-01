
// function keyword(parameters){
//     //body
// }

//1. Normal function
function f1()
{
    console.log("hello I am function1")
}

f1()

//2. function with parameters
function f2(a,b)
{
    console.log("Sum of a & b", a+b)
}

f2(10,15);

//3. function which returns something
function f3(a,b)
{
   return a*b;
}

let ans = f3(21,5);
console.log(ans);
console.log(f3(30,5));