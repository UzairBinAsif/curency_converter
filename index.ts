#! /usr/bin/env node

import inquirer from "inquirer"

let currency: any = {
    USD: 1,
    PKR: 277.70,
    INR: 83.29,
    EUR: 0.92,
    JPY: 151.61,
    DZD: 134.45,
    AED: 3.67,
}

let usr_ans = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Select Currency you'd like to convert from: ",
            type: "list",
            choices: ['EUR', 'USD', 'PKR', 'INR', 'JPY', 'DZD', 'AED']
        },
        {
            name: "to",
            message: "Select Currency you'd like your amount to be converted to: ",
            type: "list",
            choices: ['EUR', 'USD', 'PKR', 'INR', 'JPY', 'DZD', 'AED'] 
        },
        {
            name: "amount",
            message: "Enter the amount you'd like to convert: ",
            type: "number"
        },
    ]
)

let fromAmount = currency[usr_ans.from]
let toAmount = currency[usr_ans.to]
let amount = usr_ans.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log('\nApprox: ', Math.floor(convertedAmount));