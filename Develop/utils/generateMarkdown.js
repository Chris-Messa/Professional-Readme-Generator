// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeLink;

  switch (license) {
    case 'Apache': 
    badgeLink = `[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break    
    case 'MIT': 
     badgeLink = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break
    case 'GPL': 
      badgeLink = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break
    case 'Creative Commons':
      badgeLink = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
      break
    case 'Mozilla':
      badgeLink = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      break
    default: 
      badgeLink = ''
  }
  return badgeLink
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch (license) {
    case 'Apache': 
    licenseLink = `[License LInk](https://opensource.org/licenses/Apache-2.0)`
      break    
    case 'MIT': 
     licenseLink = `[License Link](https://opensource.org/licenses/MIT)`
      break
    case 'GPL': 
      licenseLink = `[License Link](https://www.gnu.org/licenses/gpl-3.0)`
      break
    case 'Creative Commons':
      licenseLink = `[License Link](http://creativecommons.org/publicdomain/zero/1.0/)`
      break
    case 'Mozilla':
      licenseLink = `[License Link](https://opensource.org/licenses/MPL-2.0)`
      break
    default: 
      licenseLink = ''
  }
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.name} <a name="${data.name.toLowerCase()}"></a> ${renderLicenseBadge(data.license)}

## Description 
    
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## ${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

${data.question}
    `}

module.exports = generateMarkdown;
// module.exports.renderLicenseBadge = renderLicenseBadge;