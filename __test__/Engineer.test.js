// import Engineer from "../lib/Engineer";
const Engineer = require("../lib/Engineer");
const engineer = new Engineer('Moe', 'Doe', 123, 'email', 'githuber01');

//if we were to test this without the super class then we would have to test the getName method and the getId method.
test ("the constructor function for the engineer class", () => {
    expect(engineer.getName()).toBe("Moe Doe");
    expect(engineer.getId()).toBe(123);
    expect(engineer.getEmail()).toBe("email");
    expect(engineer.getGitHub()).toBe("githuber01"); // this will override the gitHub property inherited from the Employee class
}
);

test ("the getRole method for the engineering class that returns the following properties and methods of the class", () => {
    expect(engineer.getRole()).toBe("Engineer"); // this will override the getRole method inherited from the Employee class
}
);



