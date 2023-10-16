//FUNCTION DECLARATION

function functionName(name, age) {
  console.log("Name " + name)
  console.log("Age " + age);

  return  `Name = ${name}, age = ${age}`;
}


const nameAndAgeAna = functionName("Ana", 24);
const nameAndAgeMonica = functionName("Monica", 23)


console.log({nameAndAgeAna});
console.log({nameAndAgeMonica});