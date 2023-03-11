const db=require('../utils/db')

module.exports=class Product{
    constructor(id,t,d,p,i){
        this.id=id
        this.title=t
        this.description=d
        this.price=p
        this.image=i
    }

    save(){

   return db.execute('INSERT INTO products (title,price,description,imageUrl) VALUES (?,?,?,?)',
   [this.title,this.price,this.description,this.image]
   )

    }

    static fetchAll(){
    return db.execute('SELECT * FROM products')
    }

    static getProductById(id){
   return db.execute('SELECT * FROM products WHERE products.id=?',[id])
    }

    static deleteProduct(id){
        return db.execute('DELETE FROM products WHERE products.id=?',[id])
    
    }
}