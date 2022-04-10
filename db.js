const mongoose  = require("mongoose");

var mongoURL = 'mongodb+srv://pizza:nipun@cluster0.7b3sy.mongodb.net/pizza'
mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', ()=>{
    console.log('Mongo DB Connection Successfull');

})

db.on('error', ()=>{
    console.log(`Mongo DB Connection Fail`)
})


module.exports = mongoose