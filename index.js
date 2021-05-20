const inquirer = require("inquirer");
const mysql = require("mysql");
const consleTable = require("console.table");

const departments = [];
const roles = [];
let newEmployeeFirstName = "";
let newEmployeeLastName = "";
let newEmployeeRoleId = "";
let newEmployeeCoWorkers = "";

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "employee_trackerDB",
});

onnection.connect(function (err) {
  if (err) throw err;
  // console.log("connected as id " + connection.threadId + "\n");

  // Grab existing departments
  connection.query("SELECT name FROM department", function (err, res) {
    if (err) throw err;

    res.forEach((department) => {
      departments.push(department.name);
    });
  });

  // Grab existing roles
  connection.query("SELECT title FROM role", function (err, res) {
    if (err) throw err;
    res.forEach((role) => {
      roles.push(role.title);
    });
  });

  start();
});

const start = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "answer",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "View All Employees By Department",
          "View All Employees By Role",
          "Add Employee",
          "Add Department",
          "Add Role",
          "Update Employee Roles",
          "Quit",
        ],
      },
    ])
    .then(({ answer }) => {
      if (answer === "View All Employees") {
        viewAllEmployees();
      } else if (answer === "View All Employees By Department") {
        viewByDepartment();
      } else if (answer === "View All Employees By Role") {
        viewByRole();
      } else if (answer === "Add Employee") {
        addEmployee();
      } else if (answer === "Add Department") {
        addDepartment();
      } else if (answer === "Add Role") {
        addRole();
      } else if (answer === "Update Employee Roles") {
        // console.log("Updating Employee Roles...");
        updateEmployeeRole();
      } else if (answer === "Quit") {
        console.log("Quitting application...");
        connection.end();
      }
    });
};
