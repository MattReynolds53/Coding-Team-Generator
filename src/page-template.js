// This is the template literal. Add cards for Manager, Engineer, and Intern below followed by functions running those respective card builds, followed by the html page you want to load.
const Template = require("../index")

const generateTeam = (team) => {

  const generateManager = (manager) => {
    return `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                <h2>${manager.getName()}</h2>
                <h3>${manager.getRole()}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number:${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        `;
  };

  const generateEngineer = (engineer) => {
    return `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                <h2>${engineer.getName()}</h2>
                <h3>${engineer.getRole()}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub Profile: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.github}</a></li>
                </ul>
            </div>
        `;
  };

  const generateIntern = (intern) => {
    return `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                <h2>${intern.getName()}</h2>
                <h3>${intern.getRole()}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        `;
  }

};

//Do i need to module.exports for this file?
module.exports = teamDisplay