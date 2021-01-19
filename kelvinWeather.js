// The temperature forecast is 293; this value will not change so we use const
const kelvin = 0;

// This converts k to c by subtracting 273; it will not change
const celsius = kelvin - 273;

// Converting c to f is a little more complex. We will need to manipulate the value stored in the variable, so we use let instead of const
let fahrenheit = celsius * (9/5) + 32;

// For this exercise we want a whole number, so we'll round it down
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);