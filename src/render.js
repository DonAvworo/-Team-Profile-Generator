// render 

// the employees derived from the getEmployees function is passed as an argument to the render function
const render = employees => { 
    const html = generateHTML(employees); 
    fs.writeFileSync(outputPath, html); // writeFileSync is used to write the html file to the outputPath
}  

return generateHTML = employees(); // return the generateHTML function to the main function

export default render; // export the render function so that it can be used in other files
