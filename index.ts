#! /usr/bin/env node
import inquirer from "inquirer";

// 1) computer will genrate a randam number

// 2) user input for gussing number

// 3) compara user input with computer genratednumber and show result

const randamNumber = Math.floor(Math.random() * 6+1);


const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number between 1-6",
  },
]);

if (answer.userGuessedNumber === randamNumber) {
  console.log("congrulation! you gussed right number.");
} else {
  console.log("you gussed wrong number");
}
