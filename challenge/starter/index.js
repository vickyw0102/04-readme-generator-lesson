const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// const writeFile= utils.promisify(fs.writeFile);

// array of questions for user
const questions = [
    // inquirer.prompt([
        {
            type: 'input',
            message: 'What is README title?',
            name: 'Title',
        },

        {
            type: 'input',
            message: 'What is Description?',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'What is Installation?',
            name: 'Installation',
        },
        {
            type: 'input',
            message: 'What is Usage?',
            name: 'Usage',
        },
        {
            type: 'input',
            message: 'What is License?',
            name: 'License',
        },
        {
            type: 'input',
            message: 'What is Contributing?',
            name: 'Contributing',
        },
        {
            type: 'input',
            message: 'What is Tests?',
            name: 'Tests',
        },
        {
            type: 'input',
            message: 'What is Questions?',
            name: 'Questions',
        },
    ];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(path.join(process.cwd(), fileName), data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });

    // .then((response))=> writeFile ('README.md', response)
        
    };

    // return writeFile(fileName, data);


// function to initialize program
function init() {
    inquirer.prompt (questions).then((answers) => {
        writeToFile("./Readme.md", generateMarkdown(answers));
    });

};

// function call to initialize program
init();
