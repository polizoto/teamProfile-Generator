const inquirer = require('inquirer');

const { writeFile } = require('../utils/generate-html.js');

const generateHTML = require('../src/HTML-template.js');

const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

const teamPersonnel = []

function App() {
    this.manager;
    this.engineer = [];
    this.intern = [];
}

// Questions
App.prototype.teamQuestions = function() {
// const teamQuestions = teamData => {
    // If there's no 'projects' array property, create one
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
        teamPersonnel.push(this.intern);
        if (confirmAddIntern) {
            return this.teamQuestions(teamPersonnel);
          } else {
            return teamPersonnel;
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
        teamPersonnel.push(this.manager)
        return this.teamQuestions(teamPersonnel)
      })
}

// Questions
App.prototype.initializeApp = function() {

this.managerQuestions()
.then(teamData => {
  console.log(teamData);
})
}
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