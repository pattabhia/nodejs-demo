const data = require("./data.json");
const path = require("path");
const eventEmitter = require("events");
const PizzaShop = require("./pizza-shop");

pizzashop = new PizzaShop();
pizzashop.emit("order", { name: "John Doe", pizza: "Margeretta" });

const emitter = new eventEmitter();
emitter.on("log", (msg) => console.log(msg));
emitter.emit("log", "Hello World!");
