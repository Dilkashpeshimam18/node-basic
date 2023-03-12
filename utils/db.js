// const mysql=require('mysql2')

// const pool=mysql.createPool(
//     {
//         host:'localhost',
//         user:'root',
//         database:'nodedb',
//         password:'dilkashsql786'
//     }
// )

// module.exports=pool.promise()

const Sequelize=require('sequelize')

const sequelize=new Sequelize('nodedb','root','dilkashsql786',{
    host:'localhost',
    dialect:'mysql'
})

module.exports=sequelize;