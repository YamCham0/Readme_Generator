// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  
  ## Description

  -${data.desc1}
  -${data.desc2}
  -${data.desc3}
  -${data.desc4}


  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  -${data.install}
  
  ## Usage
  -${data.usage}

  ## Credits
  -[${data.collaborator}](${data.collaborator_url})
  
  -${data.asset}(${data.asset_url})
  
  -${data.tutorials}
  
  ## License

  -${data.license}

  ## Badges


  ## Features

  -${data.features}
  
  ## How to Contribute

  -${data.contribute}

  ## Tests

  -${data.test}







`;
}

module.exports = generateMarkdown;