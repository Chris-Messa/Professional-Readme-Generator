// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMD = require('./utils/generateMarkdown.js');
console.log(generateMD.generateMarkdown);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the name of your project',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Provide a description of the project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'List the table of contents, separated with a comma',
        name: 'tableOfContents',
        // Feel very proud about figuring this out on my own 😊
        filter: (answer) => { 
            const contents = answer.split(',')
            
            const contentList = contents.map(item => `- ${item}\n`).join('')
            
            return contentList
        }
    },

    {
        type: 'input',
        message: 'Write a guide on installation of the project',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Give instructions and examples for how the project is used',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List the license associated with your project',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Include any collaborators or third party/tutorial links',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'If your project has tests, describe and link them',
        name: 'tests',
    },
    {
        type: 'input',
        message: '',
        name: 'question',
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    inquirer.prompt(data)
        .then(response => {
            console.log(response.tableOfContents);
            fs.writeFile('README.md', generateMD(response), err => {
                err ? console.log(err) : console.log('File Written');
            })
        })
}

// TODO: Create a function to initialize app
function init() {
    writeToFile(questions);
}

// Function call to initialize app
init();
