// import Employee from "../lib/Employee";
const Employee = require("../lib/Employee"); 
const employee = new Employee("Moe", "Doe", 123 ,"email");

/* test the employee object for values if is working using the expect and the toBe function)*/ 
// test ("the constructor function for the employee class with the following properties (firstName, lastName, id), email, github", () => {
//     expect(employee.firstName).toBe("Moe");
//     expect(employee.lastName).toBe("Doe");
//     expect(employee.id).toBe(123);
//     expect(employee.email).toBe("email");
// }
// );

// test if the get method is working using the expect function and the toBe function 
test ("the constructor function for the employee class", () => {
    expect(employee.getName()).toBe("Moe Doe");
    expect(employee.getId()).toBe(123);
    expect(employee.getEmail()).toBe("email");
}   
);

// test if the getRole method is working using the expect function and the toBe function (toBe is used to compare the value of the getRole method to a given value)
test ("the getRole method for the employee class that returns the following properties and methods of the class. this will be used to display the properties of the class.", () => {
    expect(employee.getRole()).toBe("Employee");
} 
);

// test for the export default Employee function using the exports function and the toBe function (export default is used to export the Employee class)
// test ("the export default Employee;", () => {
//     expect(exports.default).toBe(Employee);
// }
// );


