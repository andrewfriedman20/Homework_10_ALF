// index.js

const employee = require("./Lib/employee");
const engineer = require("./Lib/engineer");
const intern = require("./Lib/intern");
const manager = require("./Lib/manager");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");

const employeeTypes = ['engineer', 'intern', 'manager']

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "fresh.html");

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
        choices: employeeTypes,
        name: 'jobTitle'
    }

];

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


console.log ()

async function run() {
    let employeeArray = [];
    const maxTimes = 4;
    for (i = 0; i < maxTimes; i++) {
        const promise = new Promise((resolve, reject) => {
            runInquirer()
                .then(function ({ name, userID, email, jobTitle }) {
                console.log (jobTitle)
                    if (jobTitle === "manager") {
                        runInquirermanager().then(function ({ officeNo }) {
                            this.employee = new manager(name, userID, email, officeNo, jobTitle);
                            console.log(officeNo);
                            employeeArray.push(employee);
                            employeeTypes.pop();
                            resolve("done");
                        });

                    } else if (jobTitle === "engineer") {
                        runInquirerengineer().then(function ({ gitHubRepo }) {
                            this.employee = new engineer(name, userID, email, gitHubRepo, jobTitle);
                            console.log(gitHubRepo);
                            employeeArray.push(employee);
                            resolve("done");
                        });
                    } else if (jobTitle === "Intern") {
                        runInquirerintern().then(function ({ university }) {
                            this.employee = new intern(name, userID, email, university, jobTitle);
                            console.log(university);
                            employeeArray.push(employee);
                            resolve("done");
                        });
                    }

                }).catch(function (err) {
                    console.log("There was an error.");
                    console.log(err);
                });
        });

        const result = await promise;
        console.log(result);
    }

    // console.log(employeeArray.length);

    function displayTitle(employee) {
        if (employee.jobTitle === "manager") {
            console.log(employee.officeNo);
            return `office number: ${employee.officeNo}`;
        }

        if (employee.jobTitle === "intern") {
            return `university: ${employee.university}`;
        }

        if (employee.jobTitle === "engineer") {
            return `gitHubRepo: ${employee.gitHubRepo}`;
        }

    }

// var teamArray = []
// //     {name: 'Tom'},
// //     // {name: 'bobert'}
// // ]

// var cards = []
// for (let i = 0; i < teamArray.length; i++) {
//     cards.push(`<h1> Name: ${teamArray[i].name} </h1>`)
// }

// var html = [`<!DOCTYPE html>
// <html>
// <head>
//     <meta charset='utf-8'>
//     <meta http-equiv='X-UA-Compatible' content='IE=edge'>
//     <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
//     <title>Document</title>

// </head>
// <body>
//     ${cards}
// </body>
// </html>`]

// return html

function getCardHtml() {
    let html = "";
    for (j = 0; j < maxTimes; j++) {
        console.log(employeeArray[j])
        html += `<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>${employeeArray[j].name}</h4>
            </div>
            <div class="col card-header">
                <h4>${employeeArray[j].title}</h4 >
            </div >
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: ${employeeArray[j].id}</li>
                <li class="list-group-item">Email: ${employeeArray[j].email}</li>
                <li class="list-group-item"> ${displayTitle(employeeArray[j])}</li>
            </ul>
        </div > `;
    }
    return html;
}



let html = `< !DOCTYPE html >
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <meta http-equiv="X-UA-Compatible" content="ie=edge">
                                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                                    <title>Document</title>
                                    <style>
                                        .row {
                                            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .card {
                                            padding: 15px;
            border-radius: 6px;
            background-color: white;
            color: lightskyblue;
            margin: 15px;
        }
        .text {
                                            padding: 15px;
            border-radius: 6px;
            background-color: lightskyblue;
            color: black;
            margin: 15px;
        }
        .col {
                                            flex: 1;
            text-align: center;
        }
    </style>
</head>
                                <body>
                                    <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
                                        <span class="navbar-brand mb-0 h1">
                                            <h1>My Team</h1>
                                        </span>
                                    </nav>
                                    <div class="row">
                                        ${getCardHtml()}
                                    </div>
                                </body>

</html>
`;




console.log(html);
const fs = require("fs");
fs.writeFile('newfile.html', html, function (err) {
    if (err) throw err;
    console.log('The File has been created .');
});
}
run()


