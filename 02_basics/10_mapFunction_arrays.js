/* 
1. map() will loop over the array 
1. map() is a high order function because it accepts function as an argument
1. It accepts callback fn as an argument
1. The changes in callback function does not change the original value 
*/

const students = ["Pratik", "John", "Bill", "Amy"];

students.map((val) => console.log(val + "G")); // PratikG JohnG BillG AmyG
console.log(students); //  ['Pratik', 'John', 'Bill', 'Amy']

/* ************************************************************* */

/* 
1. map() returns a new array 
*/

const numbers = [1, 2, 3, 4, 5, 6, 7];

let doubleNumbers = numbers.map((val) => val * 2);

console.log(doubleNumbers); // [2, 4, 6, 8, 10, 12, 14]

console.log(numbers); // [1, 2, 3, 4, 5, 6, 7]
