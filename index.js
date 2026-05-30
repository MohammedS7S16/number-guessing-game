const prompt = require('prompt-sync')({ sigint: true });

const levels = {
  easy: { choice: 1, attempts: 10 },
  medium: { choice: 2, attempts: 5 },
  hard: { choice: 3, attempts: 3 },
};

let keepPlaying = true;
let randNumber = Math.trunc(Math.random() * 100) + 1;
let userChoice = levels.easy.choice;
let i = 1;

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

const checkUserGuess = function (userGuess, keepPlaying) {
  if (userGuess === randNumber) {
    console.log(
      `Congratulations! You guessed the correct number in ${i} attempts.`,
    );
    return (keepPlaying = false);
  } else if (userGuess > randNumber) {
    console.log(`Incorrect! The number is less than ${userGuess}.`);
  } else if (userGuess < randNumber) {
    console.log(`Incorrect! The number is greater than ${userGuess}.`);
  } else {
    console.log('Invalid Input!');
  }
  return keepPlaying;
};

const playGame = function (availableAttempts) {
  console.log(`Let's start the game!`);

  while (keepPlaying && i <= availableAttempts) {
    console.log('');
    const userGuess = Number(prompt('Enter your guess: '));
    keepPlaying = checkUserGuess(userGuess, keepPlaying);

    i++;
  }
};

// TODO: make start, end numbers dynamic not static
console.log(
  `Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100.\n`,
);

console.log(
  `Please select the difficulty level:\n${levels.easy.choice}. Easy (${levels.easy.attempts} chances)\n${levels.medium.choice}. Medium (${levels.medium.attempts} chances)\n${levels.hard.choice}. Hard (${levels.hard.attempts} chances)\n`,
);

userChoice = Number(prompt('Enter your choice: '));

playGame(chooseLevel(userChoice));
