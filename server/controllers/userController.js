const router = require('express').Router();
const userService= require('../services/userServices')
const {COOKIE_NAME} = require('../config/config')

router.post('/register', async(req,res)=>{

   
    let user = await userService.register({...req.body});
    res.status(201).json({_id: user._id})
     
});
router.post('/login', async(req,res)=>{
   const {username, password} = req.body
    let token = await userService.login({username, password});
    // res.header("Authorization",token).sendStatus(user)
    res.status(200).json({
        COOKIE_NAME,
        token,
        
    });
})



module.exports = router;