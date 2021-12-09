// This is the template literal. Add cards for Manager, Engineer, and Intern below followed by functions running those respective card builds, followed by the html page you want to load.
const Template = require("../index")

const generateTeam = (team) => {

  const generateManager = (manager) => {
    return `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                ${manager.managerName}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${manager.managerID}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.managerEmail}">${manager.managerEmail}</a></li>
                    <li class="list-group-item">${manager.officeNum}</li>
                </ul>
            </div>
        `;
  };

  const generateEngineer = (engineer) => {
    return `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                ${engineer.engineerName}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${engineer.engineerID}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.engineerEmail}">${engineer.engineerEmail}</a></li>
                    <li class="list-group-item">GitHub Profile: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
                </ul>
            </div>
        `;
  };

  const generateIntern = (intern) => {
    return `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                ${intern.internName}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${intern.internID}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.internEmail}">${intern.internEmail}</a></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        `;
  }

};

//Do i need to module.exports for this file?
module.exports = teamDisplay