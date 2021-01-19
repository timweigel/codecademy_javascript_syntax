// setting my age; it will not change
const myAge = 44;

// I guess this will change?
let earlyYears = 2;

//earlyYears *= 10.5;
earlyYears = earlyYears * 10.5;

// since early and later years are effectively different rates, we need to account for this
let laterYears = myAge - 2;

// later years account for less-rapid aging than earlier
//laterYears *= 4;
laterYears = laterYears * 4;

/*
console.log(myAge);
console.log(earlyYears);
console.log(laterYears);
*/

// The total of my age in dog years
const myAgeInDogYears = earlyYears + laterYears;

let myName = 'Tim';
// For some reason we're putting this in lower case. OK.
myName = myName.toLowerCase();

// interpolating the above variables into a string to present the values
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)