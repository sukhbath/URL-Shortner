const mongoose = require('mongoose')
exports.connectDB = async function () {
   try {
    await mongoose.connect('monodb://localhost:27017/URL', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    console.log('DB connected.')
   } catch (error) {
       throw err
   }

}