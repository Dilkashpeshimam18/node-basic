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

router.get('/edit-product/:productId',productController.getEditProduct)

router.post('/edit-product',productController.postEditProduct)

router.post('/delete-product',productController.deleteproductById)

module.exports=router