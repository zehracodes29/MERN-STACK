//first method of defining functions
function addNums(a,b){
    var c = a + b;//var is used to define the scope of variables
    console.log(c);
    
}

addNums(90,9);
addNums(45,55);
addNums(100,200);
addNums(10,20);
addNums(5,15.8);
addNums(23.9,18.98);
//console.log(c);//this will throw an error because c is not defined in this scope


//2nd method of defining functions

const getAvg = function(a,b,c,d){
    const sum = a + b + c + d;
    const avg = sum / 4;
    console.log("Average of given numbers is: " + avg);
    return avg; //returning the average value
}

getAvg(34,56,78,87);
getAvg(1,2,3,4);
getAvg(10,20,30,40);
getAvg(5,15,25,35);
const result = getAvg(10,20,30,40);
console.log("Result of getAvg(10,20,30,40): " + result);


//3rd method of defining function
const factorial = (n) => {
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f = f * i;
    }
    return f;
}

const fact = factorial(5);
console.log("Factorial of 5 is: " + fact);

const fact2 = factorial(9);
console.log("Factorial of 9 is: " + fact2);


