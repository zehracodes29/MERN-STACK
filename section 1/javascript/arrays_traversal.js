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

const num = ['asra','afiya','safa','mariyam','hera','wajiha','zehra','fatima'];
//wap to print all names that start with a
const array_A=num.filter(name => name.startsWith('a'));
console.log(array_A);

//wap to map names that includes i
const array_I=num.map(name => name.includes('i'));
console.log(array_I);

////wap to print names that includes i
const array_I2=num.filter(name => name.includes('i'));
console.log(array_I2);

//wap to print names that have length greater than 4
const array_L=num.filter(name => name.length > 4);
console.log(array_L);


//wap to print names that have length greater than 4 and includes m
const array_LI=num.filter(name => name.length > 4 && name.includes('m'));
console.log(array_LI);

//wap to print names that have length greater than or equal to5
const array_l=num.filter(name => name.length >= 5);
console.log(array_l);

//wap to print names that includes f
const array_f = num.filter(name => name.includes('f'));
console.log(array_f);

//wap to print names that includes w
const array_w = num.filter(name => name.includes('w'));
console.log(array_w);

//wap to print names that includes two a
const array_aa = num.filter(name => name.includes('aa'));
console.log(array_aa);

//wap to print names that includes e
const array_e = num.filter(name => name.includes('e'));
console.log(array_e);

//wap to print names that includes t
const array_t = num.filter(name => name.includes('t'));
console.log(array_t);

//wap to print names that includes h
const array_h = num.filter(name => name.includes('h'));
console.log(array_h);

//wap to print names that includes two a
const array_a = num.filter(name => name.includes('aa'));
console.log(array_a);

//wap to print names that includes  e and a
const array_ea = num.filter(name => name.includes('e') && name.includes('a'));
console.log(array_ea);

//wap to print names that includes h and a
const array_ha = num.filter(name => name.includes('h') && name.includes('a'));
console.log(array_ha);

//wap to print names that includes i and a
const array_ia = num.filter(name => name.includes('i') && name.includes('a'));
console.log(array_ia);

//wap to print names that includes t or h
const array_th = num.filter(name => name.includes('t') || name.includes('h'));
console.log(array_th);

//wap to print names that includes f or w or m
const array_fwm = num.filter(name => name.includes('f') || name.includes('w') || name.includes('m'))
console.log(array_fwm);

//wap to print names that includes f and a
const array_fa = num.filter(name => name.includes('f') && name.includes('a'));
console.log(array_fa);

//wap to filter names that  includes a twice in the string
const array_aa2 = num.filter(name => name.split('a').length - 1 === 2);
console.log(array_aa2);

//wap to filter names that  includes a thrice in the string
const array_aa3 = num.filter(name => name.split('a').length - 1 === 3);
console.log(array_aa3);

//wap to filter names that  includes a or e
const array_ae = num.filter(name => name.includes('a') || name.includes('e'));
console.log(array_ae);

//wap to filter names that includes a or e and i
const array_aei = num.filter(name => name.includes('a') || name.includes('e') && name.includes('i'));
console.log(array_aei);

//wap to filter names that includes a and i
const array_ai = num.filter(name => name.includes('a') && name.includes('i'));
console.log(array_ai);

//wap to filter names that includes a and i or h
const array_aih = num.filter(name => name.includes('a') && name.includes('i') || name.includes('h'));
console.log(array_aih);

//wap to filter names that includes i and h
