
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

//4. Immediately invoked functional expressions (IIFE)
(function f4(){
    console.log("I am an IIFE")
   })();

//5. Immediately invoked functional expressions (IIFE) with parameter

(function f5(a=2,b=4){
    console.log("I am an IIFE with parameters", a*b)
})();


//6. function as a variable 

let f6 = function f5()
{
    console.log("Hello I am variable function")
}

console.log(f6);
console.log(f6());

let random;
console.log("random:",random);

let f7 = function f5(x,y)
{
    console.log("Hey I am function 7")
    return x +y;
}

console.log("f7 : ",f7(10,20));

