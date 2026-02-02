const express = require("express")
const {Sale} = require("./week-1/Sale.js")


const sale = new Sale()
const app = express()

app.use(express.json())

app.get("/", (req, res)=>{
res.send("Home page, hello Ready4IT")
});

app.get("/sale",(req, res)=>{
res.json(sale.getAllSales())

})


// app.post("/sale", async(req, res)=>{

//     let body = req.body
//     let saveState = await sale.add(body)
//     if(saveState == true){
//         res.json({message: ""})
//         res.
//     }
//     console.log(body)
//     res.send("Sales added successfuly")
// })








app.listen(3000, (err)=>{
    if(err){
console.log(err)
    }else{
        console.log("Server is running successfully on port 3000")
    }
})