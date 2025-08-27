const user = {
    name: "Raju Rastogi",
    email:"raju@email.com",
    password:"abc123"

};
//fetching key values
//first method
console.log(user);
console.log(user.name);
console.log(user.email);
console.log(user.password);

//another method of fetching
console.log(user["name"]);
console.log(user["email"]);
console.log(user["password"]);

//adding new key:value pair to the object
user.address="Lucknow";

console.log(user);

//changing value under an object
user.name="Rahul Dravid";
console.log(user);

//checking if a key exists in object
console.log("name" in user);
console.log("email" in user);
console.log("age" in user);

//accessing all keys of object
console.log(Object.keys(user));

//accessing all values of object
console.log(Object.values(user));

const smartphone={
    brand:"Realme",
    model:"GT 2 Pro",
    price:30000,
    features:["5G", "AMOLED", "Snapdragon 8 Gen 1"],
    colors:["Black", "White", "Metallic Blue"]
};

console.log(smartphone.price);
//change model of smartphone
smartphone.model="GT 2 Pro 5G";
console.log(smartphone.model);
//get the second color
console.log(smartphone.colors[1]);
//add a new color
smartphone.colors.push("Red");
console.log(smartphone.colors);
//accessing character from the value of brand
console.log(smartphone.brand[2]);
//accessing all keys of object
console.log(Object.keys(smartphone));
//accessing all values of object
console.log(Object.values(smartphone));

//array of objects

const smartphoneList = [
    {
        brand: "Realme",
        model: "GT 2 Pro",
        price: 30000,
        features: ["5G", "AMOLED", "Snapdragon 8 Gen 1"],
        colors: ["Black", "White", "Metallic Blue"]
    },
    {
        brand: "Samsung",
        model: "Galaxy S21",
        price: 80000,
        features: ["5G", "Dynamic AMOLED", "Exynos 2100"],
        colors: ["Phantom Gray", "Phantom White", "Phantom Violet"]
    },
    {
        brand: "Apple",
        model: "iPhone 13",
        price: 90000,
        features: ["5G", "Super Retina XDR", "A15 Bionic"],
        colors: ["Midnight", "Starlight", "Product(RED)"]
    },
    {
        brand:"Nothing",
        model:"3a",
        price: 32999,
        features: ["5G", "OLED", "Snapdragon 778G+"],
        colors: ["White", "Black"]
    },
    {
        brand: "Google",
        model: "Pixel 6",
        price: 59999,
        features: ["5G", "OLED", "Google Tensor"],
        colors: ["Stormy Black", "Kinda Coral", "Sorta Seafoam"]
    }
]
console.log(smartphoneList.length);
console.log(smartphoneList[0]);//accesing first object of the array smartphoneList
//accessing values of first object
console.log(smartphoneList[0].brand);
console.log(smartphoneList[0].model);
console.log(smartphoneList[0].price);
console.log(smartphoneList[0].features);
console.log(smartphoneList[0].colors);

//accessing values of second object
console.log(smartphoneList[1].brand);
console.log(smartphoneList[1].model);
console.log(smartphoneList[1].price);
console.log(smartphoneList[1].features);
console.log(smartphoneList[1].colors);

//accessing values of third object
console.log(smartphoneList[2].brand);
console.log(smartphoneList[2].model);
console.log(smartphoneList[2].price);
console.log(smartphoneList[2].features);
console.log(smartphoneList[2].colors);

console.log(smartphoneList[6]);//undefined because there is no seventh object

console.log(smartphoneList[0].colors[2]);//indexing and slicing
//adding new color to second smartphone
smartphoneList[1].colors.push("Red");

