// TODO: Create a function that returns the license link based on which license is passed in; If there is no license, return an empty string

const licenseBadgeLinks = require("./licenseBadges");
    
    // TODO: Create a function to generate markdown for README
    function generateMarkdown(data) {
        
        return `# ${data.title}
        
        ## Description
        ${data.description}
        
        ## Table of Contents
        *[Installation](#installation)
        *[Usage](#usage)
        *[License](#license)
        *[Contributing](#contributing)
        *[Tests](#tests)
        *[Questions](#questions)
        
        ## Installation
        To install dependencies, run the command: ${data.installation}
        
        ## Usage
        ${data.usage}
        
        ## License
        This repository is licensed under the ${data.license} license.
        
        ## Contributing
        ${data.contribute}
        
        ## Tests
        To run tests, run the command: ${data.tests}
        
        ## Questions
        If you have any questions about this repository, please contact [${data.email}](mailto:${data.email}).
        To view more of my projects in GitHub, visit [${data.username}](https://github.com/${data.username})`;
    }
    
    module.exports = generateMarkdown;
    