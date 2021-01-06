const express = require("express");
const LoginRouter = express.Router();
const Userdata = require("../model/Userdata");

// const bodyParser = require("body-parser");
// const { check, validationResult } = require("express-validator");

// const urlencodedParser = bodyParser.urlencoded({extended:false});

const signup=[
    {
        link:"/Signup",name:"Signup"
    }
];

function router(nav){
   
    LoginRouter.get("/",function(req,res){
        res.render("Login",{
            nav,
            title:'Library',
            signup,
        });
    });
    LoginRouter.get("/loginmsg",function(req,res){
        res.render("loginmsg",{
            nav,
            title:'Library',
            signup,
        });
    });
    LoginRouter.post("/add",function(req,res){
        var username = req.body.username;
        var password = req.body.password;
// console.log("us:"+username);
// console.log("us:"+password);
// console.log("us:"+warning+"sds");

        Userdata.findOne({email:username,pwd:password},function(err,user){
            if(err)
            {
                // console.log("here");
                console.log(err);
            }
            else if(!user){
                
                // console.log("not registerd")

                // console.log("us:"+warning+"sds");
                res.redirect("/login/loginmsg");
            }
            else{
                // console.log("success");

                if (username == "admin@gmail.com" && password == "Admin123"){
                    res.redirect("/home");  //admin login
                }
                else{
                    res.redirect("/home1"); //normal user login
                }
            
            }
        })
    })
    

    return LoginRouter;
}

module.exports = router;
