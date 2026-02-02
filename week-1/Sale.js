const fs = require("fs/promises")

class Sale {
    constructor(path="./week-1/sale.json"){
        
        this.path = path
        this.sales = []
        fs.readFile(this.path)
        .then((data, err)=>{
            if(err){
                console.log(err)
            }else{
                this.sales = JSON.parse(data)
            }
        })


    }

    getAllSales(){
        return this.sales
    }

    add(sale){
        this.sales.push(sale)
    }

   async save() {
    try {
        await fs.writeFile(
            this.path,
            JSON.stringify(this.sales) 
        );
        return true; 
    } catch (error) {
        console.error("Error saving sales:", error);
        return false; 
    }
}

    
}





module.exports = {Sale};