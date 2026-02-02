const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "application/json" });

      console.log(req.url);
      res.write("Hello world ");
      res.write("from Ready4IT");
      res.end();
      break;
    case "/sale":
            fs.writeFile("sale.json", (req, res)=>{
                
            })
  }
 
});

server.listen(3000, () => {
  console.log("Server is running sucessfully on port 3000");
});


