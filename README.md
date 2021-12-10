# Coding Team Generator
For this project, I have developed an application that displays a coding team's team memebers and their information. When a user opens the application, they are met with a series of prompts that allow them to add multiple individuals to their team. The user has the option to add a Manager, Engineer, or Intern to their team. Once the user selects the type of employee, he or she will be met with a series of questions tailored to that specific employee's role. When the user answers all the questions and has added all of his or her team members, then the user can select the option 'I am done adding members to my team'. When this option is selected, an html file, titled team.html located in the output folder, will be generated and will display all the provided information within multiple, dynamically-created cards. Each team member will have his or her own card with their information displayed. When clicked, each email address will autopopulate an email in the user's default email application and have the 'To:" field already filled out with the respective email address. When clicked, the 'GitHub Profile' section on the Engineer cards will take the user to that individuals' GitHub profile in a new tab.

## Process
In order to run this application, the user must have node.js installed. When this software is installed, the user can enter 'node index.js' into the integrated terminal to load the prompts. Then, the user can enter their team's information into the terminal and have it ultimately displayed to the cards on the webpage.

## Testing
Within the tests folder, you can find js files pertaining to the Employee, Manager, Engineer, and Intern tests. Each of these files will have tests that ensure the resepctive variables for each role are being properly developed. In order to test these, the user must have jest installed. Once the user has this software installed, he or she can enter 'npm run test' into the integrated terminal to see the results. Additionally, a small, green check mark will be displayed next to the line of code starting with 'test', indiating the test's success. 

## Links

GitHub Repository: https://github.com/MattReynolds53/Coding-Team-Generator

ScreenCastify Link: https://drive.google.com/file/d/1u5wmaeXG3Il7auqGa40GPCfnBTDTqquw/view