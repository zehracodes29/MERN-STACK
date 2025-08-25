//array traversal

const nums = [4,6,8,9,3,1,2];

//using index
for(let i=0; i<nums.length;i++){
    console.log(nums[i]);
}

comsole.log("using for of loop");

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
