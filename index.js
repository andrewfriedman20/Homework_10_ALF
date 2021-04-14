// index.js

const inquirer = require("inquirer");
const fs = require("fs");

const engineer = require("./lib/engineer");

const employee = require("./lib/employee");

const intern = require("./lib/intern");

const manager = require("./lib/manager");

function runInquirer(){
    const arrayPrompts = [{
        type: 'input',
        message: "What's your name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "Please enter your user ID.",
        name: 'userID'
    },
    {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email'
    },
    {
        type:'list',
        message: 'What is your job title?',
        name: 'jobTitle'
    }];

    return inquirer.prompt(arrayPrompts);

}




function runInquirermanager() {
    const arrayPrompts = [{
        type: 'input',
        message: 'Please enter your office number.',
        name: 'officeNo'
    }];

    return inquirer.prompt(arrayPrompts);
}

function runInquireintern() {
    const arrayPrompts = [{
        type: 'input',
        message: 'Please enter the name of your University',
        name: 'university'
    }];

    return inquirer.prompt(arrayPrompts);
}

function runInquirerengineer() {
    const arrayPrompts = [{
        type: 'input',
        message: 'Please enter your GitHub Repository.',
        name: 'gitHubRepo'
    }];

    return inquirer.prompt(arrayPrompts);
}





var teamArray = [
    {name: Tom},
    {name: bobert}
]

var cards = []
for (let i = 0; i < teamArray.length; i++) {
    cards.push(`<h1> Name: ${teamArray[i].name} </h1>`)
}

var html =`<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
    <title>Document</title>

</head>
<body>
    ${cards}
</body>
</html>`

return html
