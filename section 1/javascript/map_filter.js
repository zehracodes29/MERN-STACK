const nums = [3,5,7,9,1,2];

//map
const squares = nums.map(n => n * n);//Squares is a new array that stores the squares of the original numbers
console.log("Squares:", squares);

//filter
const evens = nums.filter(n => n % 2 === 0);//Evens is a new array that stores the even numbers from the original array
console.log("Evens:", evens);

//another method of maping
const cubes = nums.map((n) => {return n*n*n});//Cubes is a new array that stores the cubes of the original numbers
console.log("Cubes:", cubes);

//WAP to print all the numbers by multiplying each by 5
const multipliedByFive = nums.map(n => n * 5);//MultipliedByFive is a new array that stores the original numbers multiplied by 5
console.log("Multiplied by 5:", multipliedByFive);

const prices = [3400,4750,2900,1200,8740];

//WAP TO PRINT ALL PRICES INCLUDING 18% gst
const pGST = prices.map(p => p + (p * 0.18));
console.log("Prices including 18% GST:", pGST);

//another method of adding gst
const gstprices = prices.map((p) => {return p * 1.18});
console.log("Prices including 18% GST:", gstprices);

//filter prices  greater than 3000
const greaterThan3000 = prices.filter((p) => {return p > 3000});
console.log("Prices greater than 3000:", greaterThan3000);

//filter prices divisible by 30
const divisibleBy30 = prices.filter((p) => {return p % 30 === 0});
console.log("Prices divisible by 30:", divisibleBy30);

//map prices divisible by 25
const divisibleBy25 = prices.map((p) => {return p % 25 === 0});
console.log("Prices divisible by 25:", divisibleBy25);

//wap to filter prices less than 6000
const lessThan6000 = prices.filter((p) => {return p < 6000});
console.log("Prices less than 6000:", lessThan6000);

const prices2 = ['$455.5','$77.323','$97.12','$213.4'];
//convert prices2 to numbers
const numericPrices2 = prices2.map((p) => {return parseInt(p.replace('$',''))});
console.log("Numeric Prices 2:", numericPrices2);

const names =["Ramu","Raju","Pinki","Kalu"];
//convert names to uppercase
const upperNames = names.map((n) => {return n.toUpperCase()});
console.log("Uppercase Names:", upperNames);

//WAP to check if any name has R
const hasR = names.some((n) => {return n.includes('R')});
console.log("Any name has R:", hasR);

//WAP to check which names have R
const namesWithR = names.filter((n) => {return n.includes('R')});
console.log("Names with R:", namesWithR);

//WAP to check which names  have more than 4characters
const namesWithMoreThan4Chars = names.filter((n) => {return n.length > 4});
console.log("Names with more than 4 characters:", namesWithMoreThan4Chars);

//WAP to filter  name's last character is i
const hasLastCharI = names.filter((n) => {return n.endsWith('i')});
console.log("Any name's last character is I:", hasLastCharI);

console.log("$77.323")
console.log("$77.323".slice(1))
console.log(parseInt("$77.323".slice(1)))

const numericPrices = prices2.map((p) => {return parseInt(p.slice(1))});
console.log("Numeric Prices:", numericPrices);

const fullNames = ["Samriddhi Yadav","Binte Zehra","Prateek Singh","Saurabh Sharma","Vasu Sharma"];
//filter firstnames from fullnames
const firstNames = fullNames.map((name) => {return name.split(" ")[0]});
console.log("First Names:", firstNames);