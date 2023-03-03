const express =require('express')
const productController=require('../controllers/products')

const router=express.Router()

router.get('/add-product',productController.addProduct)

module.exports=router