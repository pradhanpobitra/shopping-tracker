require('dotenv').config()
const mongoose = require('mongoose')
 
mongoose.connect(process.env.MONGO_CONNECTION_URL,{ useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true })
        .then(() => console.log('db connected...'))
        .catch(err => console.error(err));

const menuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    gender: { type: String, required: true }
})
//
const Menu = new mongoose.model('data', menuSchema)
module.exports = Menu