const userName = 'pratik';

console.log(userName.toUpperCase());    // PRATIK
console.log(userName);      // pratik

console.log(userName.charAt(3));    // t
console.log(userName.indexOf('t'));     // 3

// substring(or more): end index is -1 of end index
console.log(userName.substring(0, 4));      // prat

console.log(userName.slice(0, 4));      // prat
console.log(userName.slice(-3, 6));     // tik
