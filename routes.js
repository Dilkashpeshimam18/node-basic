const fs=require('fs')


const requestHandler=()=>{
    
const url = req.url
const method=req.method
    if(url==='/'){
        constdata=fs.readFile('message.txt',{encoding:'utf-8'},(err,data)=>{
      if(err){
       console.log(err)
      }
      res.write("<html>");
      res.write('<head><title>Enter message</title></head>')
      res.write(`<body>${data}</body>`)
      res.write("</html>")
      res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button>Send</button></form></body>')
      return res.end()
      
      console.log("this is data",data)
      
        })
      
      
       }
      
       if(url==='/message' && method==="POST"){
           const body=[]
           req.on('data',(chunk)=>{
              console.log(chunk)
              body.push(chunk)
           })
           req.on('end',()=>{
               const parsedBody=Buffer.concat(body).toString()
               console.log(parsedBody)
               const message=parsedBody.split('=')[1]
               fs.writeFile('message.txt',message,(err)=>{
                   console.log(err)
           
               })
      
           })
           res.statusCode=302;
           res.setHeader('Location','/')
            return res.end();
        
       }
      
      res.setHeader('Content-Type','text/html')
       res.write('<html>')
       res.write('<head><title>First node</title></head>')
       res.write('<body><h1>Hello</h1></body>')
       res.write('</html>')
       res.end()
}


module.exports= {
    handler:requestHandler}

    module.exports.text2='Great'
    exports.text='Hello this works'