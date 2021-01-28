const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'project name',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'License',
      message: 'What is your License?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage type?',
    },
    // {
    //   type: 'input',
    //   name: 'food',
    //   message: 'What is your favorite food?',
    // },
    // {
    //   type: 'input',
    //   name: 'github',
    //   message: 'Enter your GitHub Username',
    // },
    // {
    //   type: 'input',
    //   name: 'linkedin',
    //   message: 'Enter your LinkedIn URL.',
    // },
  ]);
};

const generateHTML = (answers) =>

;

function init() {
  console.log('hi');
  try {
    const answers = await promptUser();

    const html = generateHTML(answers);

    await writeFileAsync('index.html', html);

    console.log('Successfully wrote to index.html');
  } catch (err) {
    console.log(err);
  }
}

init();
