const myArray = [1, 2, "dog", true];

myArray.push(5);
console.log(myArray);       // [ 1, 2, 'dog', true, 5 ]

myArray.unshift(9);
console.log(myArray);       // [ 9, 1, 2, 'dog', true, 5 ]

myArray.shift();
console.log(myArray);       // [ 1, 2, 'dog', true, 5 ]

console.log(myArray.includes(1));    // true

const newArray1 = myArray.join();
console.log(newArray1);       // [ 1, 2, 'dog', true, 5 ]
console.log(newArray1);      // 1,2,dog,true,5

const newArray2 = myArray.slice(1, 3);
console.log(myArray);
console.log(newArray2);     // [ 2, 'dog' ]

const newArray3 = myArray.splice(1, 3);
console.log(myArray);       // [ 1, 5 ]
console.log(newArray3);     // [ 2, 'dog', true ]
