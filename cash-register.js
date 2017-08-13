const cashRegister = {
    total: 0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += itemCost;
        this.lastTransactionAmount = itemCost * quantity;
    },
    scan: function(item, quantity) {
        switch (item) {
        case "bread": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "eggs": this.add(4.99 * quantity); break;
        case "butter": this.add(0.45 * quantity); break;
        }
    },
    voidLastTransaction: function() {
      this.total -= cashRegister.lastTransactionAmount;
    }
};

cashRegister.scan("milk", 5);

console.log(`Your bill comes to ${cashRegister.total}`);
