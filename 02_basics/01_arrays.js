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

const newArray2 = myArray.slice(1, 3);
console.log(myArray);
console.log(newArray2); // [ 2, 'dog' ]

const newArray3 = myArray.splice(1, 3);
console.log(myArray); // [ 1, 5 ]
console.log(newArray3); // [ 2, 'dog', true ]

/* Notes:
1. if array is declared using, it cannot be reassigned 
1. However, values can be changed or added to the array or deleted or changed
1. Arrays in JS are homoegenous. It can also contain different types of data types
*/

// newArray3 = ["Alexa"]; // will return error

newArray3[0] = ["Alexa"]; // will run fine
