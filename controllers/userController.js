
const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports.create = async function(req,res){
    console.log("I Am in Controller");


    try {
        let user = await User.findOne({ email: req.body.email }); //checking if doctor alreadr exists
        if (user) {
            //if doctor exists
            return res.json(409, {
                message: 'User already exists!'
            });
        } else {
            user = await User.create(req.body); //creating a new doctor account
            return res.json(201, {
                message: 'User created successfully!'
            })
        }
    } catch(err){
        //catching errors
        console.log('Internal server error!!',err);
        return res.json(500, {
            message: 'Internal Server Error'
        })
    }
        



}


module.exports.createsession = async function(req,res){

    try{
        let user  = await User.findOne({email: req.body.email});

        if (!user || user.password != req.body.password){
            return res.json(422, {
                message: "Invalid username or password"
            });
        }

        return res.json(200, {
            message: 'Sign in successful, here is your token, please keep it safe!',
            data:  {
                token: jwt.sign(user.toJSON(), 'passport-jwt', {expiresIn:  '10000'})
            }
        })

    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }



}