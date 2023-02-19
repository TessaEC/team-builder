const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

const teamMembers = [];

function createTeam() {
  function managerCard() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "What is the Manager's name?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter a name.';
          },
        },
        {
          type: 'input',
          name: 'managerID',
          message: "What is the Manager's ID?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter an ID.';
          },
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "What is the Manager's E-mail?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter an E-mail address.';
          },
        },
        {
          type: 'input',
          name: 'managerNum',
          message: "What is the Manager's office number?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter an office number.',
          }
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerID,
          answers.managerEmail,
          answers.managerNum
        );
        teamMembers.push(manager);
        addMember();
      });
  }

  function addMember() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'userChoice',
          message: 'What type of team member would you like to add?',
          choices: [
            'Engineer',
            'Intern',
            "None",
          ],
        },
      ])
      .then((addChoice) => {
        switch (addChoice.userChoice) {
          case 'Engineer':
            engineerCard();
            break;
          case 'Intern':
            internCard();
            break;
          default:
            buildTeam();
        }
      });
  }

  function engineerCard() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: "What is the Engineer's name?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter a name.';
          },
        },
        {
          type: 'input',
          name: 'engineerID',
          message: "What is the Engineer's ID?",
          validate: (answer) => {
              if (answer !== '') {
                return true;
              }
              return 'Please enter an ID.';
            }
          },
        {
          type: 'input',
          name: 'engineerEmail',
          message: "What is the Engineer's Email?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter an Email address.';
          },
        },
        {
          type: 'input',
          name: 'engineerGithub',
          message: "What is your Engineer's GitHub username?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter a GitHub username.';
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerID,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamMembers.push(engineer);
        addMember();
      });
  

  // function internCard() {

  }

  // function buildTeam() {
 
  // }
}
createTeam();