const jwt = require('jsonwebtoken');
require('dotenv').config();

const authorise = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];//? means optional chaining
    console.log("Token from header:", token);
    if(!token) {
        return res.status(400).json({ message: 'No token provided' });
    }

    else{
        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
            if(err) {
                console.log( err);
                res.status(500).json( err );
            }
            else {
                req.user = data;//set data i.e email and password for forward usage
                next();
            }
        });
    }

};
module.exports = authorise;



    


    

  // Middleware logic for authorisation

