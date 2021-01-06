const express = require("express");

const booksRouter1 = express.Router();

const Bookdata = require("../model/Bookdata");

function router(nav4){
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
    
    booksRouter1.get("/",function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books1",
            {
                nav4,
                title:'Library',
                books
            });
        })        
    });
       
    booksRouter1.get("/:id",function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("book1",
            {
                nav4,
                title:'Library',
                book
            });
        });
        
    });
  

    return booksRouter1;
}

module.exports = router;