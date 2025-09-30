const {Schema, model} = require('../connection');

const mySchema = new Schema({
    name: String,
    email: {type : String, unique: true},
    password: {type: String, required: true, minlength: 6}
}, {timestamps: true});

module.exports = model('users', mySchema);

    //cannot write anything without double qoutes in json file
    //cannot have trailing commas in json file
//cannot have comments in json file