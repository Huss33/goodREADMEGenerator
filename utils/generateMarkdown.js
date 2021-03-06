let badgeChoices = ["NONE","Apache 2.0 license","Boost Software License 1.0","The MIT license","Modzilla Public License 2.0"];
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// let parseData = function (data) {
//   return  JSON.parse(data);
// }

function renderLicenseBadge(license) {
  if (license === license[0]) {
      return " ";
  } else if (license === license[1]) { 
      return [![License]('https://img.shields.io/badge/License-Apache_2.0-blue.svg')]('https://opensource.org/licenses/Apache-2.0')
  } else if (license === license[2]) {
      return [![License]('https://img.shields.io/badge/License-Boost_1.0-lightblue.svg')]('https://www.boost.org/LICENSE_1_0.txt')
  } else if (license === license[3]) {
      return [![License, MIT]('https://img.shields.io/badge/License-MIT-yellow.svg')]('https://opensource.org/licenses/MIT')
  } else if (license === license[4]) {
      return [![License, MPL, 2.0]('https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg')]('https://opensource.org/licenses/MPL-2.0')
  }
} 
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const licenseTable = "- [License](#license)"

function renderLicenseLink(license) {
  if (license !== license[0]) {
    return licenseTable
  } else {
    return " "
  }
}
//link to table of contents - [License](#license)

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // RETURN EMPTY STRING IF NO LICENSE
  if (license !== license[0]) {
    return `## License Select ${parseData.license}`
  } else {
    return " "
  }
}
let parseData = function(data) {
  return  JSON.parse(data);
}   

// TODO: Create a function to generate markdown for README
function generateMarkdown(parseData) {
  return `# ${parseData.title}
## Table of Contents:
- [Installation](#install)
- [Usage](#usage)
- [Contributing](#contribution)
${renderLicenseLink(licenseTable)}
## Description: ${parseData.description}
## Usage: ${parseData.usage}
${renderLicenseSection(parseData.license)}
## Add a Screenshot ![alt text](assets/images/screenshot.png)
## Contributing ${parseData.contribution}
## Tests ${parseData.test}
## Questions ${parseData.gitHub},${parseData.email}`;

}
// # <Your-Project-Title>
// ## Description
// Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
// - What was your motivation?
// - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
// - What problem does it solve?
// - What did you learn?
// ## Table of Contents (Optional)
// If your README is long, add a table of contents to make it easy for users to find what they need.
// - [Installation](#installation)
// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)
// ## Installation
// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
// ## Usage
// Provide instructions and examples for use. Include screenshots as needed.
// To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
//     ```md
//     ![alt text](assets/images/screenshot.png)
//     ```
// ## Credits
// List your collaborators, if any, with links to their GitHub profiles.
// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
// If you followed tutorials, include links to those here as well.
// ## License
// The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
// ---
// ???? The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
// ## Badges
// ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
// Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
// ## Features
// If your project has a lot of features, list them here.
// ## How to Contribute
// If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
// ## Tests
// Go the extra mile and write tests for your application. Then provide
module.exports = generateMarkdown;
