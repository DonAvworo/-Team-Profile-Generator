// import the Employee class from the Employee.js file and assign it to the variable Employee   
const Employee = require('./Employee'); 

//here, the Engineer class is extending the Employee class and inheriting the properties and methods of the Employee class.
// the extends keyword is used to extend the Employee class  ie. the engineer is an extension of the Employee class
class Engineer extends Employee {
  constructor(firstName, lastName, id, email, gitHub) {
    super(firstName, lastName, id, email); // here the super keyword is used to access the properties and methods of the Employee class.
    this.gitHub = gitHub; // here the gitHub property is assigned to the Engineer class 
  }
  getGitHub() {
    return this.gitHub; //here, the this keyword is used to access the gitHub property of the Engineer class
  }
  getRole() {
    return 'Engineer'; // here the getRole method from the emplyee class is overridden and returns the string 'Engineer'
  }
}

// export default Engineer; // export the Engineer class so that it can be used in other files
module.exports = Engineer;
