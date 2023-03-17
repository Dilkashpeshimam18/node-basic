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
const sequelize=require('./utils/db')
const Product=require('./models/product')
const User=require('./models/user')
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


app.use((req,res,next)=>{
    User.findByPk(1)
    .then((user)=>{
       req.user=user;
       next();
    })
    .catch((err)=>{
        console.log(err)
    })

})

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRouter)
app.use(successRouter)
app.use(productRouter)

app.use(errorController.get404);

//product created by user-->
Product.belongsTo(User,{constraints:true,onDelete:'CASCADE'})

User.hasMany(Product)

sequelize.sync().then((res)=>{
    return User.findByPk(1)

})
.then((user)=>{
    if(!user){
       return User.create({name:'Max',email:'max@gmail.com'})
    }
    return user
})
.then((user)=>{
  console.log(user)
  app.listen(4000);

})
.catch(err=>console.log(err))

