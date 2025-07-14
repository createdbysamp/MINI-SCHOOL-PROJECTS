// make a program for a guess the number game //

// import node modules
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import chalk from "chalk";

// import readline
const rl = readline.createInterface({ input, output });

// set up a random number generator that multiplies it by 100
// set the number to a variable
const generateNum = Math.floor(Math.random() * 100);

// create count variable
let count = 0;

const playGame = async (num) => {
  // readline for the user to input their number
  do {
    const userInput = await rl.question(
      chalk.blue("Guess a number (between 1 -> 100) Enter your number here! ")
    );
    const userNum = parseInt(userInput);
    console.log(`Your number is ... ${userNum}!`);

    // check it with the randomly generated number
    if (generateNum === userNum) {
      // if correct, yay!
      console.log("You did it! your number is correct!");
      rl.close();
      // "game over, play again!";
      return "game over";
    } else if (generateNum > userNum) {
      console.log("Too low, guess again");
      console.log("");
      console.log("");
      // if not correct, count++
      count++;
    } else if (generateNum < userNum) {
      console.log("Too high! Try it again");
      console.log("");
      console.log("");

      count++;
    }
  } while (count < 3);
  rl.close();

  console.log(chalk.red("Game is over - sorry!"));
  console.log(chalk.green(`The correct answer is .. ${generateNum}!`));
};

// do ... while loop

// when count++ > 3, game is over, and number is revealed
playGame();
// console.log(generateNum);
// allow for a replay option to loop back to top
