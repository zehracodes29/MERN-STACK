//adding and removing elements from the array

let fruits = ["apple", "banana", "orange"];
console.log(fruits);

//adding elements
fruits.push("watermelon");//adds elements at the end
console.log(fruits);
fruits.unshift("kiwi");//adds elements at the beginning
console.log(fruits);

//removing elements
fruits.pop();//removes the last element
console.log(fruits);

//deleting elements
fruits.shift();//removes the first element
console.log(fruits);

//deleting ,inserting and replacing elements
fruits.splice(2, 1, "mango");//inserts "mango" at index 2 and removes 1 element
console.log(fruits);
fruits.splice(1, 1, "pineapple");//inserts "pineapple" at index 1 and removes 1 element
console.log(fruits);
fruits.splice(1,2);//removes 2 elements at index 1
console.log(fruits);
fruits.splice(1,0,"grape","pear");//inserts "grape" and "pear" at index 1 and removes 0 elements
console.log(fruits);

const brands = ["samsung","nokia","oneplus",'apple','mi','oppo'];
console.log(brands);

console.log(brands.slice(2, 5));//access brands from oneplus to mi

brands.splice(1, 1, "motorola");//replace nokia with motorola
console.log(brands);

brands.unshift("realme");//add new element at the beginning

console.log(brands);

brands.splice(-2);//remove last 2 elements
console.log(brands);

brands.splice(2, 0, "xiaomi");//add a new brand after nokia
console.log(brands);

brands.splice(0, 1, "blackberry");//replace samsung with blackberry
console.log(brands);


