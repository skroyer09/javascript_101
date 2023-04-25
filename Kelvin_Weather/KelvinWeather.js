// Current temperature in kelvin degrees
const kelvin = 293;

// Converting kelvin to celsius
const celsius = kelvin - 273;

// Converting celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// Round down the fahrenheit variable
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);
