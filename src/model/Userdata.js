const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology',true);

mongoose.connect('mongodb+srv://userone:userone@fsdfiles.jxcel.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority',{useNewUrlParser:true});

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email:String,
    mobile:Number,
    pwd:String,
    Repwd:String
});

var Userdata = mongoose.model("userdata",UserSchema);

module.exports = Userdata;