const express = require("express");
const SignupRouter = express.Router();
const Userdata = require("../model/Userdata");

let mssg = "";
function router(nav) {

    SignupRouter.get("/", function (req, res) {
        res.render("Signup", {
            nav,
            title: 'Library'
        });
    });

    // SignupRouter.post("/add",function(req,res){
    //     var item = {
    //         name: req.body.name,
    //         email: req.body.email,
    //         mobile: req.body.mobile,
    //         pwd: req.body.pwd,
    //         Repwd: req.body.Repwd
    //     }
    //     var users = Userdata(item);
    //     users.save();
    //     res.redirect('/login');
    // })

    SignupRouter.post("/add", function (req, res) {
        var email = req.body.email;
        // console.log("us:"+username);
        // console.log("us:"+password);
        // console.log("us:"+warning+"sds");

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
                mssg = "User registration Successfull. Please login to continue"
                res.redirect("/Signup/signupmsg");
            }
            else {
                // console.log("success");
                mssg = "User alreasy exists. Please login to continue"
                res.redirect("/Signup/signupmsg");
            }
        })
    });

    SignupRouter.get("/signupmsg", function (req, res) {
        res.render("signupmsg", {
            nav,
            title: 'Library',
            mssg
        });
    });

    return SignupRouter;
}

module.exports = router;