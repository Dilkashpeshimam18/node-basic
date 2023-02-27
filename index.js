//creating server using node


const http=require('http')

const server=http.createServer((req,res)=>{
   res.write('Hello world')
   res.end()
})


server.listen(4000)