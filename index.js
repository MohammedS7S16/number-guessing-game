const prompt = require('prompt-sync')({ sigint: true });

const levels = {
  easy: { choice: 1, attempts: 10 },
  medium: { choice: 2, attempts: 5 },
  hard: { choice: 3, attempts: 3 },
};

const chooseLevel = function (userChoice) {
  if (userChoice === levels.easy.choice) {
    console.log('\nGreat! You have selected the Easy difficulty level.');
    return levels.easy.attempts;
  } else if (userChoice === levels.medium.choice) {
    console.log('\nGreat! You have selected the Medium difficulty level.');
    return levels.medium.attempts;
  } else if (userChoice === levels.hard.choice) {
    console.log('\nGreat! You have selected the Hard difficulty level.');
    return levels.hard.attempts;
  } else console.log('Invalid Input!');
};

const checkUserGuess = function (randNumber, userGuess, attemptCount, win) {
  if (userGuess === randNumber) {
    console.log(`Congratulations! You guessed the correct number in ${attemptCount} attempts.`);
    return (win = true);
  } else if (userGuess > randNumber) {
    console.log(`Incorrect! The number is less than ${userGuess}.`);
  } else if (userGuess < randNumber) {
    console.log(`Incorrect! The number is greater than ${userGuess}.`);
  } else {
    console.log('Invalid Input!');
  }
  return win;
};

const playGame = function (totalAttempts, min, max) {
  const randNumber = Math.trunc(Math.random() * (max - min + 1)) + min;
  let leftAttempts = totalAttempts;
  let attemptCount = 0;
  let win = false;

  console.log(`Let's start the game!`);

  while (!win && leftAttempts > 0) {
    console.log('');
    const userGuess = Number(prompt('Enter your guess: '));

    attemptCount++;
    win = checkUserGuess(randNumber, userGuess, attemptCount, win);

    leftAttempts--;
  }

  if (!win) console.log(`\nYou are out of attempts!, the number was ${randNumber}.`);
};

// --- Main ---

const min = 1;
const max = 100;

console.log(
  `Welcome to the Number Guessing Game!\nI'm thinking of a number between ${min} and ${max}.\n`,
);

console.log(
  `Please select the difficulty level:\n${levels.easy.choice}. Easy (${levels.easy.attempts} chances)\n${levels.medium.choice}. Medium (${levels.medium.attempts} chances)\n${levels.hard.choice}. Hard (${levels.hard.attempts} chances)\n`,
);

const userChoice = Number(prompt('Enter your choice: '));

playGame(chooseLevel(userChoice), min, max);
