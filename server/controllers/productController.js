const { Router } = require('express');
const Product =require('../models/Product');
const {isAuth} = require('../middleweres/auth');
const productService = require('../services/productService')
const router = Router();

router.get('/' ,(req,res)=>{
    Product.find()
    .then(products => {
        res.json(products)
    })
})
router.post('/create',isAuth, (res,req)=>{
        console.log(req.user);
        console.log(req.body);

        let product = new Product (req.body, {owner:req.user._id})
        product.save()
        .then(createProduct=>{
            res.status(201).json({_id: createProduct._id})
        })
    //    let product = await productService.create(req.body, req.user._id)
    //   

})


module.exports = router;
