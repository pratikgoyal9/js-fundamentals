const date = new Date();
console.log(date.toString());       // prints current date, time and time zone
console.log(date.toDateString());       // prints only date
console.log(date.toTimeString());       // prints only time and time zone
console.log(typeof date);       // object

const customDate1 = new Date(2023, 0, 20);      //  Fri Jan 20 2023
console.log(customDate1.toDateString());

const customDate2 = new Date(1970, 0, 1, 1, 0, 0, 0);
console.log(customDate2.toDateString());    // Thu Jan 01 1970
console.log(customDate2.getTime());     // 1

const customDate3 = new Date(2023, 22, 31);      //  Sun Dec 01 2024
console.log(customDate3.toDateString());

const customDate4 = new Date();
console.log(customDate4.toLocaleDateString(
    'default', {
        timeZone: "IST" 
    }
));     // 12/30/2024

console.log(customDate4.toLocaleDateString(
    'default', {
        timeZone: "CET" 
    }
));     // 12/29/2024

const myDate1 = Date.now();
console.log(myDate1);        // 1735505348514
