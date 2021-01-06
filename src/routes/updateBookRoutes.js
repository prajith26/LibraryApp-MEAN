const express = require('express');
const updateBookRouter = express.Router();
const Bookdata = require("../model/Bookdata");

function router(nav, nav1, nav2, nav3) {


    updateBookRouter.get('/:id', function (req, res) {
        const id = req.params.id;

        res.render('updateBook',
            {
                nav,
                title: 'Library',
                nav1,
                nav2,id
                //add author link create
            });
        // console.log(id);

        // Authordata.findByIdAndUpdate({id},
        //     {"name":req.body.name}

        // )
    });
    updateBookRouter.post('/update/:id', function (req, res) {
        const id = req.params.id;

        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image,
            language: req.body.language
        };
        console.log(id);


        Bookdata.findOneAndUpdate({ _id: id }, item , { new: true },(err,doc)=>{
            if(!err){
                console.log(doc);
                res.redirect('/books');
            }
            else{
                console.log(err);
            }
        })
            
    });


    return updateBookRouter;
}
module.exports = router;