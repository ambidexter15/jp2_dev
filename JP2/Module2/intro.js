//parampara
console.log("Hello World");
console.log("Hello Pepcoder");

//Declaraing a variable
//let, const, var 

let a;
a = "Akanksha"; //String
console.log("My name is", a);

let b = 10;    //number
console.log("I am number:", b);

let c;
c = true;    //boolean
console.log("I am boolean value which says:",c);

let d = null;   //null
console.log("Hey I am the coolest:", d);

//if,else 

let num = 28;

if(num%2==0)
{
    console.log(num, "is an even number");
}

else {
    console.log(num, "is an odd number");
}

//loops -> for , while 

for(let i=1; i<20; i++)
{
    console.log("I am in for loop: ",i);
}

let limit = 10;
while(limit>0)
{
    console.log("I am in while loop: ",limit);
    limit--;
}

//Check if 17 is a prime number or not;
let n1 =  17;
let flag = true;

for(let i=2; i<=n1/2; i++)
{
   if(n1%i==0)
   {
       flag = false;
   }
}

if(flag == true)
{
    console.log(n1, "is a prime number");
}

else{
    console.log(n1, "is not a prime number");
}


