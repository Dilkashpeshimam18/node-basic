const fs=require('fs')
const path=require('path')
const p=path.join(path.dirname(process.mainModule.filename), 'data','products.json')

const getProductsFromFile=(cb)=>{

    fs.readFile(p,(err,data)=>{
        if(err){
          return cb([])
        }

        cb(JSON.parse(data))
    })
}

module.exports=class Product{
    constructor(id,t,s){
        this.id=id
        this.title=t
        this.size=s
    }

    save(){

        getProductsFromFile((products)=>{
            if(this.id){
                const existingProductIdx=products.findIndex((prod)=>prod.id===this.id)
                const updatedProducts=[...products]
                updatedProducts[existingProductIdx=this]
                fs.writeFile(p, JSON.stringify(updatedProducts),(err)=>{
                    console.log(err)
                })
            }else{
                this.id=Math.random().toString()
                products.push(this)
                fs.writeFile(p, JSON.stringify(products),(err)=>{
                    console.log(err)
                })
            }
 
        })

    }

    static fetchAll(cb){
        getProductsFromFile(cb)
    }

    static getProductById(id,cb){
    console.log(id)
    getProductsFromFile(products=>{
        const product =products.filter((prod)=>{
            return prod.id==id
        })

        cb(product)
    })
    }

    static deleteProduct(id){
        console.log(id)

        getProductsFromFile(products=>{
            const updatedProducts = products.filter((prod)=>{
                return prod.id != id
            })

            fs.writeFile(p,JSON.stringify(updatedProducts),(err)=>{
                console.log(err)
            })
                })
    }
}