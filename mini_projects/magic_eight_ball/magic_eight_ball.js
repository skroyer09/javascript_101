// Declare a variable userName and assign it a string value
let userName = "Steffen";

// Use a ternary operator to check if userName is truthy, and log a greeting message accordingly
userName ? console.log(`Hello, ${userName}`) : console.log("Hello!");

// Declare a variable userQuestion and assign it a string value
let userQuestion = "Is One Piece the Goat?";

// Log a message that includes the value of userName and userQuestion
console.log(`${userName} has asked - ${userQuestion}`);

// Generate a random integer between 0 and 7 (inclusive) and assign it to the variable randomNumber
let randomNumber = Math.floor(Math.random() * 8);

// Declare an empty string variable eightBall
let eightBall = "";

// Use a switch statement to assign a response to eightBall based on the value of randomNumber
switch (randomNumber) {
  case 0:
    eightBall = "Yes!";
    break;
  case 1:
    eightBall = "Yes! No CAP";
    break;
  case 2:
    eightBall = "Eror try again";
    break;
  case 3:
    eightBall = "Asked me when its done";
    break;
  case 4:
    eightBall = "No!";
    break;
  case 5:
    eightBall = "Hell no!";
    break;
  case 6:
    eightBall = "Naruto better";
    break;
  case 7:
    eightBall = "Chainsaw Man better";
    break;
  case 8:
    eightBall = "Why ask me? Try from your own opinions instead";
    break;
}

// Log a message that includes the value of eightBall
console.log(`The Magic 8 Ball says, ${eightBall}`);
