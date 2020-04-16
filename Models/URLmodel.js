const mongoose = require('mongoose')

var URLschema = new mongoose.Schema({
    exactURL:String,
    shortURL:String
})

var URL_Model = mongoose.model("URL",URLschema);

module.exports= URL_Model;