const {Schema, model} = require('../connection');

const mySchema = new Schema({
    productname: String,
    price: Number,
    description: {type: String, required: true, minlength: 10},
    category:{type: String, default: 'unknown'}//default unknown means if no category is provided, it will be set to unknown
}, {timestamps: true});

module.exports = model('products', mySchema);
//database operations: CRUD
//create, read, update, delete

    //cannot write anything without double qoutes in json file
    //cannot have trailing commas in json file
//cannot have comments in json file