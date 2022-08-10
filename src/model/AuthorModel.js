const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Library');
mongoose.connect('mongodb+srv://user:User%2540123456@cluster0.cm452yw.mongodb.net/Library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;