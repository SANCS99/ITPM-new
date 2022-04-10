const express = require("express");
const pizza = require('./models/pizzaModel');

const app= express();

const db = require("./db.js");
const pizzaModel = require("./models/pizzaModel");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("server working" + port);
});

app.get("/getpizzas", (req, res) => {

    pizza.find({} , (err , docs)=>{

        if(err) {
            
            console.log(err);
        }
        else{
            
            res.send(docs);
        }
    })

});

const port = process.env.PORT || 8000;

app.listen(port, () => 'Server running on port');