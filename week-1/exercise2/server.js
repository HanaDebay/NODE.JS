const http = require("http")
const kglInfo = require("./KglInfo")


const server = http.createServer((req, res)=>{
    if(req.url === "/kgl/info"){
       
        res.writeHead(200, {"Content-Type":"application/json"})
        res.end(JSON.stringify(kglInfo))
    }else{
        res.writeHead(400, {"Content-Type":"application/json"})
    res.end("route not found")
   }


})


server.listen(3000,()=>{
    console.log("Server is running succesfully on port 3000")
})