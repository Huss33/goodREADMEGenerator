// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Choice = require('inquirer/lib/objects/choice');
const Choices = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Give a description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "Enter installation instructions.",
        name: "install"
    },
    {
        type: "input",
        message: "Enter usage information.",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter contribution guidelines.",
        name: "contribution"
    },
    {
        type: "input",
        message: "Enter test instructions",
        name: "test"
    },
    {
        type: "list",
        message: "Select licenses that apply.",
        name: "license",
        Choices:["Apache 2.0 license","Boost Software License 1.0","Eclipse Public License 1.0","The MIT license","Modzilla Public License 2.0"]
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "GitHub"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];
function init

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
