// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: input,
        message: '',
        name: '',
    },
    {
        type: input,
        message: '',
        name: '',
    },
    {
        type: input,
        message: '',
        name: '',
    },
    {
        type: input,
        message: '',
        name: '',
    },
    {
        type: input,
        message: '',
        name: '',
    },
    {
        type: input,
        message: '',
        name: '',
    },
    {
        type: input,
        message: '',
        name: '',
    },
    {
        type: input,
        message: '',
        name: '',
    },
    {
        type: input,
        message: '',
        name: '',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
        const readmeTemplate = ``
        fs.writeFile(fileName, response, err => {
            err? console.log(err) : console.log('File Written');
        })
    })
}

// Function call to initialize app
init();
