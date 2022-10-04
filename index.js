// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a description of your project?',
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'How is your app installed?',
    },
    {
        type: 'input',
        name: 'usageInstructions',
        message: 'What are the usage instructions',
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'What are the contribution Guidelines for your app?',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'what are the tests for this app',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
}

// Function call to initialize app
init();
