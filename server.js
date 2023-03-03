//creating server, route middleware parsing the body using express
const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')
const app=express()
const adminRouter=require('./routes/admin')
const shopRouter=require('./routes/shop')
const contactRouter=require('./routes/contact')
const successRouter=require('./routes/success')
const productRouter=require('./routes/product')
const errorController=require('./controllers/error404')
//parsing body

app.use(bodyParser.urlencoded({extended:false}))

//server file staticaly-css/images
app.use(express.static(path.join(__dirname,'public')))

//route handling middleware

app.use('/admin',adminRouter) //filtering path
app.use(shopRouter)
app.use(contactRouter)
app.use(successRouter)
app.use(productRouter)

app.use(errorController.get404Page)


app.listen(4000)