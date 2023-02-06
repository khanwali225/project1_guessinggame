#! /usr/bin/env node
import inquirer from "inquirer";
function greetings() {
    console.log("Welcome to the number guessing app");
}
function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
let computerScore = 0;
let userScore = 0;
async function main() {
    const response = await inquirer.prompt({
        message: "Guess a number. (1-10)",
        type: "number",
        name: "userInput",
    });
    const computerNumber = generateRandomNumber();
    const userNumber = response.userInput;
    if (computerNumber === userNumber) {
        console.log("You have guessed right");
        userScore++;
    }
    else {
        console.log("Wrong guess. Try again");
        computerScore++;
    }
    console.log("Computer Score", computerScore);
    console.log("User Score", userScore);
    const guessAgain = await inquirer.prompt({
        message: "Do you want to guess again",
        type: "list",
        choices: ["Yes", "No"],
        name: "guessInput",
    });
    if (guessAgain.guessInput === "Yes") {
        main();
    }
}
greetings();
main();
