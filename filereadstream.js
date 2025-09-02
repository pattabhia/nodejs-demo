const fs = require("node:fs")

const readable = fs.createReadStream("./message.txt", { encoding: "utf-8" })

readable.on("data", (chunk) => {
    console.log(chunk, "----", chunk.length, "bytes", "----", Buffer.byteLength(chunk), "bytes")
})

readable.on("end", () => {
    console.log("end", "@@@@")
})

readable.on("error", (err) => {
    console.log(err, "---")
})