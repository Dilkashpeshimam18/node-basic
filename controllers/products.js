const path=require('path')
const Product=require('../models/product')
//controller that only work with product logic


exports.addProduct=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
  }


exports.postAddProduct=(req,res,next)=>{
    console.log(req.body)
   const product=new Product(req.body.title,req.body.size)
   product.save()
    res.redirect('/')
  }

  exports.getProducts=(req,res,next)=>{
    const product=Product.fetchAll((products)=>{
     console.log(`All product ${products}`)
    })
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
  }
