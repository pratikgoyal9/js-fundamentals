"use strict"; // treat all JS code as newer version

const age = 33;

console.log(typeof age); // returns number
console.log(typeof undefined); // returns undefined
console.log(typeof null); // returns object

/*
Notes:

alert(3 + 3);    // we are using nodejs, not browser

Commonly used data types are as below:

number => limit is upto (2^53-1)

BigInt  // used mostly in finance sector else number is good enough

string => "" or ''

boolean => true or false

null    // Represents intentional absence of any object value. It takes some space is memory
// For ex, we request location temperature from server, because of error, sever returns empty rather than 0

undefined   // Represents a variable declared but not assigned a value. It does very less space in memory

symbol

object
// Define an object
const person = {
  name: "Pratik",
  age: 33,
  isStudent: false,
};

// Add new property
person.country = "India";
console.log(person.country); // "India"

// Access properties
console.log(person.name); // "Pratik"
console.log(person.age);  // 30

*/
