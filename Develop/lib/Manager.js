// import the Employee class from the Employee.js file and assign it to the variable Employee
const Employee = require('./Employee');

// the extends keyword is used to extend the Employee class ie. the manager class is an extension of the Employee class
class Manager extends Employee {
  constructor(firstName, lastName, id, school) {
    super(firstName, lastName, id, email);
    this.manager = manager; 
  }
  getManager() {
    return this.manager; // here, the this keyword is used to access the manager property of the Manager class 
  }
  getRole() {
    return 'Manager';   // here the getRole method from the emplyee class is overridden and returns the string 'Manager' 
  }
}

export default Manager; // export the Manager class so that it can be used in other files
//module.exports = Intern;
