
const inquirer = require ("inquirer");
const path = require ("path");
const fs = require ("fs");

const Employee = require ('./lib/employee');
const Manager = require ('./lib/manager');
const Engineer = require ('./lib/engineer');
const Intern = require ('./lib/intern');

const generateHtml = require('./src/generateHtml');



let teamArray = [];
let team = "";
function addmanager(){
  inquirer.prompt([
    {
        type: 'Input',
        name: 'name',
        message: "What is the employee's name?'",
      },
      {
        type: 'Input',
        name: 'id',
        message: "What is the employee's id?",
      },
      {
        type: 'Input',
        name: 'Email',
        message: "What is the employee's email?"
      },
      {
        type: 'Input',
        name: 'office',
        message: "What is the Manager's office number"
      }

  ]).then((answers)=> {
    const manager = new Manager (answers.name, answers.id, answers.email, answers.office);
    console.log(team)
    init()
  });
  }
  
  
    createTeam();
    function createTeam() {
     
      inquirer.prompt([
   
      {
        type: 'list',
        name: 'employee',
        message: "What type of employee you would like to add?",
        choices: ['manager', 'engineer', 'intern', 'none']
      },
    ])
      .then((choice) => {
    
      if (choice.employee === 'manager'){
        addmanager();
      }else if (choice.employee === 'engineer'){
        addengineer();
      }else if (choice.employee === 'intern'){
        addintern();
      }else if (choice.employee === 'none'){
        console.log('Team completed!')
        console.log(teamArray);
        WriteToFile();
      }
      });
    }
   

    


    function addengineer(){
      inquirer.prompt([
        {
        type: 'Input',
        name: 'name',
        message: "What it the name of the engineer?"
        },
        {
          type: 'Input',
          name: 'id',
          message: "What is the engineer id number?"
        },
        {
          type: 'Input',
          name:'email',
          message: " What is the engineer Email address?"
        },
        {
          type: 'Input',
          name: 'github',
          message: "What is the engineer github username?"
        }


      ])
      .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)

           teamArray.push(engineer);
           console.log(teamArray);
           init();
        });
    }
    



    function addintern() {
      inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the intern name?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is the intern id number?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is the intern email address?',
        },
        {
          type: 'input',
          name: 'school',
          message: 'What is the intern School name?'
        },
      ])

      .then((answers) =>{
        const intern = new Intern(answers.name, answers.id, answers.email, answers.Number);
          teamArray.push(intern);
          console.log(teamArray);
          init();
      });
      }
     
  
   
    
      function buildTeam(filename, teamArray) {
      fs.writeFileSync(path.join(process.cwd(), filename), generateHtml(team), "utf8");
    
    }
  
    
  
    function init(){
      inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: "What is the name of the team you created?"
        },
      ])
      .then((answers)=> {
        fs.writeFileSync('./output/index.html', generateHtml(team));
        console.log("Your team created!")        
      });
}
