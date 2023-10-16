// Creating an object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  },
  hobbies: ["reading", "hiking", "gaming"],
  isStudent: false,
};




// Modifying object properties
person.age = 31;
person.hobbies.push("swimming");
person.address.zipCode = "12345";

// Adding a new property
person.gender = "Male";

// Deleting a property
delete person.isStudent;

// Iterating over object properties
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key + ": " + person[key]);
  }
}

// Using object methods
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  start: function () {
    console.log("Engine started");
  },
  stop: function () {
    console.log("Engine stopped");
  },
};

car.start(); // Outputs: "Engine started"
car.stop(); // Outputs: "Engine stopped"
