const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require ('./lib/Intern');
const templateHelper = require('./src/generate-team');
//const render = require('./src/render').default;
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, 'dist'); // path to output directory 
const outputPath = path.join(OUTPUT_DIR, 'template.html'); // TODO the path.join is used to join the OUTPUT_DIR and the file name team.html, so that the output file is team.html in the OUTPUT_DIR absolute path
const employees = []; // array to store the employees objects created by the user which will be used to generate the team.html file by the render function 

const questionPrompts = () => {

  // TODO prompt the user to enter the information about the employees
  return inquirer.prompt([ 
 
    { type: 'list', 
      name: 'role', 
      message: 'Enter the role of the employee: ', 
      choices: ['Manager', 'Engineer', 'Intern', 'Create'] // choices is an array of strings that will be used to display the choices to the user
    }, 

    // if the user selects Manager, then the following questions will be asked
    { type: 'input', 
      name: 'officeNumber', 
      message: 'Enter the office number of the manager:', 
      when: (answers) => answers.role === 'Manager'  // when is a function that will be called when the user selects Manager
    }, 
        
    // validation of the name, id, email and office number of the manager
    { type: 'input', 
      name: 'name', 
      message: 'Enter the name of the manager:', 
      when: (answers) => answers.role === 'Manager', 
      validate: (name) => {  // validate is a function that will be called when the user selects Manager
            
      // tenary operator is used to check if the name is empty or not
      if (name.length === 0) { return 'Please enter the name of the manager'; }
        return true;
      }
    },

    { type: 'input',
      name: 'id', 
      message: 'Enter the id of the manager:', 
      when: (answers) => answers.role === 'Manager', 
      validate: (id) => { // answer.role is the role of the employee derived from the getRole function

      //tenary operator is used to check if the officeNumber is empty or not
      if (id.length === 0) { return 'Please enter the id of the manager'; } // if the id is empty, then return the error message
        return true;
      }
    },

    { type: 'input', 
      name: 'officeNumber', 
      message: 'Enter the office number of the manager:', 
      when: (answers) => answers.role === 'Manager', 
      validate: (officeNumber) => {
          
      //tenary operator is used to check if the officeNumber is empty or not
      if (officeNumber.length === 0) { return 'Please enter the office number of the manager'; } 
         return true;
      }
    },

    // if the user selects Engineer, then the following questions will be asked
    { type: 'input', 
      name: 'github', 
      message: 'Enter the github username of the engineer:', 
      when: (answers) => answers.role === 'Engineer' 
    },
        
    // validation of the name, id and github username of the engineer
    { type: 'input', 
      name: 'name', 
      message: 'Enter the name of the engineer:', 
      when: (answers) => answers.role === 'Engineer', 
      validate: (name) => {
            
      // tenary operator is used to check if the name is empty or not
      if (name.length === 0) { return 'Please enter the name of the engineer'; }
         return true;
      }
    },

    { type: 'input', 
      name: 'id', 
      message: 'Enter the id of the engineer:', 
      when: (answers) => answers.role === 'Engineer', 
      validate: (id) => {

      // tenary operator is used to check if the id is empty or not
        if (id.length === 0) { return 'Please enter the id of the engineer'; }
          return true;
        }
    },

    { type: 'input', 
      name: 'github', 
      message: 'Enter the github username of the engineer: ', 
      when: (answers) => answers.role === 'Engineer', // when is a function that will be called when the user selects Engineer
      validate: (github) => {
            
      if (github.length === 0) { return 'Please enter the github username of the engineer'; }
             return true;
        }
    },

    // if the user selects Intern, then the following questions will be asked
    { type: 'input',
      name: 'school', 
      message: 'Enter the school of the intern:', 
      when: (answers) => answers.role === 'Intern' 
    },
        
    // validation of the name, id, email and school of the intern
    { type: 'input', 
      name: 'name', 
      message: 'Enter the name of the intern: ', 
      when: (answers) => answers.role === 'Intern', 
      validate: (name) => {

      // tenary operator is used to check if the name is empty or not
        if (name.length === 0) { return 'Please enter the name of the intern'; }
           return true;
      }
    },

    { type: 'input', 
      name: 'id', 
      message: 'Enter the id of the intern:', 
      when: (answers) => answers.role === 'Intern', 
      validate: (id) => { 

      // tenary operator is used to check if the id is empty or not
        if (id.length === 0) { return 'Please enter the id of the intern'; }
          return true;
      }
    },

    { type: 'input', 
      name: 'school', 
      message: 'Enter the school of the intern:', 
      when: (answers) => answers.role === 'Intern', // when is a function that will be called when the user selects Intern and answers.role is the role of the employee derived from the getRole function
      validate: (school) => {

      // tenary operator is used to check if the school is empty or not
        if (school.length === 0) { return 'Please enter the school of the intern'; }
          return true;
      }
    }
  ])  
    
    // the answeers object is used to store the answers of the user depending on the role of the employee and the questions asked by the user
    // answers is an object that contains the answers of the user
    .then(answers => { 
      
      // use the switch statement to determine the role of the employee and push the answers to the corresponding array
      switch (answers.role) { 
        case 'Manager': 
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber); // create a new manager object using the user answers
        employees.push(manager); // push the manager object to the team array
        break; // break is used to end the switch statement
        
        case 'Engineer':
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github); // create a new engineer object using the user answers
        employees.push(engineer); // push the engineer object to the team array
        break; 
        
        case 'Intern':
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school); // create a new intern object using the user answers
        employees.push(intern); // push the intern object to the team array
        break;

        //the render function is created in global scope and called in here
        case 'Publish': // if the user selects publish, then the team array will be printed
        console.log('Thanks for using the team generator app'); // print the message
        render();
        break

        default: // if user enters invalid command, then the default case will be executed
        console.log('Thanks for using the team generator app'); // print the message
        return; // return is used to end the function

        case 'exit': // if the user selects exit, then the program will end and the team array will be printed
        console.log('Thanks for using the team generator app'); // print the message
        return; // return is used to end the function
      }
    })
    .catch(err => { // if the user enters an invalid input, then the program will end and the team array will be printed
      console.log('An error have occured. Please make sure you enter valid input and try again.'); // print the message
      return; // return is used to end the function
    }
  );
}

// the render function is used to render the html file using the employees array this is called in the main function and is used to render the html file 
function render() {
  const html = renderHtml(employees);
  fs.writeFileSync(outputPath, html);
  fs.writeFileSync('./index.html', html, 'utf8'); // write the new file with the new information
}

// the questionPrompt function is called to complete the questions asked by the user
questionPrompts();

// this is the main function that is called in the generate-team.js file
templateHelper();

// the render function is called to render the html file using the employees array
// render(); 
