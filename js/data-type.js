
//PRIMITIVE - Primitive data types are basic and 
//immutable data types that represent single values. 
//They are stored directly in memory and have a fixed size.
//Number, String, Boolean,Undefined,Null, BigInt, Symbol


//Non-Primitive (Reference) Data Types:
//Non-primitive data types are stored by reference, 
//and multiple variables can reference the same object in memory.


// Numbers
let age = 30;
let height = 175.5;

// Strings
let name = "John";
let message = 'Hello, World!';

// Booleans
let isStudent = true;
let isEmployee = false;

// Objects
let person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 25,
};


// Arrays
let colors = ["red", "green", "blue"];

// Null
let emptyValue = null;

// Undefined
let notDefined;

// Function
function sayHello() {
    console.log("Hello!");
}

console.log("Number:", age, height);
console.log("String:", name, message);
console.log("Booleans:", isStudent, isEmployee);
console.log("Object:", person);
console.log("Array:", colors);
console.log("Null:", emptyValue);
console.log("Undefined:", notDefined);
console.log("Function:", sayHello);



let x; // x is undefined
function doSomething() {}
let result = doSomething(); // result is undefined


let y = null; // y is explicitly set to null
let person2 = {
    name: "John",
    address: null // Address property is intentionally left empty
};