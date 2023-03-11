//creating server, route middleware parsing the body using express
// const express=require('express')
// const bodyParser=require('body-parser')
// const path=require('path')
// const app=express()
// const adminRouter=require('./routes/admin')
// const shopRouter=require('./routes/shop')
// const contactRouter=require('./routes/contact')
// const successRouter=require('./routes/success')
// const productRouter=require('./routes/product')
// const errorController=require('./controllers/error404')

// app.set('view engine', 'ejs');
// app.set('views', 'views');
// //parsing body

// app.use(bodyParser.urlencoded({extended:false}))

// //server file staticaly-css/images
// app.use(express.static(path.join(__dirname,'public')))

// //route handling middleware

// app.use('/admin',adminRouter) //filtering path
// app.use(shopRouter)
// app.use(contactRouter)
// app.use(successRouter)
// app.use(productRouter)

// app.use(errorController.get404Page)


// app.listen(4000)

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error404');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRouter=require('./routes/contact')
const successRouter=require('./routes/success')
const productRouter=require('./routes/product')






app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRouter)
app.use(successRouter)
app.use(productRouter)

app.use(errorController.get404);

app.listen(4000);
