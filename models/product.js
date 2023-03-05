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
    constructor(t,s){
        this.title=t
        this.size=s
    }

    save(){
        this.id=Math.random().toString()
        getProductsFromFile((products)=>{

            products.push(this)
            fs.writeFile(p, JSON.stringify(products),(err)=>{
                console.log(err)
            })
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
}