// This is the template literal. Add cards for Manager, Engineer, and Intern below followed by functions running those respective card builds, followed by the html page you want to load.
const Template = require("../index")

const generateTeam = (team) => {

  const generateManager = (manager) => {
    return `
            <div class="card" style="width: 18rem;">
                <div class="card-header bg-danger">
                <h2>${manager.getName()}</h2>
                <h3>${manager.getRole()}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        `;
  };

  const generateEngineer = (engineer) => {
    return `
            <div class="card" style="width: 18rem;">
                <div class="card-header bg-danger">
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
                <div class="card-header bg-danger">
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

  const htmlTeam = []
  
  htmlTeam.push(team.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager)))
  
  htmlTeam.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer)).join(''))
  
  htmlTeam.push(team.filter(employee => employee.getRole() === "Intern").map(intern => generateIntern(intern)).join(''))

  return htmlTeam.join('')
};






//Do i need to module.exports for this file?
module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
    <title> Team Builder</title>
</head>
<body>
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid d-flex justify-content-center align-items-center" id="header">
          <a class="navbar-brand" href="#">
            <img src="https://i.pinimg.com/originals/0f/8b/28/0f8b2870896edcde8f6149fe2733faaf.jpg" alt="" width="200" height="200" class="d-inline-block align-text-top">
          </a>
          <h1 id="title" class="text-center">Coding Team Generator</h1>
        </div>
    </nav>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-around mt-4">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `
}