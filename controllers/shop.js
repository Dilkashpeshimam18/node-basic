const Cart = require('../models/cart');
const Product=require('../models/product')
exports.getProducts = (req, res, next) => {
  Product.findAll().then((products)=>{
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  }).catch((err)=>{
    console.log(err)
  })
   
  };

  exports.getProduct=(req,res,next)=>{
    const productId=req.params.id
    // Product.findAll({where:{id:productId}}).then((product)=>{
    //   res.render('shop/product-detail',
    //   {product:product[0],pageTitle:product[0].title,path:'/products'})
    // }).catch((err)=>{
    //   console.log(err)
    // })

    Product.findById(productId)
    .then((product)=>{
         res.render('shop/product-detail',
      {product:product,pageTitle:product.title,path:'/products'})
    })
    .catch((err)=>{
      console.log(err)
    })

  
    
  }
  
  exports.getIndex = (req, res, next) => {

    Product.findAll().then((products)=>{
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    }).catch((err)=>{
      console.log(err)
    })
  

  };
  
  exports.getCart = (req, res, next) => {
    console.log(req.user.cart)
    req.user.getCart()
    .then((cart)=>{
      return cart.getProducts()
      .then((products)=>{
        res.render('shop/cart', {
          path: '/cart',
          pageTitle: 'Your Cart',
          products:products
        });
      }).catch((err)=>{
        console.log(err)
      })
    })
    .catch((err)=>{
      console.log(err)
    })
 
  };

  exports.postCart=(req,res,next)=>{
   const prodId=req.body.productId
   let newQuantity=1;

   let fetchCart;
    req.user.getCart()
    .then((cart)=>{
      fetchCart=cart;
   return cart.getProducts({where:{id:prodId}})
    })
    .then((products)=>{
      let product;
      if(product.length>0){
        product=product[0]
      }
      if(product){
        const oldQuantity=product.cartItem.quantity
        newQuantity=oldQuantity+1
        return fetchCart.addProduct(product,{
          through:{
            quantity:newQuantity
          }
        })
      }
      return Product.findById(prodId)
      .then(product=>{
        return fetchCart.addProduct(product,{
          through:{
            quantity:newQuantity
          }
        })
      })
  })
  .then(()=>{
    res.redirect('/cart')

  })
    .catch((err)=>{
      console.log(err)
    })
  }
  
  exports.postCartDeleteProduct=(req,res)=>{
    const id=req.body.productId
    req.user.getCart()
    .then((cart)=>{
       return cart.getProducts({where:{id:id}})
    })
    .then((products)=>{
    const product=products[0]
    return product.cartItem.destroy()

    })
    .then((res)=>{
     res.redirect('/cart')
    })
    .catch((err)=>{
      console.log(err)
    })
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
  