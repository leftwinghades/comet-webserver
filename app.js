require("dotenv").config({ path: __dirname + '/.env' });

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const path = require("path");
const fs = require("fs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/getLogs", (req, res) => {
    const readStream = fs.createReadStream(process.env.LOG_FILE_PATH, "utf8");
    let data = "";
    readStream.on("data", (chunk) => {
        data += chunk;
    }).on("end", () => {
        res.json({
            logs: data
        });
    });
});

app.listen(port, () => {
    console.log(`Listening at ${port}`);
});