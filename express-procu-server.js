const express = require("express")
const fs = require("fs/promises")
const {Procurement}= require("./week-1/Procurment.js")
const { error } = require("console")


const procurement = new Procurement()
const app = express()

app.use(express.json())

app.get("/", (req, res)=>{
res.send("Procurement Home page")
});

app.get("/procurement",(req, res)=>{
fs.readFile("data.json", (error, data)=>{
    if(error){
        return res.status(200).json([])
    }
    try {
        const records = JSON.parse(data)
        res.status(200).json(records)
    } catch (error) {
        res.status(500).json({message: "invalid data"})
    }
   
})

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