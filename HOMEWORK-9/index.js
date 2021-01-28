const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./generatemarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'project title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'What is your License?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage type?',
    },

  ]);
};

async function init() {
  console.log('hi');
  try {
    const answers = await promptUser();

    console.log(answers);

    const html = generateMarkdown(answers);

    await writeFileAsync('index.html', html);

    console.log('Successfully wrote to index.html');
  } catch (err) {
    console.log(err);
  }
}

init();
