const express =  require("express")
const signup= express()
const model =  require( "../database/signschema")
signup.post("/signup",async(req,res)=>{
    const abdul = await new model({
        fname : req.body.fname,
        email : req.body.email,
       password : req.body.password,
       phone : req.body.phone,
       lname : req.body.lname,
       uname : req.body.uname
       
 
    }
    )
    const username = req.body.uname
    const check = await model.findOne({uname:username})
    if(check){
        res.json("user is already thier ")
    }
    else{
        const anas = await abdul.save()
    
        console.log(anas)
        res.send(anas)
    }
   
   
})

                       //login
signup.post("/login",async(req,res)=>{
    try {
        const username = req.body.uname;
        const password = req.body.password
        const checklogin = await model.findOne({uname:username,password:password})
        if(checklogin){
            res.send(`${username} has loged in sucessfully` )
        }
        else{
            res.send(`hey ${username} please check your login details again incase you have forget your login details tap forgot button just near password box `)
        }
        
    } catch (error) {
        
    }
})

module.exports = signup
