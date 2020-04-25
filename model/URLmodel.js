const mongoose = require("mongoose");

var urlSchema = new mongoose.Schema({
  actualUrl: String,
  uid: String
});

module.exports = mongoose.model('URL',urlSchema)
