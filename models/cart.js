const fs=require('fs')
const path=require('path')

const p=path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'

)

module.exports=class Cart{
   static addProduct(id,price){

    fs.readFile(p,(err,data)=>{
        let cart={products:[], totalPrice:0}
        if(!err){
            cart=JSON.parse(data)
        }

        const existingProductIdx=cart.products.findIndex((prod)=>prod.id===id)
        const existingProduct=cart[existingProductIdx]
        let updatedproduct
        if(existingProduct){
          updatedproduct={...existingProduct,quantity:quantity+1}
          cart.products=[...cart.products]
          cart.products[existingProductIdx]=updatedproduct
        }else{
            updatedproduct={id:id,quantity:1}
            cart.products=[...cart.products,updatedproduct]

        }
        cart.totalPrice=cart.totalPrice+price
        fs.writeFile(p, JSON.stringify(cart),(err,data)=>{
            console.log(err)
        })
    })

   }
}