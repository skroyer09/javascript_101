// my current age
const myAge = 30;
// earlyYears
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;

let myAgeInDogYears = earlyYears + laterYears;

let myName = "Steffen".toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in dog years`
);
