const express = require('express');
// Import and require mysql2, inquirer, and establish the PORT.
const mysql = require('mysql2');
const inquirer = require('inquirer');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'sergio',
      database: ''
    },
    console.log(`Connected to the  database.`)
  );

  // Make cool employee menu thing that baffled me in the Mock-Up
  function employeeTrackerLogo() {
    console.log(`+---------------------------------------------------------------------+`);
    console.log(`|   _____                    _                                        |`);
    console.log(`|  |  ___| _ __ ___   _ __  | | ____   _   _  ____  ____              |`);
    console.log(`|  | |___ | '_ ' _  \\| '_ \\ | |/    \\ | | | |/ (_)\\/ (_)\\             |`);
    console.log(`|  |  ___|| | | | | || |_) || |  ()  || |_| |   __/   __/             |`);
    console.log(`|  |_____||_| |_| |_||  __/ |_|\\____/  \\__  |\\____|\\____|             |`);
    console.log(`|                    |_|               |___/                          |`);
    console.log(`|          ______                                                     |`);
    console.log(`|         |__  __| _ __   __ _  _____  _  __  ___  _ __               |`);
    console.log(`|           |  |  | |\\_\\ / _' |/ ____|| |/ / /(_)\\| |\\_\\              |`);
    console.log(`|           |  |  | |   | (_| | |____ |    \\|  __/| |                 |`);
    console.log(`|           |__|  |_|    \\__,_|\\_____||_|\\__\\\\___||_|                 |`);
    console.log(`+---------------------------------------------------------------------+`);
    trackerMenu(); //connect the logo to the menu so they show up together (:
}
// ask the user what they would like to do
  function trackerMenu() {
    inquirer.prompt([
        {
            type:'checkbox',
            name: 'mainMenu',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Dempartment'
            ]
        },
    ]).then(function(data) {
        if (data.mainMenu[0] == "View All Employees") {
            viewEmployees();
        } else if (data.mainMenu[0] == "Add Employee"){
            addEmployee();
        } else if (data.mainMenu[0] == "Update Employee Role") {
            updateRole();
        } else if (data.mainMenu[0] == "View All Roles") {
            viewRoles();
        } else if (data.mainMenu[0] == "Add Role") {
            addRole();
        } else if (data.mainMenu[0] == "View All Departments") {
            viewDepts();
        } else if (data.mainMenu[0] == "Add Department") {
            addDept();
        }
    })
  }

  function viewEmployees() {
    const sql = 
    db.query()
  }

  function addEmployee() {
    trackerMenu();
  }

  function updateRole() {
    trackerMenu();
  }
  
  function viewRoles() {
    trackerMenu();
  }

  function addRole() {
    trackerMenu();
  }

  function viewDepts() {
    trackerMenu();
  }

  function addDept() {
    trackerMenu();
  }


  employeeTrackerLogo();