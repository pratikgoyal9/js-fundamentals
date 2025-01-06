/* 
1. filter() will loop over the array 
1. filter() is a high order function because it accepts function as an argument
1. It accepts callback fn as an argument
1. filter() returns array with the filtered elements
1. When not found, returns empty array
1. Does not modify the original array
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((val) => val % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

const greaterThanTen = numbers.filter((val) => val > 10);
console.log(greaterThanTen); // []
