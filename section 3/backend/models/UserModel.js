const {Schema, model} = require('../connection');

const mySchema = new Schema({
    name: String,
    email: {type : String, unique: true},
    password: {type: String, required: true, minlength: 6},
    city:{type: String, default: 'unknown'}//default unknown means if no city is provided, it will be set to unknown
}, {timestamps: true});

module.exports = model('users', mySchema);
//database operations: CRUD
//create, read, update, delete

//cannot write anything without double qoutes in json file
//cannot have trailing commas in json file
//we cannot use comments in json file




