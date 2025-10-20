const http = require('http')
const port = 6969
const fs = require('fs')

const server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile('index.html',function(error,data){
        if(error){
            res/writejead(404)
            res.write('Error:File Not Found')
        }else{
            res.write(data)
        }
        res.end()
    })
    res.write('Hello node')
    res.end()
})

server.listen(port,function(error){
    if(error){
        console.log("Something went wrong",error)
    }else{
        console.log("Server is listening on port " + port)
    }
})