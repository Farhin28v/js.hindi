let score = "33abc"



	
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// NaN => not a number
//"33" => 33
//"33abc" => NaN
// true = 1; false 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//"" => false
//"Farhin" => true

let someNumber = 29;

let stringNumber = String(someNumber) // to convert => String, should be capital

console.log(stringNumber);