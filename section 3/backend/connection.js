const mongoose = require('mongoose');

const url = "mongodb+srv://rzehra942_db_user:ayra7007coco@cluster0.tzdejuy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url)
//jab result ajaega tb chlega niche ka code
//asynchronous function
.then((result) => {
    console.log("db connected");
    
}).catch((err) => {
    console.log(err);
    
});

console.log("other statement");
  
module.exports = mongoose;

//different methods to send request

//get==to read data
//post==to create data
//put==to update data
//delete==to delete data
//pull
//post==body bhej skte hain
//put==body update kr skte hain
//delete== delete kr skte hain

//request has threee parts  url, header, body

//url => /api/products/add
//header => content-type: application/json
//body => {name: "product1", price: 100, quantity: 10}