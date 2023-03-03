const express=require('express')
const productController=require('../controllers/products')

const router=express.Router()

router.get('/product',productController.postAddProduct)
router.post('/product',productController.postAddProduct)

module.exports=router