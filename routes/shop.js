const express=require('express')
const productController=require('../controllers/products')
const shopController = require('../controllers/shop');

const router=express.Router()

// router.get('/',productController.getProducts)
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:id',shopController.getProduct);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);


module.exports=router