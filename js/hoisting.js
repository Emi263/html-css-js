// HOISTING WITH VAR
console.log(a); // Outputs: undefined
var a = 5;
console.log(a); // Outputs: 5

// HOISTING WITH LET
// Block-scoped variable (let)
console.log(b); // Throws a ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log(b); // Outputs: 10



// HOISTING WITH CONST

// Block-scoped constant (const)
console.log(c); // Throws a ReferenceError: Cannot access 'c' before initialization
const c = 15;
console.log(c); // Outputs: 15


//FUNCTIONS

// Function Declaration (hoisted)
hoistedFunction(); // Outputs: "Hello from hoistedFunction!"
function hoistedFunction() {
    console.log("Hello from hoistedFunction!");
}

// Function Expression (not hoisted)
notHoistedFunction(); // Throws a TypeError: notHoistedFunction is not a function
var notHoistedFunction = function() {
    console.log("Hello from notHoistedFunction!");
};



//DECLARE YOUR VARIABLES AT THE TOP
