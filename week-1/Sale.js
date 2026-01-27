class Sale {
    constructor(amount, quantity, item, date , currency){
        this.amount = amount;
        this.quantity = quantity;
        this.item = item;
        this.date = date;
        this.currency = currency;
    }

    getTotal(){
        return this.amount * this.quantity;
    }

    getUnitCost(){
        if(this.quantity === 0){
            return 0;
            return this.amount / this.quantity;
        }
    }
}

class CreaditSale extends Sale {
    constructor(amount, quantity, item, date, currency, dueDate){
        super (amount, quantity, item, date, currency);
        this.dueDate = dueDate;
    }

    getAmountDue(){
        return 0;
}
}

module.exports = Sale;