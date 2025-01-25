console.log("2" < 1);   // false
console.log("02" < 1);  // false

console.log(null == 0);     // false
console.log(null <= 0);     // true
console.log(null >= 0);     // true


/*
comparision: < > <= >=
1. comparision converts null to a number, treating null as 0

equality: ==
1. assignment(=) is used to assign a value
1. equality(==) is used to compare the 2 values
1. strict equality (===) is used to compare the 2 values and it's type

1. Use strict operators in JS
*/

console.log("2" == 2);      // true
console.log("2" === 2);     // false due to check on the type as well
