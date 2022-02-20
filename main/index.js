const inquirer = require("inquirer");
const fs = require("fs");
const typeOfLicense = "";
const none = "None";

function license(typeOfLicense) {
  if (typeOfLicense !== none) {
    return `![${typeOfLicense}](https://img.shields.io/badge/License-${typeOfLicense}-blue.svg)`;
  } else {
    return "";
  }
}

const generateReadMe = ({
  title,
  description,
  usageInfo,
  author,
  github,
  email,
  typeOfLicense,
  contributing,
  test,
}) => `# ${title} ${license(typeOfLicense)}
## Description
### ${description}

# Table of Contents
* [Questions](#questions)

* [Usage](#usage)

* [Installation](#install)

* [Contributing](#contributing)

* [Tests](#tests)

<a name="install"></a>
## Installation Instructions
### Make sure Node.js is installed. [Click this Link](!https://nodejs.org/en/download/) if not installed.

<a name="usage"></a>
## Usage 
### ${usageInfo}

<a name="contributing"></a>
## Contributing
### ${contributing}

<a name="tests"></a>
## Tests
### ${test}

<a name="questions"></a>
## Questions
### ${author}
### ${github}
### Reach out to me at ${email} for additional questions you may have.`;

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the Title?",
    },
    {
      type: "list",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
      message: "what type do you want?",
      name: "typeOfLicense",
    },
    {
      type: "input",
      name: "description",
      message: "Description of your project?",
    },
    {
      type: "input",
      name: "usageInfo",
      message: "What is the use?",
    },
    {
      type: "input",
      name: "contributing",
      message: "Contribution guidelines?",
    },
    {
      type: "input",
      name: "test",
      message: "How can i test this?",
    },
    {
      type: "input",
      name: "author",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your Email",
    },
  ])
  .then((answers) => {
    const readMeGenerator = generateReadMe(answers);

    fs.writeFile("README.md", readMeGenerator, (err) =>
      err
        ? console.log(err)
        : console.log("Successfully created professional README!")
    );
  });
