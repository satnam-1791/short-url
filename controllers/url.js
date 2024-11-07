const nanoID = require('nanoid');
const URL = require('../models/user')

const GenerateUrl = async(req,res)=>{
const body = req.body;
if(!body.url){
    return res.json({message:'URL required'})
}
const shortID = nanoID(8);
await URL.create({
    shortId:shortID,
    redirectUrl:body.url,
    visitHistory:[],
    createdBy:req.user._id,
})
return res.render("home",{
    id:shortID
})
}

const HandleAnalytics = async(req,res)=>{
    const shortId = req.params.shortId;
  const result = await URL.findOne({
        shortId
    })
    console.log(result)
    return res.json({
     totalClicks:result.visitHistory.length,
     analytics:result.visitHistory
    })
}

module.exports = {GenerateUrl, HandleAnalytics}