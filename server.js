//creating server & middleware using express
const express=require('express')

const app=express()

//it will execute on every incoming request
app.use((req,res,next)=>{
  console.log('Inside middleware')
  next(); //allow request to continue to next middleware line!
})

app.use((req,res,next)=>{
    console.log('Inside another middleware')
    res.send('<h1>Hello world</h1>')
  })

app.listen(4000)