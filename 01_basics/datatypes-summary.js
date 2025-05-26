//   Primitive

//7 Datatypes : String, Number, Boolearn, Null, Undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 910114734899087n

console.log(bigNumber);



// Reference types/non-primitive

// Array, Objects, Functions

const heroes = ["Harry Potter", "Katniss", "Doraemon"]

console.log(heroes);


// arrays are written in square brackets

let myObj = {

    name:"Farhin",
    age:19,

}

console.log(myObj);


// objects are written between curly brackets


const MyFunction = function (){

    console.log("Hello Baby");
    
}


