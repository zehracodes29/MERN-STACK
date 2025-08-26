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

