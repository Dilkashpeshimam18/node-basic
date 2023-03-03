const express=require('express')
const contactController=require('../controllers/contact')

const router=express.Router()

router.get('/success',contactController.getContactSuccess)
router.post('/success',contactController.getContactSuccess)

module.exports=router