// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateReadMe = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
// array of questions to use with inquirer 
const questions = [
    {
        type: "input",
        message: "What is the title for your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a brief description for your project",
        name: "description"
    },
    {
        type: "input",
        message: "What is the command to install dependencies?",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "Explain how the user can use your repository",
        name: "usage"
    },
    {
        type: "list",
        message: "Select a license for your project",
        name: "license",
        choices: [
            "MIT",
            "Unlicense",
            "Apache 2.0"
        ]
    },
    {
        type: "input",
        message: "How can the user contribute to your repository?",
        name: "contribute"
    },
    {
        type: "input",
        message: "What is the command to run tests?",
        name: "tests",
        default: "npm run test"
    },
    {
        type: "input",
        message: "Enter your GitHub user name",
        name: "username"
    },
    {
        type: "input",
        message: "What is the URL for your GitHub profile?",
        name: "profilelink"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
]

// function to prompt user - returns answers object
const promptUser = () => {
    return inquirer
        .prompt(questions);
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return writeFileAsync(fileName, data);
}

// TODO: Create a function to initialize app
//function init() {}

const init = async () => {
    try {
        console.log("This is my README generator app.\nPlease answer the following questions:")

        // ask user for answers to questions
        const answers = await promptUser();

        // create markdown content from user answers
        const fileContent = generateReadMe(answers);

        // write markdown content to README.md file
        await writeToFile("./result/README.md", fileContent);

        // notify user that file has been written
        console.log("The README.md file has been created in result folder.");

    } catch (err) {
        console.error("Error. File not created.");
        console.log(err);
    }
}

// Function call to initialize app
init();
