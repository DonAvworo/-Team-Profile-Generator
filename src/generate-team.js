// here a function is created to generate the team
const generateTeam = () => { // generateTeam is a function that will be called when the user selects the generate team option
  const team = []; // array to store the employees objects created by the user which will be used to generate the team.html file by the render function
  for (let i = 0; i < 3; i++) { // loop to create 3 employees objects and store them in the team array  
    team.push(generatePlayer()); // push the employee object to the team array
  }
  return team;
}

function templateHelper (employees) {
    return employees.map(employee => { // map is a function/method that will be called for each element in the array
        return ` 
        
            <div class="card">
                <div class="card-header">
                    <h2>Manager</h2>
                    <p>Employee ID:${manager.answers.id}</p>
                    <p>Email: <a href="mailto:manager@example.com">${manager.answers.email}</a></p>
                    <p>Office Number: ${manager.answers.officeNumber}</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h2>Engineer</h2>
                    <p>Employee ID: ${enginer.answers.id}</p>
                    <p>Email: <a href="mailto:engineer@example.com">${engineer.answers.email}</a></p>
                    <p>GitHub: <a href="https://github.com/engineer" target="_blank">${engineer.answers.github}</a></p>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h2>Intern</h2>
                    <p>Employee ID: ${intern.answers.id}</p>
                    <p>Email: <a href="mailto:intern@example.com">${intern.answers.email}</a></p>
                    <p>School: ${intern.answers.school}</p>
                </div>
            </div>

        ` // mind the backticks
    }

    ).join(''); // join is a function/method that will be called on the array of strings to create a single string
}
return templateHelper(employees);
