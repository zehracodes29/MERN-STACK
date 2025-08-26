//properties in objects
const person = {
    name: "Alinaya",
    age: 20 + 9,
    gender: "female"
};

console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Gender:", person.gender);


//Accessing JavaScript Properties
let age = person.age;
console.log("Age:", age);
let name = person["name"];
console.log("Name:", name);

//objectName["property"]
let gender = person["gender"];
console.log("Gender:", gender);

person2 = {
    name: "John",
    age2: 30,
    gender: "male"
};

//objectName[expression]
let x = "age2";
let age2 = person2[x];
console.log("Age of", person2.name, "is", age2);
console.log("Gender of", person2.name, "is", person2["gender"]);

//add new properties to an existing object by simply giving it a value
person2.hobbies = ["reading", "traveling", "swimming"];
console.log("Hobbies of",person2.name, "are",person2.hobbies);

//A value given to a property will be a default value for all objects created by the constructor:

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let person3 = new Person("Alice", 25, "female");
let person4 = new Person("Bob", 35, "male");

console.log("Name:", person3.name);
console.log("Age:", person3.age);
console.log("Gender:", person3.gender);

console.log("Name:", person4.name);
console.log("Age:", person4.age);
console.log("Gender:", person4.gender);
