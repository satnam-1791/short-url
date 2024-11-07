const express= require('express');
const URL = require('../models/user');
const route = express.Router();


route.get('/',async(req,res)=>{
  if(!req.user) return res.redirect('/login')
  const allurl =await URL.find({createdBy:req.user._id})
  return  res.render("home",{
    urls:allurl
  })
})

route.get('/signup',(req,res)=>{
  return res.render("signup")
})

route.get('/login',(req,res)=>{
  return res.render("login")
})

module.exports = route