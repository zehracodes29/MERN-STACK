//array traversal

const nums = [4,6,8,9,3,1,2];

//using index
for(let i=0; i<nums.length;i++){
    console.log(nums[i]);
}

console.log("using for of loop");

//using for of loop
for(let n of nums){
    console.log(n);
}

for(let i=0; i<nums.length;i++){
    console.log(nums[i] * nums[i]);//print square of all elements in the arrays nums

}

for(let i=0; i<nums.length;i++){
    if(nums[i] % 2 === 0){
        console.log(nums[i]);//print only even numbers

    }
}

//using forEach
nums.forEach( () => {console.log("function called")});

nums.forEach( (n) => {console.log("function called", n)

});
//nums.forEach((a) => {console.log("function called", a)
    //console.log(a);
//});
nums.forEach((a) =>{console.log(a)});
nums.forEach((n, i) =>{console.log(n, i)});//n is element and i is index
nums.forEach((n,i,arr) =>{console.log(n, i, arr)});//n is element and i is index and arr is the array itself
nums.forEach((n,i,arr, u) =>{console.log(n, i, arr, u)});//n is element and i is index and arr is the array itself and u is undefined
//u is undefined because forEach only passes 3 arguments to the callback function

const prices = [3000,4500,6000,1200,2300];
//WAP to prints all prices less than 4000
console.log("Prices less than 4000:");
prices.forEach(price => {
    if(price < 4000){
        console.log(price);
    }
});
//WAP to prints all prices greater than 4000
console.log("Prices greater than 4000:");
prices.forEach(price => {
    if(price > 4000){
        console.log(price);
    }
});

//WAP to print all prices divisible by 15
console.log("Prices divisible by 15:");
prices.forEach(price => {
    if(price % 15 === 0){
        console.log(price);
    }
});