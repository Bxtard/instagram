const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});
const init = () => {
    app.listen(3000, ()=>{
        console.log("server started");
    });
}

module.exports = {init};