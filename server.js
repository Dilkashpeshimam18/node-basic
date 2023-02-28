//creating server, route middleware parsing the body using express
const express=require('express')
const bodyParser=require('body-parser')

const app=express()
const adminRouter=require('./routes/admin')
const shopRouter=require('./routes/shop')
//parsing body

app.use(bodyParser.urlencoded({extended:false}))

//route handling middleware

app.use(adminRouter)
app.use(shopRouter)

app.use((req,res,next)=>{
  res.status(404).send('<h1>Page not found</h1>')
})


app.listen(4000)