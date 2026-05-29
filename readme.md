# Number Guessing Game (CLI)

A simple, interactive command-line interface (CLI) number guessing game built with Node.js. The application generates a random number between 1 and 100 and challenges the player to guess it within a selected difficulty level's attempt limit.

This project was built as part of the [roadmap.sh](https://roadmap.sh/projects/number-guessing-game) backend developer challenges.

## Features

- **Difficulty Levels:** Choose between Easy (10 chances), Medium (5 chances), or Hard (3 chances).
- **Input Validation:** Handles invalid choices or non-numeric guesses gracefully.
- **Clean Game Loop:** Gives feedback ("Too high", "Too low") after each guess and tracks the number of attempts used.
- **Graceful Exit:** Supports `Ctrl + C` handling to quit the game cleanly at any time.

## Tech Stack

- **Runtime:** Node.js
- **Dependencies:** `prompt-sync` (for synchronous CLI user input)

## Installation & Setup

Follow these steps to run the game locally:

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/Mohamed/number-guessing-game.git](https://github.com/Mohamed/number-guessing-game.git)
   cd number-guessing-game
   ```

2. **Install dependencies:**

   Make sure you have Node.js installed, then run:

   ```bash
   npm install
   ```

3. **Run the game:**

   Make sure you have Node.js installed, then run:

   ```bash
   node index.js
   ```

## How to Play

1. **Run the start command to launch the game menu.**
2. **Select your difficulty level by typing the corresponding number or name.**
3. **Start guessing! The system will tell you if your guess is too high or too low.**
4. **Keep going until you find the secret number or run out of chances. Happy hunting!**
