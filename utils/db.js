const mysql=require('mysql2')

const pool=mysql.createPool(
    {
        host:'localhost',
        user:'root',
        database:'nodedb',
        password:'dilkashsql786'
    }
)

module.exports=pool.promise()