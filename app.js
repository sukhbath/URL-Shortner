const express = require("express");
const mongoose = require("mongoose");
const shortid = require("shortid");
const ConnectDB = require("./util/MongoConnect");
const UrlModel = require("./model/URLmodel");
const UrlController = require("./controller/urlController");

const app = express();
ConnectDB();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static("./views"));
app.set("view-engine", "ejs");

app.get("/", function (reqest, response, next) {
  response.render(`index.ejs`, { title: "Welcome | URL Shortner" });
});

app.post("/short", UrlController.short);
app.get("/go/:id", UrlController.go);

app.listen(3000, function () {
  console.log("server is runnig");
});
