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
