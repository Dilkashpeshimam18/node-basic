const http = require('http')


const server = http.createServer((req, res) => {
    const url = req.url

    if (url == '/node') {
        res.write('<html>')
        res.write('<head><title>First node</title></head>')
        res.write('<body><h1>Welcome to my node js project</h1></body>')
        res.write('</html>')
        return res.end()

    } else if (url == '/home') {
        res.write('<html>')
        res.write('<head><title>First node</title></head>')
        res.write('<body><h1>Welcome Home</h1></body>')
        res.write('</html>')
        return res.end()
    } else if (url == '/about') {
        res.write('<html>')
        res.write('<head><title>First node</title></head>')
        res.write('<body><h1>Welcome About</h1></body>')
        res.write('</html>')
        return res.end()
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>First node</title></head>')
    res.write('<body><h1>Hello</h1></body>')
    res.write('</html>')
    res.end()

})
server.listen(4000)