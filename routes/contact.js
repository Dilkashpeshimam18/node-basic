const express=require('express')
const contactController=require('../controllers/contact')

const router=express.Router()

router.get('/contact',contactController.getContactPage)


module.exports=router