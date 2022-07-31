// import the Employee class from the Employee.js file and assign it to the variable Employee
const Employee = require('./Employee');

// the extends keyword is used to extend the Employee class ie. the manager class is an extension of the Employee class
class Manager extends Employee {
  constructor(firstName, lastName, id,  email, officeNumber) {  // A new constructor function is created for the Manager class including the officeNumber property but...
    super(firstName, lastName, id, email); // ...the super keyword is used  here to call the constructor function from the Employee class and will be used instead...
    this.officeNumber = officeNumber; // ... and finally, here, the officeNumber property is assigned to the Manager class 
  }
  getManager() {
    return this.manager; // here, the this keyword is used to access the manager property of the Manager class 
  }
  
  getOfficeNumber() {
    return this.officeNumber; // here, the this keyword is used to access the officeNumber property of the Manager class
  }
  
  getRole() {
    return 'Manager';   // here the getRole method from the emplyee class is overridden and returns the string 'Manager' 
  }
}

module.exports = Manager;
