const mongoose = require('mongoose')
const connString = 'mongodb+srv://user_pradhan:TVI1DCfplDiuBLJw@cluster0.5kgs2.mongodb.net/shopping?retryWrites=true&w=majority';

mongoose.connect(connString,{ useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true })
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