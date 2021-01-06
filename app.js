const express = require("express");
const port = process.env.PORT || 5000;
const bodyparser = require('body-parser');
const cors = require('cors');
const jwt=require('jsonwebtoken');
const app = express();
const multer = require('multer');
const path = require('path');

const Bookdata = require("../BackEnd/src/model/Bookdata");
const Authordata = require("../BackEnd/src/model/Authordata");
const Userdata = require("../BackEnd/src/model/Userdata");

// app.use(express.static(path.join(__dirname,"./public/Images")));
app.use('/public/Images',express.static(path.join("Images")));

// var path = './public/Images'
var storage = multer.diskStorage({
    destination: function(req,file,cb){
        console.log("testing1")

        cb(null,'./LibraryApp/src/assets/Images/');
    },
    // destination: path,
    filename: function(req,file,cb){
        console.log("testing2")

        // cb(null,file.originalname);
        var filetype = '';
      if(file.mimetype === 'image/gif') {
        filetype = 'gif';
      }
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
      cb(null, 'image-' + Date.now() + '.' + filetype);
    }
    
});
var upload = multer({storage:storage,});


app.use(cors());
app.use(bodyparser.json());
app.use(express.urlencoded({extended:true}));


function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    // console.log(token);
    if(token=="null"){
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token,'secretKey')
    console.log(payload)
    if(!payload)
    {
        return res.status(401).send('Unauthorized request')
    }
    // req.userId=payload.subject;
    // console.log(payload.subject);
    next()
}

function verifyAdmin(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    // console.log(token);
    if(token=="null"){
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token,'secretKey')
    console.log(payload)
    if(!payload)
    {
        return res.status(401).send('Unauthorized request')
    }
    if(payload.subject=="admin@gmail.comAdmin123"){
        console.log("testing")
        next()
    }
    // req.userId=payload.subject;
    // console.log(payload.subject);
}



//To list all the books
app.get('/books',verifyToken,function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    
    Bookdata.find()
            .then(function(books){
                res.send(books);
            });
});

//To list all the author
app.get('/authors',verifyToken,function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    Authordata.find()
            .then(function(authors){
                res.send(authors);
            });
});

//To add an Author
app.post("/addAuthor",verifyAdmin,upload.single('image'), function (req, res) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
       
    var item = {
        name: req.body.name,
        nationality: req.body.nationality,
        genre: req.body.genre,
        works: req.body.works,
        image: req.file.filename
    };
    var author = Authordata(item);
    // console.log(file);
    author.save();
    
});

//To add a Book
app.post("/addBook",verifyAdmin,upload.single('image'),function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access=Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    var item = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    language: req.body.language,
    image: req.file.filename
    };
    var book = Bookdata(item);
    book.save();
});

//To update an Author
app.put('/updateAuthor/:id', verifyAdmin,upload.single('image'),function (req, res) {
    const id = req.params.id;

    var item = {
        name: req.body.name,
        nationality: req.body.nationality,
        genre: req.body.genre,
        works: req.body.works,
        image: req.file.filename
    };
    console.log(id);


    Authordata.findOneAndUpdate({ _id: id }, item , { new: true },(err,doc)=>{
        if(!err){
            console.log(doc);
        }
        else{
            console.log(err);
        }
    })
        
});

//To update a Book
app.put('/updateBook/:id', verifyAdmin,upload.single('image'),function (req, res) {
    const id = req.params.id;

    var item = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        image: req.file.filename,
        language: req.body.language
    };
    console.log(id);


    Bookdata.findOneAndUpdate({ _id: id }, item , { new: true },(err,doc)=>{
        if(!err){
            console.log(doc);
        }
        else{
            console.log(err);
        }
    })
        
});

//To delete an Author
app.delete('/deleteAuthor/:id',verifyAdmin, function (req, res) {
    const id = req.params.id;
    Authordata.findOneAndDelete({_id:id},(err,doc)=>{
        if(!err){
            console.log("Author deleted"+doc);
        }
        else{
            console.log(err);
        }
    })
});

//To delete a Book
app.delete('/deleteBook/:id',verifyAdmin, function (req, res) {
    const id = req.params.id;
    Bookdata.findOneAndDelete({_id:id},(err,doc)=>{
        if(!err){
            console.log("Book deleted"+doc);
        }
        else{
            console.log(err);
        }
    })
});


//To register a new User
app.post('/register',function(req,res){
    var email = req.body.email;
    Userdata.findOne({ email: email }, function (err, user) {
        if (err) {
            // console.log("here");
            console.log(err);
        }
        else if (!user) {
            // console.log("not registerd")
            // console.log("us:"+warning+"sds");
            var item = {
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                pwd: req.body.pwd,
                Repwd: req.body.Repwd
            }
            var users = Userdata(item);
            users.save();
            var msgg="User Registration Successfull. Please Login to continue";
            console.log(msgg);
            res.send({msgg});
           
        }
        else {
            // console.log("success");
            var msgg = "User alreasy exists. Please login to continue";
            console.log(msgg);
            res.send({msgg})

        }
    })

})

//To login a user
app.post('/login',function(req,res){
        var email = req.body.username;
        var pwd = req.body.password;
       
        Userdata.findOne({email:email},function(err,user){
            if(err)
            {
                // console.log("here");
                console.log(err);
            }
            else {
                if(!user){ 
                    console.log(email)
                    console.log(pwd)              
                    var msgg="User is not Registered. Please Register to continue";
                    console.log(msgg);
                    res.status(401).send({msgg});              
                }
                else{
                    if(user.pwd != pwd){
                    var msgg="Entered Password does not match with the registered email ID";
                    console.log(msgg);
                    res.status(401).send({msgg});  
                    }
                    else{
                        //token generation
                        let payload = {subject:email+pwd}
                        let token = jwt.sign(payload,'secretKey')
                        if (email == "admin@gmail.com" && pwd == "Admin123"){
                            var msgg="Admin Logged in";
                            console.log(msgg);
                            res.status(200).send({msgg,token});   
                        }
                        else{
                            var msgg="User Logged in";
                            console.log(msgg);
                            res.status(200).send({msgg,token});                       
                        }
                    }
                }
                
            }
        })
})

app.listen(port,()=>{console.log("Server Ready at "+port)});