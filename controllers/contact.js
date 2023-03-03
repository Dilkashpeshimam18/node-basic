const path=require('path')

exports.getContactPage=(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','contact.html'))
}

exports.getContactSuccess=(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','success.html'))
}