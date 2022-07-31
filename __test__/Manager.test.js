// import Manager from "../lib/Manager";
const Manager = require("../lib/Manager");
const manager = new Manager('Moe', 'Doe', 123, 'moedoe@gmail.com', '4477-123-4567');

// here we are testing the Manager class using the get methods eg getName, getId, getEmail, getOfficeNumber etc. from the imported Empployee class.
test ("the constructor function for the manager class with the following properties (firstName, lastName, id), email, officeNumber", () => {
    expect(manager.getName()).toBe("Moe Doe");
    expect(manager.getId()).toBe(123);
    expect(manager.getEmail()).toBe("moedoe@gmail.com");  // this will override the getEmail method inherited from the Employee class  
    expect(manager.getOfficeNumber()).toBe("4477-123-4567"); // this is the new property added to the Manager class
}
);

test ("the getRole method for the manager class that returns the following properties and methods of the class", () => {
    expect(manager.getRole()).toBe("Manager");
}
);