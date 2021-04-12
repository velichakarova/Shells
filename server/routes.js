const router = require('express').Router();
const  userController = require('./controllers/userController');
const productController = require('./controllers/productController');
// const commentController = require('./controllers/commentController');
const homeController = require('./controllers/homeController')

// const router = Router();

router.use('/auth', userController);
 router.use('/product', productController);


// router.get('/', (req,res)=>{
//     res.json({message:'Helloooo from Me :)'})
// })


module.exports = router;