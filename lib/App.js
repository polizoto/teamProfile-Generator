const inquirer = require('inquirer');

const { writeFile } = require('../utils/generate-html.js');

const generateHTML = require('../src/HTML-template.js');

const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

function App() {
    this.manager;
    this.engineer = [];
    this.intern = [];
}

// Questions
App.prototype.initializeApp = function() {
    inquirer
  .prompt({
    type: 'text',
    name: 'name',
    message: 'What is the team manager\'s Name?'
  })
  // destructure name from the prompt object
  .then(({ name }) => {
    this.manager = new Manager(name);

    console.log(this.manager);
  });
};

// promptUser()
//   .then(htmlData => {
//     return generateHTML(htmlData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });

module.exports = App;