// create a class for the employee using the following properties and methods:

//constructor function for the employee class
class Employee {
    constructor(firstName, lastName, id, email, gitHub) {  
      this.firstName = firstName; // this. notation is used to access the properties and methods of the class
      this.lastName = lastName;
      this.id = id;
      this.email = email;
      this.gitHub = gitHub;
    }
    
    // getName method for the employee class
    getName() { 
      return `${this.firstName} ${this.lastName}`; // return the firstName and lastName properties of the class using the ${} notation. 
                                                   // the ${} notation is used to access the properties of the class and the back tick is used to create a string literal.
    }
  
    getId() {
      return this.id; // return the id property of the class
    }

    getEmail() {
      return this.email; // return the email property of the class
    }

    getGitHub() {
      return this.gitHub; // return the gitHub property of the class
    }

    getRole() { // getRole method for the employee class that returns the following properties and methods of the class. this will be used to display the properties of the class.
      return "Employee"; // return the string "Employee"

    }
    // retrieveAll() {  // retrieveAll method for the employee class that returns the following properties and methods of the class. this will be used to display the properties of the class.
    //   return `${this.getName()} ${this.getId()} ${this.getEmail()} ${this.getGitHub()}`; // return the getName, getId, getEmail, and getGitHub methods of the class using the ${} notation. 
    //                                                                                       // the ${} notation is used to access the properties of the class and the back tick is used to create a string literal.
    // }
  }
  
  //test if the class is working by console.log
  let employee = new Employee('John', 'Smith', 123); // create a new employee object with the given properties and methods and assign it to the variable employee
  console.log(employee.getName()); // returns 'John Smith' (the full name of the employee) 
  console.log(employee instanceof Employee); // returns true (because Employee is the constructor function) \\in otherwords instanceof returns true if the object is an instance of the constructor function

  export default Employee; // export the Employee class so that it can be used in other files
  // module.exports; // works the same as export default