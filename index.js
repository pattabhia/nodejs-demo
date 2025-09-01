const data = require("./data.json");
const path = require("path");
const eventEmitter = require("events");
console.log(data);

const emitter = new eventEmitter();
emitter.on("log", (msg) => console.log(msg));
emitter.emit("log", "Hello World!");
