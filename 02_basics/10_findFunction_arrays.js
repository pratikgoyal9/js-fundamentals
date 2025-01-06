/* 
1. find() will loop over the array 
1. find() is a high order function because it accepts function as an argument
1. It accepts callback fn as an argument
1. find() returns the element
1. When not found, returns undefined
1. Does not modify the original array
*/

const students = ["Pratik", "John", "Bill", "Amy", "Pratik"];

const result = students.find((val) => val === "Pratik"); // Pratik
console.log(result);

/* ************************************************************* */

/* 
1. findIndex() will loop over the array 
1. findIndex() is a high order function because it accepts function as an argument
1. It accepts callback fn as an argument
1. findIndex() returns the index of the element
1. When not found, returns -1
*/

const resultIndex = students.findIndex((val) => val === "John");
console.log(resultIndex); // 1
