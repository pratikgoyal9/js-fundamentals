const myArray = [1, 2, "dog", true];

myArray.push(5);
myArray.push({ objectName1: "objectValue1" });
myArray.push({ objectName2: "objectValue2" });
myArray.pop(); // removes the last element from an array

console.log(myArray); // [ 1, 2, 'dog', true, 5, { objectName1: 'objectValue1' } ]

myArray.reverse();
console.log("Reverse is:", myArray);

myArray.unshift(9);
console.log(myArray); // [ 9, 1, 2, 'dog', true, 5 ]

myArray.shift();
console.log(myArray); // [ 1, 2, 'dog', true, 5 ]

console.log(myArray.includes(1)); // true

const newArray1 = myArray.join();
console.log(newArray1); // [ 1, 2, 'dog', true, 5 ]
console.log(newArray1); // 1,2,dog,true,5

/* 
1. slice() helps to return the part of the array. Syntax: arrayName.slice(2, 5)
1. Start index would include the start.
1. End index would include the (endIndex - 1). Ex. arrayName.slice(2, 5). It will consider from 2 to 4
1. When end index is not mentioned, it will consider the last index of the array. Ex. arrayName.slice(2)
1. When start index is also not mentioned, it wil return the original array. Ex. arrayName.slice()
1. Does not modify the original array
*/

const newArray = [1, 2, "dog", true];
const newArray2 = newArray.slice(1, 3);
console.log("Original array after slice: ", newArray);
console.log(newArray2); // [ 2, 'dog' ]

/* ************************************************************* */
/* 
1. splice() helps to remove the part of the array. Syntax: arrayName.splice(2, 5)
1. It returns the removed part
1. It modifies the original array by removing elements from it
1. Start index would include the start.
1. End index would include the end. Ex. arrayName.splice(2, 5). It will consider from 2 to 5
1. When end index is not mentioned, it will consider the last index of the array. Ex. arrayName.splice(2)
1. When start index is also not mentioned, it wil return the original array. Ex. arrayName.splice()
*/

const anotherArray = [1, 2, 3, 4, 5, 6];
const splicedArray = anotherArray.splice(1, 3);
console.log("Original array after splice: ", anotherArray); // [ 1, 5, 6 ]
console.log(splicedArray); // [ 2, 3, 4 ]

/* Notes:
1. if array is declared, it cannot be reassigned 
1. However, values can be changed or added to the array or deleted or changed
1. Arrays in JS are homoegenous. It can also contain different types of data types
*/

// splicedArray = ["Alexa"]; // will return error

splicedArray[0] = ["Alexa"]; // will run fine

console.log(splicedArray); // [ 'Alexa', 3, 4 ]
