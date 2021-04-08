const { Router } = require('express');
const Product =require('../models/Product');
const {isAuth} = require('../middleweres/auth');
const productService = require('../services/productService')
const router = Router();

router.get('/', (req,res)=>{
    Product.find()
    .then(products => {
        res.json(products)
    })
})
router.post('/create', async (res,req)=>{
        console.log(req.user);
        console.log(req.body);
       await productService.create(req.body, req.user._id)
       res.status(201).json({_id: product._id})

})


module.exports = router;
