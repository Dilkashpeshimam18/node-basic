//creating server, route middleware parsing the body using express
const express=require('express')
const bodyParser=require('body-parser')

const app=express()

//parsing body

app.use(bodyParser.urlencoded({extended:false}))

//route handling middleware
app.use('/add-product',(req,res,next)=>{
  res.send('<html><body><form action="/product" method="POST"><input type="text" name="title" /><input type="number" name="size" />  <button type="submit">Add product</button></form></body></html>')
})

app.use('/product',(req,res,next)=>{
  console.log(req.body)
  res.redirect('/')
})
app.use('/',(req,res,next)=>{
    res.send('<h1>Hello world</h1>')
  })

app.listen(4000)