const path=require('path')
const Product=require('../models/product')
// //controller that only work with product logic


// exports.addProduct=(req,res,next)=>{
//     res.sendFile(path.join(__dirname,'../','views','add-product.html'))
//   }


// exports.postAddProduct=(req,res,next)=>{
//     console.log(req.body)
//    const product=new Product(req.body.title,req.body.size)
//    product.save()
//     res.redirect('/')
//   }

//   exports.getProducts=(req,res,next)=>{
//     const product=Product.fetchAll((products)=>{
//      console.log(`All product ${products}`)
//     })
//     res.sendFile(path.join(__dirname,'../','views','shop.html'))
//   }


exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing:false
 
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

   Product.create({
    title:title,
    price:price,
    imageUrl:imageUrl,
     description:description
   })
   .then((res)=>{
      console.log(res)
      res.redirect('/admin/products')
   })
   .catch((err)=>{
    console.log(err)
   })
};

exports.getEditProduct = (req, res, next) => {
  const editMode=req.query.edit
  if(!editMode){
   return res.redirect('/')
  }

  const prodId=req.params.productId
  Product.findById(prodId).then((product)=>{
   if(!product){
    res.redirect('/')
   }

   res.render('admin/edit-product', {
    pageTitle: 'Edit Product',
    path: '/admin/edit-product',
    editing:editMode,
    product:product
  
  });
  })
  .catch((err)=>{
    console.log(err)
  })

};

exports.postEditProduct=(req,res,next)=>{
  const productId=req.body.productId

  const updatedTitle=req.body.title
  const updatedPrice=req.body.price
  const updatedImageUrl=req.body.imageUrl
  const updatedDesc=req.body.description

  Product.findById().then((product)=>{
   product.title=updatedTitle
   product.price=updatedPrice
   product.imageUrl=updatedImageUrl
   product.description=updatedDesc

   return product.save()
  })
  .then((res)=>{
   console.log('Updated product')
   res.redirect('/admin/products')

  })
  .catch((err)=>{
    console.log(err)
  })
  

}

exports.deleteproductById=(req,res,next)=>{
   const id=req.body.productId
  Product.destroy({where:{id:id}})
  .then(()=>{
    res.redirect('/')
  })
  .catch((err)=>{
    console.log(err)
  })
}

exports.getProducts = (req, res, next) => {
    Product.findAll().then((product)=>{
      res.render('admin/products', {
        prods:product,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch((err)=>{
      console.log(err)
    })


};
