const prompt = require('prompt-sync')({ sigint: true });

const levels = {
  1: { level: 'Easy', attempts: 10 },
  2: { level: 'Medium', attempts: 5 },
  3: { level: 'Hard', attempts: 3 },
};

const getRandNumber = (MIN, MAX) => Math.trunc(Math.random() * (MAX - MIN + 1)) + MIN;

const getValidNumber = function (message) {
  let value = prompt(message);
  while (Number.isNaN(Number(value)) || value.trim() === '' || !Number.isInteger(Number(value))) {
    console.log('Please enter a valid number!\n');
    value = prompt(message);
  }
  return Number(value);
};

const chooseLevel = function () {
  console.log(`Please select the difficulty level:\n`);
  for (const [key, { level, attempts }] of Object.entries(levels)) {
    console.log(`${key}. ${level} (${attempts} chances)`);
  }

  console.log('');
  let choice = getValidNumber('Enter your choice: ');
  while (!levels[choice]) {
    console.log('Please select an available game level!\n');
    choice = getValidNumber('Enter your choice: ');
  }

  const { level, attempts } = levels[choice];
  console.log(`\nGreat! You have selected the ${level} difficulty level.`);

  return attempts;
};

const playGame = function (totalAttempts, MIN, MAX) {
  const secret = getRandNumber(MIN, MAX);
  let attemptsCount = 0;
  let win = false;

  console.log(`Let's start the game! You have ${totalAttempts} attempts.`);

  while (!win && totalAttempts > 0) {
    console.log('');
    let userGuess = Number(getValidNumber('Enter your guess: '));

    while (userGuess < MIN || userGuess > MAX) {
      console.log(`\navailable numbers from ${MIN} to ${MAX} only!`);
      userGuess = Number(getValidNumber('Enter your guess: '));
    }

    attemptsCount++;
    totalAttempts--;

    if (userGuess === secret) {
      console.log(
        `Congratulations! You guessed the correct number in ${attemptsCount} attempt(s).`,
      );
      win = true;
    } else {
      if (userGuess > secret) {
        console.log(`Incorrect! The number is less than ${userGuess}.`);
      } else if (userGuess < secret) {
        console.log(`Incorrect! The number is greater than ${userGuess}.`);
      }
      console.log(`${totalAttempts} attempt(s) remaining.`);
    }
  }

  if (!win) console.log(`\nYou are out of attempt(s)!, the number was ${secret}.`);
};

// --- Main ---

const MIN = 1;
const MAX = 100;

console.log(`\nWelcome to the Number Guessing Game!`);
console.log(`I'm thinking of a number between ${MIN} and ${MAX}.\n`);

const totalAttempts = chooseLevel();
playGame(totalAttempts, MIN, MAX);
