const LOGIN = require("../models/loginusers");
const { v4: uuidv4 } = require('uuid');
const {setUser} = require('./service/auth')

const loginUsers = async(req,res)=>{
    const {name,email,password} = req.body;
    const USERS = await LOGIN.create({
        name,
        email,
        password
    })

    return res.redirect("/")
}



const logedinUsers = async(req,res)=>{
    const {email,password} = req.body;
    const USER = await LOGIN.findOne({email,password});
    if(!USER) {
return res.render('login')
    } 
   // const DJ = uuidv4();
 const token =   setUser(USER);
  //  res.cookie('uid',token)
   // return res.redirect("/")
   return res.json({token})
}

module.exports = {loginUsers,logedinUsers}