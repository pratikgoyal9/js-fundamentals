const accountId = 12020;
let accountEmail = "pratikgoyal9@xyz.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

accountEmail = "pratikgoyal9@new.com";
accountPassword = "09765";
accountCity = "Udaipur";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/* 
Notes:

accountId = 11111 // this will throw incorrect assignment error

Try not to use var because of issue in block scope and functional scope

 */ 