const prompt = require('prompt-sync')({ sigint: true });

const easyLevelChoice = 1;
const mediumLevelChoice = 2;
const hardLevelChoice = 3;

const easyLevelAttempts = 10;
const mediumLevelAttempts = 5;
const hardLevelAttempts = 3;

let randNumber = Math.trunc(Math.random() * 100) + 1;
let totalAttempts = easyLevelAttempts;
let i = 1;
let keepPlaying = true;

// TODO: make start, end numbers dynamic not static
console.log(
  `Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100.\nYou have 5 chances to guess the correct number.\n`,
);

console.log(
  `Please select the difficulty level:\n1. Easy (${easyLevelAttempts} chances)\n2. Medium (${mediumLevelAttempts} chances)\n3. Hard (${hardLevelAttempts} chances)\n`,
);

totalAttempts = Number(prompt('Enter your choice: '));

if (totalAttempts === easyLevelChoice)
  console.log('\nGreat! You have selected the Easy difficulty level.');
else if (totalAttempts === mediumLevelChoice)
  console.log('\nGreat! You have selected the Medium difficulty level.');
else if (totalAttempts === hardLevelChoice)
  console.log('\nGreat! You have selected the Hard difficulty level.');
else console.log('Invalid Input!');

console.log(`Let's start the game!`);

while (keepPlaying) {
  console.log('');
  const userInput = Number(prompt('Enter your guess: '));

  if (userInput === randNumber) {
    console.log(
      `Congratulations! You guessed the correct number in ${i} attempts.`,
    );
    keepPlaying = false;
  } else if (userInput > randNumber) {
    console.log(`Incorrect! The number is less than ${userInput}.`);
  } else if (userInput < randNumber) {
    console.log(`Incorrect! The number is greater than ${userInput}.`);
  } else {
    console.log('Invalid Input!');
  }

  i++;
}
