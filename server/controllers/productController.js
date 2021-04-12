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
router.post('/create',isAuth, (req, res,next)=>{
    console.log("create/ post ");
        console.log(req.user);
        console.log(req.body);


        const owner = req.user._id
        const {model,
            imgURL,
            description,
            price }= req.body


    let product = new Product ({model,
        imgURL,
        description,
        price, owner})
        console.log(product);

        product.save()
        .then(createProduct=>{
            res.status(201).json(createProduct)
            console.log(createProduct);
        })
        .catch(err=>{
            next({status:404, massage:'Error from create', type:'ERROR'})
           
        })
    
});



module.exports = router;
