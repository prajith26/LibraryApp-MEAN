const express = require("express");
const authorRouter1 = express.Router();
const Authordata = require("../model/Authordata");

function router(nav4) {
    // var authors = [
    //     {
    //         name:"Joseph barabar",
    //         Genre:"Cartoon",
    //         img:"barbara.jpg",
    //         country:"America"
    //     },
    //     {
    //         name:"JK Rowling",
    //         Genre:"Fantasy",
    //         img:"rowling.jpg",
    //         country:"Britain"
    //     },
    //     {
    //         name:"Harper Lee",
    //         Genre:"Fiction",
    //         img:"harper.jpg",
    //         country:"America"
    //     },
    //     {
    //         name:"F. Scott Fitzgerald",
    //         Genre:"Novel",
    //         img:"scott.jpg",
    //         country:"America"
    //     },
    //     {
    //         name:"Gabriel García Márquez",
    //         Genre:"Short Story",
    //         img:"gabriel.jpg",
    //         country:"Colombia"
    //     },
    //     {
    //         name:"J. R. R. Tolkien",
    //         Genre:"Fantasy",
    //         img:"tolkien.jpg",
    //         country:"South Africa"
    //     },
    //     {
    //         name:"E. M. Forster",
    //         Genre:"Fiction",
    //         img:"forster.jpg",
    //         country:"United Kingdom"
    //     },
    //     {
    //         name:"George R. R. Martin",
    //         Genre:"Fantasy",
    //         img:"george.jpg",
    //         country:"America"
    //     },
    //     {
    //         name:"Aldous Huxley",
    //         Genre:"Literature",
    //         img:"huxley.jpg",
    //         country:"United Kingdom"
    //     },
    //     {
    //         name:"Jasper Fforde",
    //         Genre:"Fantasy",
    //         img:"jasper.jpg",
    //         country:"United Kingdom"
    //     }
    // ]

    authorRouter1.get("/", function (req, res) {
        Authordata.find()
            .then(function (authors) {
                res.render("authors1",
                    {
                        nav4,
                        title: 'Library',
                        authors,
                    });
            });

    });
    
    
    authorRouter1.get("/:id", function (req, res) {
        const id = req.params.id;
        Authordata.findOne({ _id: id })
            .then(function (author) {
                res.render("author1",
                    {
                        nav4,
                        title: 'Library',
                        author
                    });
            });

    });

    return authorRouter1;
}
module.exports = router;