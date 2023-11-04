#! /usr/bin/env node
import inquirer from "inquirer";
let conversion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "USD": {
        "USD": 1,
        "GBP": 0.83,
        "PKR": 225.50
    },
    "GBP": {
        "USD": 1.21,
        "GBP": 1,
        "PKR": 271.79
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "From",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency:"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your conversion currency:"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your conversion amount:"
    }
]);
const { From, to, amount } = answer;
if (From && to && amount) {
    let results = conversion[From][to] * amount;
    console.log(`Your conversion from ${From} to ${to} is ${results}`);
}
else {
    console.log("invalid inputs");
}
