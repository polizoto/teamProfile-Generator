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
App.prototype.teamQuestions = function(teamData) {
// const teamQuestions = teamData => {
    // If there's no 'projects' array property, create one
   if (!teamData) {
    teamData = [];
   }
     console.log(`
   =================
   Add a New Employee
   =================
   `);
     return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'employees',
            message: 'What employee would would like to add to your team',
            choices: ['Engineer', 'Intern']
          },
          {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s Name?',
            validate: nameInfo => {
              if (nameInfo) {
                return true;
              } else {
                console.log('Please enter the intern\'s name!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team interns\'s Id?',
            validate: idInfo => {
              if (idInfo) {
                return true;
              } else {
                console.log('Please enter the intern\'s id!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team interns\'s email?',
            validate: emailInfo => {
              if (emailInfo) {
                return true;
              } else {
                console.log('Please enter the intern\'s email!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the team interns\'s school?',
            validate: schoolInfo => {
              if (schoolInfo) {
                return true;
              } else {
                console.log('Please enter the intern\'s school!');
                return false;
              }
            }
        },
       {
         type: 'confirm',
         name: 'confirmAddIntern',
         message: 'Would you like to enter another intern?',
         default: false
       }
     ]).then(({ name, id, email, school, confirmAddIntern}) => {
        this.intern = new Intern(name);
        this.intern.id = id
        this.intern.email = email
        this.intern.school = school
        teamData.push(this.intern);
        if (confirmAddIntern) {
            this.teamQuestions(teamData);
          } else {
              console.log(teamData);
            return teamData;
          }
      })
   }

App.prototype.managerQuestions = function() {
// const managerQuestions = () => {

    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the team manager\'s Name?',
        validate: nameInfo => {
          if (nameInfo) {
            return true;
          } else {
            console.log('Please enter the manager\'s name!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the team manager\'s Id?',
        validate: idInfo => {
          if (idInfo) {
            return true;
          } else {
            console.log('Please enter the manager\'s id!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the team manager\'s email?',
        validate: emailInfo => {
          if (emailInfo) {
            return true;
          } else {
            console.log('Please enter the manager\'s email!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is the team manager\'s office?',
        validate: officeInfo => {
          if (officeInfo) {
            return true;
          } else {
            console.log('Please enter the manager\'s office!');
            return false;
          }
        }
    }
    ])
    .then(({ name, id, email, office }) => {
        this.manager = new Manager(name);
        this.manager.id = id
        this.manager.email = email
        this.manager.office = office
        // console.log(this.manager);
        return this.teamQuestions()
      })
}

// Questions
App.prototype.initializeApp = function() {

this.managerQuestions()
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