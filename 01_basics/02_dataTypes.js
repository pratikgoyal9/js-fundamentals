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

null    // it is a standalone value or representation of empty value. 
// For ex, we request location temperature from server, because of error, sever returns empty rather than 0

undefined   // variable is declared but value is not assigned 

symbol

object


*/
