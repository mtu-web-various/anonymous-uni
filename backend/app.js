const express = require('express');
const app = express();

//Test Main Page
app.get("/", function(req, res){
    res.send("backend is working");
});

module.exports = app;