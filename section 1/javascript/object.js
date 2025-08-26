//objects in array
const person = {
    name : "Fackhan",
    age : 22,
    gender : "not specified"
}
console.log(person);
console.log("Name:", person.name);//person.name is a member of the person object
console.log("Age:", person.age);//person.age is a member of the person object
console.log("Gender:", person.gender);//person.gender is a member of the person object

const person2 = {
    firstname :"Nisa",
    lastname : "Rizvi",
    age : 20,
    gender : "female",
    Location : "Kanpur",
    hobbies : ["reading", "traveling", "badminton"],
    isStudent : true
}

console.log(person2);
console.log("First Name:", person2.firstname);
console.log("Last Name:", person2.lastname);
console.log("Age:", person2.age);
console.log("Gender:", person2.gender);
console.log("Location:", person2.Location);
console.log("Hobbies:", person2.hobbies);
console.log("Is she a Student?", person2.isStudent);
console.log("Full Name:", person2.firstname + " " + person2.lastname);
console.log("First Hobby:", person2.hobbies[0]);

const me = {
    firstname:"Binte",
    middlename:"Zehra",
    lastname:"Rizvi",
    age: 21,
    gender :"female",
    location:"Barabanki",
    subjects:["HTML","CSS","JAVASCRIPT","INTERNETTECHNOLOGIES","Media&Animation"],
    isStudent:true,
    getFullName: function() {
        return this.firstname + " " + this.middlename + " " + this.lastname;
    }
};
console.log("Full Name:", me.getFullName());
console.log("Age of " + me.firstname + " is " + me.age);
console.log("Gender of " + me.firstname + " is " + me.gender);
console.log("Location of " + me.firstname + " is " + me.location);
console.log("Subjects of " + me.firstname + " are " + me.subjects.join(", "));
console.log("Is " + me.firstname + " a student? " + me.isStudent);
let text = person.name + "," + person.age + "," + person.city;
console.log(text)

//accesing object properttyy
let age = me.age;
let fullName = me.getFullName();
console.log("Age:", age);
console.log("Full Name:", fullName);
//person["firstname"] + " is " + person["age"] + " years old.";
//console.log(person["firstname"] + " is " + person["age"] + " years old.");
person2.nationality = "Pakistani";//adding new properties
console.log("Nationality of " + person2.firstname + " is " + person2.nationality);

//nested objects
const person3 = {
    name: "Alishaad",
    age: 25,
    address: {
        street: "123 Main St",
        city: "Karachi",
        country: "Pakistan"
    },
    hobbies: ["cricket", "reading", "gaming"]
};

console.log("Name:", person3.name);
console.log("Age:", person3.age);
console.log("City:", person3.address.city);
console.log("Hobbies:", person3.hobbies.join(", "));
console.log("Street:", person3.address.street);

person3.getFullName = function () {
  return (this.name).toUpperCase();
};
console.log("Full Name in Uppercase:", person3.getFullName());


