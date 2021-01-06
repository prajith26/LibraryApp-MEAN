const express = require("express");
const authorRouter = express.Router();
const Authordata = require("../model/Authordata");

function router(nav, nav1, nav2, nav3) {
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

    authorRouter.get("/", function (req, res) {
        Authordata.find()
            .then(function (authors) {
                res.render("authors",
                    {
                        nav,
                        title: 'Library',
                        authors,
                        nav1,
                        nav2
                    });
            });

    });
    authorRouter.get("/addAuthor", function (req, res) {
        res.render("addAuthor",
            {
                nav,
                title: 'Library',
                nav1,
                nav2
                //add author link create
            });
    });



    authorRouter.post("/add", function (req, res) {

        var item = {
            name: req.body.name,
            nationality: req.body.nationality,
            genre: req.body.genre,
            works: req.body.works,
            image: req.body.image
        };
        var author = Authordata(item);
        author.save();
        res.redirect('/authors');
    });



    authorRouter.get("/:id", function (req, res) {
        const id = req.params.id;
        Authordata.findOne({ _id: id })
            .then(function (author) {
                res.render("author",
                    {
                        nav,
                        title: 'Library',
                        author,
                        nav1,
                        nav2,
                        nav3
                    });
            });

    });

    return authorRouter;
}
module.exports = router;