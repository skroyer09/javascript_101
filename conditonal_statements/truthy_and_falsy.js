let wordCount = 10;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log("Better get to work!");
}

let favoritePhrase = null;

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log("This string is definitely empty.");
}

/*

Let’s consider how non-boolean data types, 
like strings or numbers, are evaluated when checked inside a condition.

Sometimes, you’ll want to check if a variable exists 
and you won’t necessarily want it to equal a specific value — 
you’ll only check to see if the variable has been assigned a value

So which values are falsy— or evaluate to 
false when checked as a condition? The list 
of falsy values includes:

- 0

- Empty strings like "" or ''

- null which represent when there is no value at all

- undefined which represent when a declared variable lacks a value

- NaN, or Not a Number

*/
