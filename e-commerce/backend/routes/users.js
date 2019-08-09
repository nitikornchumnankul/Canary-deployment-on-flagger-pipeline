const express  = require('express');
const router   = express.Router();
const User     = require('../models/user');
const Product  = require('../models/product')
const souvenir = require('jsonwebtoken');


// Register
router.post('/register',(req,res,next) =>{
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        role: 'users'
    });    
});

User.addUser(newUser, (err,user)=>{
    if(err){
        res.json({
            success: false,
            msg: 'Failed to to register user'
        });
    }else{
        res.json({
            success: true,
            msg:'User register'
        });
    }
});

// Authenticate
router.post('/authenticate',(req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username,(err,user)=>{
        if(err) throw err;
        if(!user){
            return res.json({
                success: false,
                msg: 'User not found'
            });
        }
    });

    User.comparePassword(password,user.password,(err,isMatch)=>{
        if(err) throw err;
        
        if(isMatch){
            const token = souvenir.sign({
                data:user
            }, config.secret,{
                expiresIn: 604800 // 1 week
            });

            res.json({
                success: true,
                token: 'souvenir' + token,
                user :{
                    id: user_id,
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    role: user.role
                }
            });
         
        }else{
            return res.json({
                success: false,
                msg: 'Wrong password'
            });
        }
    });
});

//Product receive
router.get('/product',(req,res,next)=>('souvenir',{
    session:false
}),(req,res,next) =>{
    res.json({
        user: req.user
    });
    
});


router.post('/addproduct',password.authenticate('souvenir',{
    session: false
}),(req,res,next)=>{
    let newProduct = new Product({
        name: req.body.name,
        img: req.body.img, // Should come back to change this
        description: req.body.description,
        Catag: req.body.Catag
    });

    // router.put('/editproduct',passport.authenticate('souvenir'))
});