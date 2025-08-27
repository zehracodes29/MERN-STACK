const course ={
    title : "JavaScript Basics",
    duration : "3weeks",
    instructor : "Mubassir Sir",
    topics : ["Variables","Functions","Objects","Keywords"],
    fees : 5000,
    timeofclass : "3:30PM",
    location : "Hazratganj",
    prerequisites : ["Basic HTML", "Basic CSS"],
    institute : "Digipodium",
    isOnline : false,
    getCourseInfo : function() {
        return `${this.title} is a ${this.duration} course by ${this.instructor}.`;
    }
};

console.log("Course Title:", course.title);
console.log("Course Duration:", course.duration);
console.log("Course Instructor:", course.instructor);
console.log("Course Topics:", course.topics.join(", "));
console.log("Course Fees:", course.fees);
console.log("Course Time:", course.timeofclass);
console.log("Course Location:", course.location);
console.log("Course Prerequisites:", course.prerequisites.join(", "));
console.log("Course Institute:", course.institute);
console.log("Is Online:", course.isOnline);
console.log("Course Info:", course.getCourseInfo());

INSTRUCTOR = course.instructor;
console.log("This javascript course is taught by", INSTRUCTOR);

//wap to access course topics
console.log("Course Topics:", course.topics);

//wap to access prerequisites
console.log("Course Prerequisites:", course.prerequisites);

//WAP to access course fees
console.log("Course Fees:", course.fees);

//WAP to access course location
console.log("Course Location:", course.location);

//WAP to access course time
console.log("Course Time:", course.timeofclass);

//wap to filter topics that include the word "Var"
const filteredTopics = course.topics.filter(topic => topic.includes("Var"));
console.log("Filtered Course Topics:", filteredTopics);

//wap to map topics to their lengths
const topicLengths = course.topics.map(topic => topic.length);
console.log("Course Topic Lengths:", topicLengths);

//wap to find the total length of all topics
const totalLength = topicLengths.reduce((acc, length) => acc + length, 0);//here acc is the accumulator
console.log("Total Length of Course Topics:", totalLength);

//wap to filter topics that are longer than 7 characters
const longTopics = course.topics.filter(topic => topic.length > 7);
console.log("Long Course Topics:", longTopics);


//create an object car with several cars inside car as objects
const cars = {
    car1: {
        brand: "Toyota",
        model: "Camry",
        year: 2020,
        color: "Blue",
        features: ["Air Conditioning", "Navigation System", "Bluetooth Connectivity"],
        price: 900000,
        getCarInfo: function() {
            return `${this.year} ${this.color} ${this.brand} ${this.model}`;
        }
    },
    car2: {
        brand: "Honda",
        model: "Civic",
        year: 2019,
        color: "Red",
        features: ["Sunroof", "Leather Seats", "Backup Camera"],
        price: 800000,
        getCarInfo: function() {
            return `${this.year} ${this.color} ${this.brand} ${this.model}`;
        }
    },
    car3: {
        brand: "Ford",
        model: "Mustang",
        year: 2021,
        color: "Black",
        features: ["Sport Package", "Premium Sound System", "Navigation System"],
        price: 1200000,
        getCarInfo: function() {
            return `${this.year} ${this.color} ${this.brand} ${this.model}`;
        }
    }
};


//wap to filter cars that are more expensive than 850000
const expensiveCars = Object.values(cars).filter(car => car.price > 850000);
console.log("Expensive Cars:", expensiveCars.map(car => car.getCarInfo()));

//wap to filter cars that are older than 2020
const oldCars = Object.values(cars).filter(car => car.year < 2020);
console.log("Older Cars:", oldCars.map(car => car.getCarInfo()));

//wap to map cars to their brands
const carBrands = Object.values(cars).map(car => car.brand);
console.log("Car Brands:", carBrands);

//wap to map cars to their models
const carModels = Object.values(cars).map(car => car.model);
console.log("Car Models:", carModels);

//wap to map cars to their colors
const carColors = Object.values(cars).map(car => car.color);
console.log("Car Colors:", carColors);


