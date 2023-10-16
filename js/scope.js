// Global scope variable
var globalVar = "I am in the global scope";

function exampleFunction() {
    // Function scope variable
    var functionVar = "I am in a function scope";

    if (true) {
        // Block scope variable (ES6)
        let blockVar = "I am in a block scope (let)";
        const constBlockVar = "I am in a block scope (const)";

        console.log(globalVar); // Access global scope variable
        console.log(functionVar); // Access function scope variable
        console.log(blockVar); // Access block scope variable (let)
        console.log(constBlockVar); // Access block scope variable (const)
        
        // Variable name clash in different scopes
        var globalVar = "I'm a local variable with the same name"; // Hides the globalVar temporarily
        console.log(globalVar); // Access the local variable with the same name
    }

    console.log(globalVar); // Access global scope variable again
    console.log(functionVar); // Access function scope variable

    // Accessing block scope variables here would result in errors

    // Variable name clash in the same scope
    var functionVar = "I'm a local variable with the same name"; // Hides the functionVar
    console.log(functionVar); // Access the local variable with the same name
}

exampleFunction();

// Accessing function and block scope variables here would result in errors
console.log(globalVar); // Access global scope variable
