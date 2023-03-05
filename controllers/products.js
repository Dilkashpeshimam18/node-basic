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
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};
