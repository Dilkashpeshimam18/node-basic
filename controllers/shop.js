const Cart = require('../models/cart');
const Product=require('../models/product')
exports.getProducts = (req, res, next) => {
    Product.fetchAll()  .then(([rows])=>{
      res.render('shop/product-list', {
        prods: rows,
        pageTitle: 'All Products',
        path: '/products'
      });
    }).catch(err=>console.log(err));;
   
  };

  exports.getProduct=(req,res,next)=>{
    const productId=req.params.id
    Product.getProductById().then(([prod])=>{
      console.log(prod)
      res.render('shop/product-detail',
      {product:prod[0],pageTitle:prod.title,path:'/products'})
    }).catch((err)=>console.log(err))
    
  }
  
  exports.getIndex = (req, res, next) => {
    Product.fetchAll().then(([products])=>{
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch((err)=>{
      console.log(err)
    });

  };
  
  exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
      path: '/cart',
      pageTitle: 'Your Cart'
    });
  };

  exports.postCart=(req,res,next)=>{
   const prodId=req.body.productId
    Product.getProductById(prodId,(product)=>{
      Cart.addProduct(prodId,product.price)
    })
   res.redirect('/cart')
  }
  
  exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
      path: '/orders',
      pageTitle: 'Your Orders'
    });
  };
  
  exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
      path: '/checkout',
      pageTitle: 'Checkout'
    });
  };
  