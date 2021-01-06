//Accessing Mongoose Package
const mongoose = require("mongoose");
mongoose.set('useUnifiedTopology',true);

//Database connection
mongoose.connect("mongodb+srv://userone:userone@fsdfiles.jxcel.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority",{useNewUrlParser:true});

//Schema Definition
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    language: String,
    image: String
});

//Model Creation
var Bookdata = mongoose.model("bookdata",BookSchema);

module.exports = Bookdata;


