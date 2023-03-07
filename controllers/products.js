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
  const product = new Product(null,title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode=req.query.edit
  if(!editMode){
   return res.redirect('/')
  }

  const prodId=req.params.productId
  Product.getProductById(prodId,product=>{
    console.log(product)
    if(!product){
      return res.redirect('/')
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing:editMode,
      product:product
    
    });
  })

};

exports.postEditProduct=(req,res,next)=>{
  const productId=req.body.productId

  const updatedTitle=req.body.title
  const updatedSize=req.body.size
  
  const updatedProduct=new Product(productId,updatedTitle,updatedSize)

updatedProduct.save()
res.redirect('/admin')

}

exports.deleteproductById=(req,res,next)=>{
   const id=req.body.productId
  Product.deleteProduct(id)
  res.redirect('/')
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};
