const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');

//NidaYZ5aC4LXKqLD
mongoose
    .connect("mongodb+srv://talhamucar:NidaYZ5aC4LXKqLD@cluster0-dnv2d.mongodb.net/anynomous-uni")
        .then(() => {console.log("DB connection is successfull");})
        .catch(() =>{console.log("DB connection error");});

//Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//CORS Allowance
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

//Test Main Page
app.get("/", function(req, res){
    res.send("backend is working");
});

app.use("/api/user", userRoutes);

module.exports = app;