import Employee from "../lib/Employee";
const employee = new Employee("John", "Smith", 123 ,"email", "github");

/* test if the get method is working using the expect function and
  the toBe function (toBe is used to compare the value of the 
  getName method to a given value)*/
test ("the constructor function for the employee class with the following properties and methods (firstName, lastName, id)", () => {
    expect(employee.getName()).toBe("John Smith");
    expect(employee.getId()).toBe(123);
    expect(employee.getEmail()).toBe("email");
    expect(employee.getGitHub()).toBe("github");
}   
);

/* test if employee is an instance of Employee, using the expect function
 and the toBe function (toBe is used to compare the value of the
 instanceof method to a given value)*/
test ("the constructor function for the employee class with the following properties and methods (firstName, lastName, id)", () => {
    expect(employee instanceof Employee).toBe(true);
} 
);

// test if the getRole method is working using the expect function and the toBe function (toBe is used to compare the value of the getRole method to a given value)
test ("the getRole method for the employee class that returns the following properties and methods of the class. this will be used to display the properties of the class.", () => {
    expect(employee.getRole()).toBe("Employee");
} 
);



