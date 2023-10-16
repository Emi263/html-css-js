// Sample JSON data
const jsonData = `{
  "name": "John Doe",
  "age": 30,
  "email": "johndoe@example.com",
  "isSubscribed": true,
  "hobbies": ["reading", "hiking", "gaming"],
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA"
  }
}`;

// Parsing JSON to JavaScript object
const parsedData = JSON.parse(jsonData);

// Accessing JSON data
console.log(parsedData.name); // Outputs: "John Doe"
console.log(parsedData.age); // Outputs: 30
console.log(parsedData.hobbies[0]); // Outputs: "reading"
console.log(parsedData.address.city); // Outputs: "Anytown"

// Modifying JSON data
parsedData.age = 31;
parsedData.hobbies.push("swimming");

// Converting JavaScript object to JSON
const modifiedData = JSON.stringify(parsedData, null, 2);

console.log(modifiedData);
