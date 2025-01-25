/* 
1. forEach() will loop over the array 
1. forEach() is a high order function because it accepts function as an argument
1. It accepts callback fn as an argument
1. The changes in callback function does not change the original value
*/

const students = ["Pratik", "John", "Bill", "Amy"];

students.forEach((n) => console.log(n + "G")); // PratikG JohnG BillG AmyG

console.log(students); // ['Pratik', 'John', 'Bill', 'Amy']

/* ************************************************************* */

/* 
1. forEach() does not return any new array 
*/

const numbers = [1, 2, 3, 4, 5, 6, 7];

let newDouble = numbers.forEach((n) => n * 2);
console.log(newDouble); // undefined
