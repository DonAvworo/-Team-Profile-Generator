// import Manager from "../lib/Manager";
const Manager = require("../lib/Manager");
const manager = new Manager('Moe', 'Doe', 123, '@gmail.com', '077-123-4567');

test("the constructor function for the manager class with the following properties (firstName, lastName, id), email, officeNumber", () => {
    expect(manager.firstName).toBe("Moe");
    expect(manager.lastName).toBe("Doe");
    expect(manager.id).toBe(123);
    expect(manager.email).toBe("@gmail.com");
    expect(manager.officeNumber).toBe("077-123-4567");
}
);

test("the constructor function for the manager class with the following properties (firstName, lastName, id), email, officeNumber", () => {
    expect(manager.officeNumber).toBe("officeNumber"); // this is the officeNumber property that is assigned to the Manager class but not inherited from the Employee class
}
);

test("the getRole method for the manager class that returns the following properties and methods of the class", () => {
    expect(manager.getRole()).toBe("Manager"); // this will override the getRole method inherited from the Employee class
}
);

