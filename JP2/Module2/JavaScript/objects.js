//objects
// object-properties
// properties-> key: value pair 

// let student = {
//     fname : "Akanksha",
//     sname : "Gupta",
//     E_no : 123,
//     City: "Ghaziabad",
//     State : "UP",
        
// }

// console.log(student.sname);
// student.email = "xyz@abc";
// console.log(student.email);
// console.log(".....................................");
// console.log(student);

let capAmerica = {
    firstName : "Steve",
    secondName : "Rogers",
    friends : ['Bucky', 'Tony', 'Dr Banner', 'Natasha'],
    age: 100,
    isFirstAvenger : false,
    address:{
        city: 'New York',
        State : "Queens"

    },

    fn : function(){
        console.log("Hey I am function inside an object");
        
    }

}

// // console.log(capAmerica);
// console.log(capAmerica.address.State);
// console.log(capAmerica.friends[2]);
// console.log(capAmerica.fn());

// console.log(capAmerica["address"]["State"]);
// console.log(capAmerica[friends[2]]);



console.log("with dot notation: " , capAmerica.firstName);
console.log(" with square bracket: ", capAmerica["firstName"]);

let first =  'secondName';
console.log("with dot notation: " , capAmerica.firstName);
console.log(" with square bracket: ", capAmerica[first]);
console.log("with dot notation: " , capAmerica.first);

capAmerica.hobby = ["singing","dancing",];
console.log(capAmerica);

delete capAmerica.hobby;
console.log(capAmerica);







