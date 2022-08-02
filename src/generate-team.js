
export function renderHtml (employees) {


    // filter the employees array to only include the employees with the role of manager
    const managers = employees.filter(employee => employee.getRole() === 'Manager');
    const managerHTML =
        managers.map((manager)=> {
            `
            <div class="card">
                <div class="card-header">
                    <h2>Manager</h2>
                    <p>Employee ID:${manager.id}</p>
                    <p>Email: <a href="mailto:manager@example.com">${manager.email}</a></p>
                    <p>Office Number: ${manager.officeNumber}</p>
                </div>
            </div>
            ` //mind the backticks
        }); 
    

    // filter the employees array to only include the employees with the role of engineer
    const engineers = employees.filter(employee => employee.getRole() === 'Engineer');
    const engineerHTML =
        engineers.map((engineer)=> {
            ` 
            <div class="card">
                <div class="card-header">
                    <h2>Engineer</h2>
                    <p>Employee ID: ${enginer.id}</p>
                    <p>Email: <a href="mailto:engineer@example.com">${engineer.email}</a></p>
                    <p>GitHub: <a href="https://github.com/engineer" target="_blank">${engineer.github}</a></p>
                </div>
            </div>
            ` //mind the backticks
        });

    // filter the employees array to only include the employees with the role of intern
    const interns = employees.filter(employee => employee.getRole() === 'Intern');
    const internHTML =
        interns.map((intern)=> {
            `
            <div class="card">
                <div class="card-header">
                    <h2>Intern</h2>
                    <p>Employee ID: ${intern.id}</p>
                    <p>Email: <a href="mailto:intern@example.com">${intern.email}</a></p>
                    <p>School: ${intern.school}</p>
                </div>
            </div>

        ` // mind the backticks
    }); 

    const template = fs.readFileSync ('./dist/template.html', 'utf8', (err, data) => { 
        if (err) {
            throw err;
        }
        return data;
    });

    // replace the placeholder with the managerHTML and engineerHTML and internHTML
    /* ie. replace the {{manager}}, {{engineer}} and {{intern}} inside the template.html file, 
    with the created variables, const managerHTML, const engineerHTML and const internHTML inside this file (the template literals) */
    let finalHtml = template.replace('{{manager}}', managerHTML.join(''))
        finalHtml.replace('{{engineer}}', engineerHTML.join(''))
        finalHtml.replace('{{intern}}', internHTML.join('')); 

    // write the finalHtml to the outputPath
    // fs.writeFileSync(outputPath, finalHtml);
    return (finalHtml);

}
// return templateHelper(employees);
