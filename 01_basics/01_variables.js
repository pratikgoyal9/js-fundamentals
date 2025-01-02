const accountId = 12020;
let accountEmail = "pratikgoyal9@xyz.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

accountEmail = "pratikgoyal9@new.com";
accountPassword = "09765";
accountCity = "Udaipur";

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]); // accountState will be logged as undefined

/* 
Notes:

accountId = 11111 // this will throw TypeError: Assignment to constant variable

1. var does not need to initialised always
1. var is loosely typed. var can be reassigned. It can be declared as string and changed to number dynamically
1. var can be used outside its scope as well whereas let and const cannot be

1. let does not need to initialised always
1. let is loosely typed. let can be reassigned. It can be declared as string and changed to number dynamically
1. let is local

1. const must be always initialised
1. const cannot be reassigned any value
1. const is local
 */
