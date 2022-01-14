// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Choice = require('inquirer/lib/objects/choice');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown');
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
        type: "checkbox",
        message: "Select licenses that apply.",
        name: "license",
        choices:["NONE","Apache 2.0 license","Boost Software License 1.0","The MIT license","Modzilla Public License 2.0"]
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
    },
  ];


// TODO: Create a function to write README file
function writeToFile(data) {
   return generateMarkdown(data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userInput) => {
        console.log(userInput);
        var markDownStr = writeToFile(userInput);
        console.log(markDownStr);
        fs.writeFile("projectREADME.md", markDownStr,(err) => {
            if (err) {
                console.log(err);
            }
            console.log("README created!");
        })
    })
}
    // questions()
    //     .then(response);
    //     console.log(response);
    //     .then(writeToFile())
    //     .then(() => console.log("Success passed to README!"))
    //     .catch((err) => console.error(err));
    


// Function call to initialize app
init()
