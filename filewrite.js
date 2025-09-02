const fs = require("node:fs");

//read the file
const fileContent = fs.readFileSync("./message.txt", { encoding: "utf-8" });

console.log(fileContent);

//write to the file

fs.writeFile(
    "./message.txt",
    "This is a new message!",
    { flag: 'a' },
    (err) => {
        if (err) {
            console.log(err);
        }
        console.log("File written successfully!");
    }
);

fs.readFile("./message.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
});

//async await approach
async function readFile() {
    try {
        const data = await fs.promises.readFile("./message.txt", { encoding: "utf-8" });
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

readFile();