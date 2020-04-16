const express = require("express")
const controller = require('./Controller/URLcontroller')
const DB = require('./DAO/Mongoose')
const app = express()

DB.connectDB();
app.use(express.json())

app.post('/',controller.createURL)
app.get('/:id',controller.redirect)


app.listen(3000)