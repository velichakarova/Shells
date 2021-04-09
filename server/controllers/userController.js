const router = require('express').Router();
const userService= require('../services/userServices')
const {COOKIE_NAME} = require('../config/config')
const User= require('../models/User')
const jwt = require('jsonwebtoken');
const { SALT_ROUND, SECRET} = require('../config/config');
const bcrypt = require('bcrypt');

router.post('/register', async(req,res)=>{

   
    let user = await userService.register({...req.body});
    let token = jwt.sign({
        _id:user._id,
        username:user.username
    },SECRET, {expiresIn:'2h'})
    res.header("Authorization",token).send(user)
    res.status(201).json({_id: user._id})
     
});
router.post('/login', (req,res,next)=>{

    console.log(req.body);
    const {username, password} = req.body;
    User.where({username})
        .findOne()
            .then(user=>{
                // console.log(user);
                if(!user){
                    throw {message:'User not found!'}
                }
                let isMatch =  bcrypt.compare(password, user.password);
                //console.log(isMatch);
            
                if(!isMatch) {throw { message: 'Wrong password!'}}
                //generate Json token
                let token = jwt.sign({
                    _id:user._id,
                    username:user.username
                },SECRET, {expiresIn:'2h'})
                res.header("Authorization",token).send(user)
                
            })
            .catch(err=>{
                next({status:404, massage:'No such user or password!', type:'ERROR'})
               
            })
            
})
router.post('/logout',(req,res)=>{
    
    const token = req.cookies[config.COOKIE_NAME];
       res.clearCookie(config.COOKIE_NAME).send('Logout successfully!');
           
           
    
})



module.exports = router;