const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Library');
const PASSWORD = encodeURIComponent('User@123456');
mongoose.connect('mongodb+srv://user:User%2540123456@cluster0.cm452yw.mongodb.net/Library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;