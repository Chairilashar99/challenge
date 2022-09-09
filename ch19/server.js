const http = require('http')
const fs = require('fs')
const res = require('express/lib/response')

const html = fs.readFileSync('index.html','utf 8')

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.render(html)
}).listen(3000)