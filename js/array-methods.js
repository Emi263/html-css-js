// const fruits = ["apple", "banana", "cherry"];

// // push(): Add an element to the end of the array
// fruits.push("date");

// // pop(): Remove the last element from the array
// const removedFruit = fruits.pop();

// // unshift(): Add an element to the beginning of the array
// fruits.unshift("grape");

// // shift(): Remove the first element from the array
// const removedFirstFruit = fruits.shift();

// // indexOf(): Find the index of an element in the array
// const cherryIndex = fruits.indexOf("cherry");

// // splice(): Remove elements and/or add elements at a specific index
// fruits.splice(cherryIndex, 1); // Remove "cherry"

// // slice(): Create a new array by extracting a portion of the original array
// const slicedFruits = fruits.slice(1, 3); // Returns a new array with "banana" and "date"

// const additionalFruits = ["kiwi", "mango"];
// const combinedFruits = fruits.concat(additionalFruits);

// // join(): Join array elements into a string
// const joinedFruits = fruits.join(", ");

// console.log(fruits); // Outputs: ["grape", "banana"]
// console.log(removedFruit); // Outputs: "date"
// console.log(removedFirstFruit); // Outputs: "apple"
// console.log(cherryIndex); // Outputs: -1 (not found)
// console.log(slicedFruits); // Outputs: ["banana"]

// //FOREACH
// numbers.forEach((number) => {
//   console.log(number);
// });
// // Outputs:
// // 1
// // 2
// // 3

// //MAP -> Important
// console.log(doubled); // Outputs: [2, 4, 6]

// //FILTER
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers); // Outputs: [2, 4]

// //REDUCE
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Outputs: 15

// const evenNumber = numbers.find((number) => number % 2 === 0);
// console.log(evenNumber); // Outputs: 2

// //SORT
// fruits.sort();
// console.log(fruits); // Outputs: ["apple", "banana", "cherry"]

const people = [
  {
    name: "Ana",
    age: 32,
  },
  {
    name: "Ben",
    age: 16,
  },
  {
    name: "Melisa",
    age: 12,
  },
  {
    name: "Joe",
    age: 45,
  },
  {
    name: "Monnica",
    age: 26,
  },
];




const products = [
  {
    name: "12213",
    outOfStock: true,
    price: 12,
  },
  {
    name: "asdas",
    outOfStock: false,
  },
  {
    name: "dsfdsds",
    outOfStock: false,
  },
  {
    name: "df",
    outOfStock: true,
  },
  {
    name: "dfdf",
    outOfStock: false,
  },
];

const availableProducts = products.filter((product)=> product.outOfStock !==true )


console.log({availableProducts});
