// import the Employee class from the Employee.js file and assign it to the variable Employee
 const Employee = require('./Employee');

// the extends keyword is used to extend the Employee class ie. the intern is an extension of the Employee class
class Intern extends Employee {
  constructor(firstName, lastName, id, school) {
    super(firstName, lastName, id, email);
    this.school = school; 
  }
  getSchool() {
    return this.school; // here, the this keyword is used to access the school property of the Intern class
  }
  getRole() {
    return 'Intern'; 
  }
}

// export default Intern; // export the Engineer class so that it can be used in other files
module.exports = Intern;
