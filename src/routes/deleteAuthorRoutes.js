const express = require('express');
const deleteAuthorRouter = express.Router();
const Authordata = require("../model/Authordata");

function router(nav, nav1, nav2, nav3) {


    deleteAuthorRouter.get('/:id', function (req, res) {
        const id = req.params.id;
        Authordata.findOneAndDelete({_id:id},(err,doc)=>{
            if(!err){
                console.log("Author deleted"+doc);
                res.redirect('/authors');
            }
            else{
                console.log(err);
            }
        })
    });

        // res.render('updateAuthor',
        //     {
        //         nav,
        //         title: 'Library',
        //         nav1,
        //         nav2,id
        //         //add author link create
        //     });
        // console.log(id);

        // Authordata.findByIdAndUpdate({id},
        //     {"name":req.body.name}

        // )
    // updateAuthorRouter.post('/update/:id', function (req, res) {
    //     const id = req.params.id;

    //     var item = {
    //         name: req.body.name,
    //         nationality: req.body.nationality,
    //         genre: req.body.genre,
    //         image: req.body.image
    //     };
    //     console.log(id);


    //     Authordata.findOneAndUpdate({ _id: id }, item , { new: true },(err,doc)=>{
    //         if(!err){
    //             console.log(doc);
    //             res.redirect('/authors');
    //         }
    //         else{
    //             console.log(err);
    //         }
    //     })
            
    // });


    return deleteAuthorRouter;
}
module.exports = router;