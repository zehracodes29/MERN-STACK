const smartphoneList = [
    {
        brand: 'Realme',
        model: 'GT2 Pro',
        price: 30000,
        colors: ['blue', 'black', 'white']
    },
    {
        brand: 'Apple',
        model: 'Iphone 13',
        price: 45000,
        colors: ['black', 'white']
    },
    {
        brand: 'Nothing',
        model: '3a',
        price: 25000,
        colors: ['black', 'white', 'blue']
    },
    {
        brand: 'Motorola',
        model: 'h50',
        price: 21000,
        colors: ['green', 'blue']
    },
    {
        brand: 'IQOO',
        model: 'Z2',
        price: 15000,
        colors: ['red', 'blue', 'black']
    },
];

console.log(smartphoneList[1].colors);
console.log("Price of "+smartphoneList[1].brand +" "  +smartphoneList[1].model+" "+"is"+" "+ smartphoneList[1].price);
console.log("Price of "+smartphoneList[2].brand +" "  +smartphoneList[2].model+" "+"is"+" "+ smartphoneList[2].price);
console.log("Model of"+" "+smartphoneList[1].brand+" "+"is"+" "+smartphoneList[1].model);

//create an array of all brands of objects of smartphoneList with return method
const brandList = smartphoneList.map((smartphone) => {
    return smartphone.brand;
});
console.log(brandList);

//filter smartphones with price less than 30000
const budgetphones = smartphoneList.filter((smartphone) => {
    return smartphone.price < 30000;
});
console.log(budgetphones);

//filter smartphones having brand nothing
const nothingPhones = smartphoneList.filter((smartphone) => {
    return smartphone.brand === 'Nothing';
});
console.log(nothingPhones);

//filter smartphones having color white
const whitePhone = smartphoneList.filter((smartphone) => {
    return smartphone.colors.includes('white');
});
console.log(whitePhone);

//create array of all smartphone prices from smartphoneList by mapping
const priceList = smartphoneList.map((smartphone) => {
    return smartphone.price;
});
console.log(priceList);
