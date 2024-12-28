/* Notes:

# Primitive (Call by value): String, Number, Boolean, null, undefined, BigInt, Symbol

Ex.
const name = "Pratik"   // String
const employeeId = 1    // Number
const isEmployee = true     // Boolean
const outsideTemperature = null     // null
let futureEmployeedId       // undefined
const bigNumber = 1234567890n   // BigInt

# Non-Primitive (Reference): Array, Object, Function
1. All Non-Primitive returns typeof as object

Q. Is JS dynamic or static types?
A. JavaScript is dynamically typed, meaning variable types are determined at runtime and can change. When declaring a variable, we always don't have to mention the type.

Ex:
const score = 100
const isProfessional = true

 */

// bigint
const bigNumber = 1234567890n   // BigInt
console.log(typeof bigNumber);      // bigint

// symbol
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(typeof id);     // symbol
console.log(id === anotherId);      // false

// array
const marvelHeroes = ["Batman", "Superman", "Spiderman"]
console.log(typeof marvelHeroes);   // Object 

// Object
let myObj = {
    name: "Pratik",
    age: 18
}

// variable function
const myFunction = function() {
    console.log("Hello function");
}
console.log(typeof myFunction);   // returns "function" but aka Object function