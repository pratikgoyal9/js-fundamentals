console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3); // 8
console.log(2 / 2);
console.log(5 % 2); // 1

let str1 = "hello";
let str2 = " Pratik";
console.log(str1 + str2);

let str3 = "1" + 2;
console.log(str3); // 12
console.log(typeof str3); // string

console.log(1 + 2 + "2"); // 32.. started from left to right and then as a string
console.log("1" + 2 + 2); // 122.. started from left to right because string is in first

console.log(3 + ((4 * 5) % 3)); // M < Mo < Ad

console.log((3 + 4) * (5 % 3)); //14... better to use paranthesis and then, data brackets takes over

console.log(+true); //1.. but bad practice
console.log(+""); //0.. bad practice

// prefix and postfix
let a = 3;
const b = a++; // use and then change
console.log(a, b); // 4, 3

let x = 3;
let y = ++x; // change and then use
console.log(x, y); // 4, 4
