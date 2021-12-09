const inquirer = require("inquirer");
const fs = require("fs");
// add required js files here
// const html = require("");

// Are these necessary?
const Manager = require("./js/Manager");
const Engineer = require("./js/Engineer");
const Intern = require("./js/Intern");

const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamMembers = [];
const idArray = [];

function appPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "start",
        message: "What type of employee would you like to add first?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((answer) => {
      if (answer.start === "Manager") {
        createManager();
      } else if (answer.start === "Engineer") {
        createEngineer();
      } else if (answer.start === "Intern"){
        createIntern();
      } else {
        buildTeam();
      }
    });
}

  // Manager prompt to allow the user to add a manager
function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your manager's employee ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your manager's current email address?",
      },
      {
        type: "input",
        name: "officeNum",
        message: "What is your manager's office number?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerID,
        answers.email,
        answers.officeNum
      );
      teamMembers.push(manager);
      // Below this, do i need to idArray.push for each answer?
      idArray.push(answers.id);
      createTeam();
    });
}


// Next the user will be given the choices to add an engineer, intern, or finish adding to their team.
function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "promptType",
        message: "What type of employee would you like to add?",
        choices: ["Engineer", "Intern", "I am done adding members to my team."],
      },
    ])
    .then((answer) => {
      if (answer.promptType === "Engineer") {
        addEngineer();
      } else if (answer.promptType === "Intern") {
        addIntern();
      } else {
        buildTeam();
      }
    });
}

// Below is the function to prompt the user to add an engineer
function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your engineer's employee ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your engineer's current email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your engineer's GitHub username?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerID,
        answers.engineerEmail,
        answers.github
      );
      teamMembers.push(engineer);
      // do I push answers.id for the manager, engineer, and intern? Or is there a separate parameter I should push in the parentheses below?
      idArray.push(answers.id);
      createTeam();
    });
}


// Below is the function and code for adding an Intern to the user's team
function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your intern's employee ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your engineer's current email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What school is the intern currently attending?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internID,
        answers.internEmail,
        answers.school
      );
      teamMembers.push(intern);
      // do I push answers.id for the manager, engineer, and intern? Or is there a separate parameter I should push in the parentheses below?
      idArray.push(answers.id);
      createTeam();
    });
}

function buildTeam() {
  fs.writeFile(outputPath, html(newTeam), (err) =>
    err
      ? console.log(err)
      : console.log("Success! You have created a new team!")
  );
}

appPrompt();
