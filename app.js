const express = require("express");
const mongoose = require("mongoose");
const URLcontroller = require("./Controller/URLcontroller");

const app = express();


mongoose
  .connect("mongodb://localhost:27017/tours")
  .then((e) => console.log("connected DB"))
  .then((e) => console.log("connection Failed."));

app.post('/URL',URLcontroller.createURL)
app.get('/URL/:id',URLcontroller.redirect)

app.listen(4000);
