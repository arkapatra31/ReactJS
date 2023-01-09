const express = require('express');
const app = express();

app.get('/welcome',(req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send("Welcome");
});

app.listen(4000, () => {
    console.log("4000");
});