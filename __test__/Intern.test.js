// import Intern from "../lib/Intern";
const Intern = require("../lib/Intern");
const intern = new Intern('Moe', 'Doe', 123, 'moedoe@gmail.com', 'Manchester University');

// here we are testing the Intern class using the get methods eg getName, getId, getEmail, getSchool etc. from the imported Empployee class.
test ("the constructor function for the intern class with the following properties (firstName, lastName, id), school", () => {
    expect(intern.getName()).toBe("Moe Doe");
    expect(intern.getId()).toBe(123);
    expect(intern.getEmail()).toBe("moedoe@gmail.com");
    // expect(intern.school()).toBe("Manchester University");
}
);

// here we are using thesame method as above to test the getSchool method added to the  Intern class.
test ("the getSchool method for the intern class", () => {
    expect(intern.getSchool()).toBe("Manchester University");
}
);

// here we are using thesame method as above to test the getRole method imported from the Employee class.
test("the getRole method for the intern class that returns the following properties and methods of the class", () => {
    expect(intern.getRole()).toBe("Intern"); // this will override the getRole method inherited from the Employee class
}
);




