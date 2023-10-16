// Variables declared with the "var" keyword (function-scoped)
var name = "John";
var age = 30;

// Variables declared with "let" and "const" (block-scoped)
let country = "USA";

const PI = 3.14159265359;

// Variables can store different data types
let isActive = true;
let score = null;
let description = undefined;
let colors = ["red", "green", "blue"];
let person = {
    firstName: "Alice",
    lastName: "Smith"
};

// Variables can be reassigned
name = "Jane";
age = 25;
country = "Canada";
isActive = false;

// Using variables in statements
console.log("Name: " + name);
console.log(`Age: ${age}`);
console.log("Is Active: " + isActive);
console.log("Country: " + country);
console.log("PI Value: " + PI);

// Conditional statements using variables
if (isActive) {
    console.log("User is active.");
} else {
    console.log("User is not active.");
}

// Loop using variables
for (let i = 0; i < colors.length; i++) {
    console.log(`Color ${i + 1}: ${colors[i]}`);
}

// Accessing object properties with variables
console.log("First Name: " + person.firstName);
console.log("Last Name: " + person.lastName);
