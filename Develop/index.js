// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadme = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title for your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to provide a project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project? '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to provide information on how to use project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can people contribute to this project?',
    },
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project',
        choices: ['Apache', 'MIT', 'GPL', 'Public Domain', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Would you like to include your email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Data transferred to the README!')
    })
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then(userInput => {
    console.log(userInput)
    writeToFile("README.md", generateReadme(userInput))
})
}

// Function call to initialize app
init();