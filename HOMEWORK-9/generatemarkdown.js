// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data["project title"]}

${data.description}.

## Installation

## Usage

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
${data.license}

`;
}

module.exports = generateMarkdown;