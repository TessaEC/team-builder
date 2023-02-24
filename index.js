const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const fs = require('fs');
const teamMembers = [];

// Function to display questions in order to build team cards
function createTeam() {
  // Manager's card
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
            return 'Please enter an office number.'
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
  // function to add a member to team by choosing what type of member to add
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
  // Engineer's card
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
  
  
}
// Intern's Card
function internCard() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'internName',
      message: "What is the Intern's name?",
      validate: (answer) => {
        if (answer !== '') {
          return true;
        }
        return 'Please enter a name.';
      },
    },
    {
      type: 'input',
      name: 'internID',
      message: "What is the Intern's ID?",
      validate: (answer) => {
          if (answer !== '') {
            return true;
          }
          return 'Please enter an ID.';
        }
      },
    {
      type: 'input',
      name: 'internEmail',
      message: "What is the Intern's Email?",
      validate: (answer) => {
        if (answer !== '') {
          return true;
        }
        return 'Please enter an Email address.';
      },
    },
    {
      type: 'input',
      name: 'internSchool',
      message: "What is your Intern's school?",
      validate: (answer) => {
        if (answer !== '') {
          return true;
        }
        return 'Please enter a school name.';
      },
    },
  ])
  .then((answers) => {
    const intern = new Intern(
      answers.internName,
      answers.internID,
      answers.internEmail,
      answers.internSchool
    );
    teamMembers.push(intern);
    addMember();
  });
}
  // function to build the team once questions complete
  function buildTeam() {
    let employeeHtml = ''
    for (i=0; i < teamMembers.length; i++){
      const employee = teamMembers[i];

      if (employee.getRole()==='Manager'){
        employeeHtml += `
        <div class="card employee-card" id="card-bg">
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">
        <h2>${employee.getName()}</h2>
        </div>
        <div class="card-body">
        <h3 class="card-title" id="manager-color"><i class="bi bi-clipboard2-data"></i>${employee.getRole()}</h3>
          <ul class="card-text">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto: ">${employee.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${employee.getOfficeNumber()}</li>
            </ul>
        </div>
        </div>
        </div>`
      }
      if (employee.getRole()==='Engineer'){
        employeeHtml += `
        <div>
        <div class="card employee-card" id="card-bg">
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">
        <h2>${employee.getName()}</h2>
        </div>
        <div class="card-body">
          <h3 class="card-title" id="engineer-color"><i class="bi bi-gear-fill"></i>${employee.getRole()}</h3>
          <ul class="card-text">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto: ">${employee.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank" 
            rel="noopener noreferrer">${employee.getGithub()}</a></li>
            </ul>
        </div>
        </div>
        </div>
        </div>`
      }
      if (employee.getRole()==='Intern'){
        employeeHtml += `
        <div>
        <div class="card employee-card" id="card-bg">
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">
        <h2>${employee.getName()}</h2>
        </div>
        <div class="card-body">
          <h3 class="card-title" id="intern-color"><i class="bi bi-mortarboard"></i>${employee.getRole()}</h3>
          <ul class="card-text">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto: ">${employee.getEmail()}</a></li>
            <li class="list-group-item">Schooling: ${employee.getSchool()}</li>
            </ul>
        </div>
        </div>
        </div>
        </div>`
      }
    }
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Builder - My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 p-5 mb-3 team-heading">
        <h1 class="text-center">Team Builder</h1>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="team-area col-12 d-flex justify-content-center">
    ${employeeHtml}
      </div>
    </div>
  </div>
</body>
</html>`
fs.writeFileSync('./dist/index.html', html)
  }
 managerCard();

}
createTeam();