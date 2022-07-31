// import Engineer from "../lib/Engineer";
const Engineer = require("../lib/Engineer");
const engineer = new Engineer('Moe', 'Doe', 123, '@gmail.com', 'githuber01');

/*here, because we are using the super class keyword to inherit the properties and methods of the Employee class,
we can ignore entering the following lines (commented out) that we are testing for*/
test ("the constructor function for the engineer class with the following properties (firstName, lastName, id), email, github", () => {
    expect(engineer.firstName).toBe("Moe");
    expect(engineer.lastName).toBe("Doe");
    expect(engineer.id).toBe(123);
    expect(engineer.email).toBe("@gmail.com");
    expect(engineer.gitHub).toBe("githuber01"); // this will override the gitHub property inherited from the Employee class
}   
);

//if we were to test this without the super class then we would have to test the getName method and the getId method.
test ("the constructor function for the engineer class", () => {
    expect(engineer.getName()).toBe("Moe Doe");
    expect(engineer.getId()).toBe(123);
    expect(engineer.getEmail()).toBe("@gmail.com");
    expect(engineer.getGitHub()).toBe("githuber01"); // this will override the gitHub property inherited from the Employee class
}
);

test ("the getRole method for the engineering class that returns the following properties and methods of the class", () => {
    expect(engineer.getRole()).toBe("Engineer"); // this will override the getRole method inherited from the Employee class
}
);



