const express =require('express')
const productController=require('../controllers/products')

const router=express.Router()

// router.get('/add-product',productController.addProduct)

// /admin/add-product => GET
router.get('/add-product', productController.getAddProduct);

// /admin/products => GET
router.get('/products', productController.getProducts);

// /admin/add-product => POST
router.post('/add-product', productController.postAddProduct);

module.exports=router