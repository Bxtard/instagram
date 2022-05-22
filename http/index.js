
const express = require('express');
const api = require("./api");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json("hello from http");
});

app.use("/api", api);

const init = () => {
    app.listen(3000, ()=>{
        console.log("server started");
    });
}

module.exports = {init};