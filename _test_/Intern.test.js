// import Intern from "../lib/Intern";
const Intern = require("../lib/Intern");
const intern = new Intern('Moe', 'Doe', 123, 'Manchester University');

test ("the constructor function for the intern class with the following properties (firstName, lastName, id), email, school", () => {
    expect(intern.firstName).toBe("Moe");
    expect(intern.lastName).toBe("Doe");
    expect(intern.id).toBe(123);
    expect(intern.school).toBe("Manchester University");
}
);

test("the constructor function for the intern class with the following properties (firstName, lastName, id), email, school", () => {
    expect(intern.school).toBe("school"); // this is the school property that is assigned to the Intern class but not inherited from the Employee class
}
);

test("the getRole method for the intern class that returns the following properties and methods of the class", () => {
    expect(intern.getRole()).toBe("Intern"); // this will override the getRole method inherited from the Employee class
}
);




