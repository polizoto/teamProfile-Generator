const inquirer = require('inquirer');

const { writeFile, copyFile } = require('../utils/generate-html.js');

const generateHTML = require('../src/HTML-template.js');

const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

const teamPersonnel = {
  manager: '',
  engineers: [],
  interns: []
}

function App() {
    this.manager;
    this.engineer = [];
    this.intern = [];
}

// Questions
App.prototype.teamQuestions = function() {

     console.log(`
   =================
   Add a New Employee
   =================
   `);
     return inquirer.prompt([
        {
            type: 'list',
            name: 'employees',
            message: 'What employee would would like to add to your team',
            choices: ['Engineer', 'Intern'],
            validate: employeeInfo => {
              if (employeeInfo) {
                return true;
              } else {
                console.log('Please enter the type of employee!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'name',
            message: 'What is the employee\'s Name?',
            validate: nameInfo => {
              if (nameInfo) {
                return true;
              } else {
                console.log('Please enter the employee\'s name!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team employee\'s Id?',
            validate: idInfo => {
              if (idInfo) {
                return true;
              } else {
                console.log('Please enter the employee\'s id!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team employee\'s email?',
            validate: emailInfo => {
              if (emailInfo) {
                return true;
              } else {
                console.log('Please enter the employee\'s email!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the employee\'s GitHub username?',
            when: ({ employees }) => {
              if (employees == 'Engineer') {
                return true;
              } else {
                return false;
              }
            },
            validate: githubInfo => {
              if (githubInfo) {
                return true;
              } else {
                console.log('Please enter the employee\'s GitHub username!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the employee\'s school?',
            when: ({ employees }) => {
              if (employees == 'Intern') {
                return true;
              } else {
                return false;
              }
            },
            validate: schoolInfo => {
              if (schoolInfo) {
                return true;
              } else {
                console.log('Please enter the employee\'s school!');
                return false;
              }
            }
        },
       {
         type: 'confirm',
         name: 'confirmAddEmployee',
         message: 'Would you like to enter another employee?',
         default: false
       }
      ]).then(({ name, employees, id, email, github, school, confirmAddEmployee}) => {
        if (employees == 'Engineer') {
          this.employee = new Engineer(name);
          this.employee.id = id
          this.employee.email = email
          this.employee.github = github
        teamPersonnel.engineers.push(this.employee);
      } else {
        this.employee = new Intern(name);
        this.employee.id = id
        this.employee.email = email
        this.employee.school = school
        teamPersonnel.interns.push(this.employee);
      }
        if (confirmAddEmployee) {
            return this.teamQuestions(teamPersonnel);
          } else {
            return teamPersonnel;
          }
      })
   }

App.prototype.managerQuestions = function() {

    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the manager\'s Name?',
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
        message: 'What is the manager\'s Id?',
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
        message: 'What is the manager\'s email?',
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
        message: 'What is the manager\'s office number?',
        validate: officeInfo => {
          if (officeInfo) {
            return true;
          } else {
            console.log('Please enter the manager\'s office number!');
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
        teamPersonnel.manager = this.manager
        return this.teamQuestions(teamPersonnel)
      })
}

// Questions
App.prototype.initializeApp = function() {

this.managerQuestions()
.then(htmlData => {
  return generateHTML(htmlData);
})
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });

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