const express = require("express")
const mongoose = require('mongoose')
const controller = require('./Controller/URLcontroller')
const app = express()

mongoose.connect('mongodb://localhost:27017/URL',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(e=>{
    console.log('connected')
}).catch(e=>{
    throw e
})

app.use(express.json())

app.post('/',controller.createURL)
app.get('/:id',controller.redirect)


app.listen(3000)