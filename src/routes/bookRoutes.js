const express = require("express");
// const multer = require('multer'); // multer
// const upload = multer({dest: 'Images/'});
// const path = require('path');    // path
const booksRouter = express.Router();

const Bookdata = require("../model/Bookdata");

//Set Storage Engine
// const storage = multer.diskStorage({
//     destination: './public/Images/',
//     // filename: function(req)
// });

// const upload = multer({
//     storage: storage
// }).single('image')

function router(nav,nav1,nav2,nav3){
    // var books = [
    //     {
    //         title:"Tom n Jerry",
    //         author:"Joseph barabar",
    //         Genre:"Cartoon",
    //         img:"tom.jpg"
    //     },
    //     {
    //         title:"Harry Potter",
    //         author:"JK Rowling",
    //         Genre:"Fantasy",
    //         img:"harry.jpg"
    //     },
    //     {
    //         title:"To Kill a Mockingbird",
    //         author:"Harper Lee",
    //         Genre:"Thriller",
    //         img:"Mockingbird.jpg"
    //     },
    //     {
    //         title:"The Great Gatsby",
    //         author:"F. Scott Fitzgerald",
    //         Genre:"Literary fiction",
    //         img:"Gatsby.jpg"
    //     },
    //     {
    //         title:"One Hundred Years of Solitude",
    //         author:"Gabriel García Márquez",
    //         Genre:"Novel",
    //         img:"solitude.jpg"
    //     },
    //     {
    //         title:"The Lord Of The Rings",
    //         author:"J. R. R. Tolkien",
    //         Genre:"Fantasy",
    //         img:"rings.jpg"
    //     },
    //     {
    //         title:"A Passage to India",
    //         author:"E. M. Forster",
    //         Genre:"Political Fiction",
    //         img:"passage.jpg"
    //     },
    //     {
    //         title:"A Song Of Ice And Fire Series",
    //         author:"George R. R. Martin",
    //         Genre:"Fantasy",
    //         img:"got.jpg"
    //     },
    //     {
    //         title:"Brave New World",
    //         author:"Aldous Huxley",
    //         Genre:"Science Fiction",
    //         img:"BraveNewWorld.jpg"
    //     },
    //     {
    //         title:"The Eyre Affair",
    //         author:"Jasper Fforde",
    //         Genre:"Fantasy Fiction",
    //         img:"affair.jpg"
    //     }
    // ]
    
    booksRouter.get("/",function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",
            {
                nav,
                title:'Library',
                books,
                nav1,
                nav2
            });
        })        
    });
    
    
    

    booksRouter.get("/addBook",function(req,res){
        res.render("addBook",
        {
            nav,
            title:'Library',
            nav1,
            nav2
        });
    });

    booksRouter.post("/add",function(req,res){
        // upload(req.body.image);
        // console.log(req.file)
        var item = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        language: req.body.language,
        image: req.body.image
        };
        var book = Bookdata(item);
        book.save();
        res.redirect('/books');
        // res.send("hey");
    });

    booksRouter.get("/:id",function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("book",
            {
                nav,
                title:'Library',
                book,
                nav1,
                nav2,
                nav3
            });
        });
        
    });

   

    return booksRouter;
}

module.exports = router;