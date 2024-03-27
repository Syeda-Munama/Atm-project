#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 20000;

const pinCode = 1234;

const pinAnswer= await inquirer.prompt([
    {
     message: "Enter Your pin:",
     type: "number",
     name: "pin"
    }
])

if (pinAnswer.pin === pinCode){
    console.log(pinAnswer.pin)

    const question = await inquirer.prompt(
        [
            {
                message: "What do you want to do?",
                type: "list",
                choices: ["Withdrawal","Fast Withdrawal", "Check Balance" ],
                name: "questions"
            }
        ]
    )
    if(question.questions === "Withdrawal"){
        const amount = await inquirer.prompt(
          [  { message: "Enter Amount to withdraw: ",
            // choices: ["1000", "2000", "3000", "Enter the Amount"],
            type: "number",
            name: "value",
            }, 
        
        ]
        )
        if (myBalance < amount.value){
            console.log("Enter Amount which is not exceeding your current balance.")
        }else{
        myBalance -= amount.value;
        console.log(`Your current is ${myBalance}. `)
        }
    
    }else if (question.questions === "Fast Withdrawal") {
        const fastAmount = await inquirer.prompt([{
            message: "Select the amount you want to withdraw",
            type: "list",
            choices: ["1000", "2000", "3000", "4000"],
            name: "value1",
        }])
        if (fastAmount.value1 ==="1000"){
                myBalance -= 1000;
                console.log(`Your Current Balance is ${myBalance}`)
            } else if (fastAmount.value1 === "2000"){
                myBalance -= 2000;
                console.log(`Your Current Balance is ${myBalance}`)
            } else if (fastAmount.value1 === "3000"){
                myBalance -= 3000;
                console.log(`Your Current Balance is ${myBalance}`)
            } else if(fastAmount.value1 === "4000"){
                myBalance -=4000;
                console.log(`Your current balance is ${myBalance}`)
            }
    }else{
        console.log(myBalance);
    }
}else {
    console.log("Incorrect Pin Code!")
}