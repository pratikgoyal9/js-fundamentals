/*  Stack and Heap

All primitive types uses stack memory. It means that they create a copy rather than changing the original value

All non-primitive types uses heap. It means that they use the same reference

*/

// stack example
let myYoutubeName = "Pratik";

let anotherName = myYoutubeName;
anotherName = "Rishabh";

console.table([myYoutubeName, anotherName]);


// heap example
let userOne = {
    name: "Pratik"
}

let userTwo = userOne;
userTwo.name = "Rishabh";

console.table([userOne.name, userTwo.name]);
