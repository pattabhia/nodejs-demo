const emitter = require("node:events");

class PizzaShop extends emitter {
    constructor() {
        super();
        this.on("order", this.prepareOrder);
        this.on("ready", this.serveOrder);
    }

    prepareOrder(order) {
        console.log(`Preparing order for ${order.name}`);
        setTimeout(() => {
            this.emit("ready", order);
        }, 2000);
    }

    serveOrder(order) {
        console.log(`Order for ${order.name} is ready with ${order.pizza}!`);
    }

}
module.exports = PizzaShop;